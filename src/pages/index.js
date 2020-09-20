import "./index.css";

import Card from "./../scripts/components/Card.js";

import Api from "./../scripts/components/Api.js";

import PopupConfirm from "./../scripts/components/PopupConfirm.js";

import PopupWithImage from "./../scripts/components/PopupWithImage.js";

import PopupWithForm from "./../scripts/components/PopupWithForm.js";

import Section from "./../scripts/components/Section.js";

import UserInfo from "./../scripts/components/UserInfo.js";

import FormValidator from "./../scripts/components/FormValidator.js";

const valObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit",
  activeButtonClass: "popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_visible",
};

const popupPhoto = document.querySelector(".popup-photo");
const popupImg = popupPhoto.querySelector(".popup__img");
const popupTitle = popupPhoto.querySelector(".popup__title-photo");

const cardContainer = document.querySelector(".cards__container");

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");
const avatar = profile.querySelector(".profile__avatar");

const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");

const popupEdit = document.querySelector(".popup-edit");
const popupEditForm = popupEdit.querySelector(".popup__form");
const popupEditButton = popupEdit.querySelector(".popup__submit");

const popupAvatar = document.querySelector(".popup-avatar");
const popupAvatarForm = popupAvatar.querySelector(".popup__form");
// const popupEditButton = popupEdit.querySelector(".popup__submit");

const text = popupEdit.querySelector(".popup__text_type_name");
const description = popupEdit.querySelector(".popup__text_type_description");

const template = "#card-template";

const popupAdd = document.querySelector(".popup-image");
const popupAddForm = popupAdd.querySelector(".popup__form");
const popupAddButton = popupAdd.querySelector(".popup__submit");

const popups = Array.from(document.querySelectorAll(".popup"));

const popupCon = document.querySelector(".popup-confirm");
const deleteButton = popupCon.querySelector(".popup__submit-button");

const popupAv = document.querySelector(".popup-avatar");

const imageFormElement = popups.find((image) =>
  image.querySelector(".popup-image__form")
);

const editFormElement = popups.find((edit) =>
  edit.querySelector(".popup-edit__form")
);

const editFormAvatar = popups.find((edit) =>
  edit.querySelector(".popup-avatar__form")
);

const userData = new UserInfo({
  nameSelector: profileName,
  description: profileDescription,
  avatar: avatar,
});
const editFormValidator = new FormValidator(valObj, popupEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(valObj, popupAddForm);
addFormValidator.enableValidation();

const AvaFormValidator = new FormValidator(valObj, popupAvatarForm);
AvaFormValidator.enableValidation();

function renderLoading(check) {
  if (check) {
    return "Сохранение...";
  } else {
    return "Сохранить";
  }
}

// экземпляра класса Api
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-15",
  headers: {
    authorization: "ae4fa4cf-0e81-45c0-b4da-16ce9ece8f68",
    "Content-type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((values) => {
    //попадаем сюда когда оба промиса будут выполнены
    setUser(values[0]);
    setupCards(values[1]);
  })
  .catch((err) => {
    //попадаем сюда если один из промисов завершаться ошибкой
    console.log(err);
  });

let currentUser;

function setUser(user) {
  userData.setUserInfo(user.name, user.about, user.avatar);
  currentUser = user._id;
}

function createCard(data) {
  const card = new Card(
    data,
    template,
    currentUser,
    () => {
      imgPopup.open(data.link, data.name);
    },
    () => {
      card._id = data._id;
      popupConfirm.open(card);
    },
    () => {
      api
        .addLike(data._id)
        .then((res) => {
          card.processLikes(res);
        })
        .catch((err) => console.log(`Error ${err}`));
    },

    () => {
      api
        .deleteLike(data._id)
        .then((res) => {
          card.processLikes(res);
        })

        .catch((err) => console.log(`Error ${err}`));
    }
  );

  return card;
}

const avatarPopup = new PopupWithForm({
  popupSelector: popupAv,
  handleFormSubmit: (item) => {
    const avatarSaveButton = popupAv.querySelector(".popup__submit-button");
    avatarSaveButton.textContent = renderLoading(true);
    api
      .editAvatar(item)
      .then((res) => {
        console.log(res);
        userData.setUserInfo(res.name, res.about, res.avatar);
        avatarSaveButton.textContent = renderLoading(false);
        avatarPopup.close();
      })
      .catch((err) => console.log(`Error ${err}`));
  },
});

avatarPopup.setEventListeners();

const popupConfirm = new PopupConfirm({
  popupSelector: popupCon,
  handleSubmit: (item) => {
    deleteButton.textContent = "Удаление...";
    api
      .deleteCard(item._id)
      .then(() => {
        item.removeCardElement();
        popupConfirm.close();
        deleteButton.textContent = "Да";
      })
      .catch((err) => console.log(`Error ${err}`));
  },
});
popupConfirm.setEventListeners();

function buttonEdit(element) {
  const saveButton = element.querySelector(".popup__submit");
  saveButton.classList.add("popup__submit-button_disabled");
  saveButton.disabled = true;
}

function openPopupEdit() {
  buttonEdit(editFormElement);

  const profile = userData.getUserInfo();
  text.value = profile.name;
  description.value = profile.description;

  editPopup.open();
}

function openPopupAdd() {
  buttonEdit(imageFormElement);

  addPopup.open();
}

function openPopupAvatar() {
  buttonEdit(editFormAvatar);
  avatarPopup.open();
}

function setupCards(cards) {
  const cardsList = new Section(
    {
      items: cards,
      renderer: (item) => {
        const card = createCard(item);
        const cardElement = card.getView();
        cardsList.addItem(cardElement, true);
      },
    },
    cardContainer
  );

  cardsList.renderItems();
}

const userCard = new Section(
  {
    data: [],
  },
  cardContainer
);

//! WORK AREA
const editPopup = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (item) => {
    popupEditButton.textContent = renderLoading(true);
    api
      .editProfile(item)
      .then((result) => {
        userData.setUserInfo(result.name, result.about, result.avatar);
        popupEditButton.textContent = renderLoading(false);
        editPopup.close();
      })
      .catch((err) => console.log(`Error ${err}`));
  },
});

editPopup.setEventListeners();

const addPopup = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (item) => {
    const newPlaceData = {
      name: item.title,
      link: item.link,
    };
    popupAddButton.textContent = renderLoading(true);
    api
      .addNewCard(newPlaceData)
      .then((result) => {
        const card = createCard(result);
        const cardElement = card.getView();
        userCard.addItem(cardElement, false);
        popupAddButton.textContent = renderLoading(false);
        addPopup.close();
      })
      .catch((err) => console.log(`Error ${err}`));
  },
});

addPopup.setEventListeners();

const imgPopup = new PopupWithImage(popupPhoto, popupImg, popupTitle);
imgPopup.setEventListeners();

editButton.addEventListener("click", openPopupEdit);
addButton.addEventListener("click", openPopupAdd);
avatar.addEventListener("click", openPopupAvatar);
