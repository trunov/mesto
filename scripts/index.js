import Card from "./Card.js";

import PopupWithImage from "./PopupWithImage.js";

import PopupWithForm from "./PopupWithForm.js";

import Section from "./Section.js";

import UserInfo from "./UserInfo.js";

import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");

const popupEdit = document.querySelector(".popup-edit");
const popupEditForm = popupEdit.querySelector(".popup__form");

const text = popupEdit.querySelector(".popup__text_type_name");
const description = popupEdit.querySelector(".popup__text_type_description");

const template = "#card-template";

const popupAdd = document.querySelector(".popup-image");
const popupAddForm = popupAdd.querySelector(".popup__form");

const popups = Array.from(document.querySelectorAll(".popup"));

const imageFormElement = popups.find((image) =>
  image.querySelector(".popup-image__form")
);

const editFormElement = popups.find((edit) =>
  edit.querySelector(".popup-edit__form")
);

const userData = new UserInfo({
  nameSelector: profileName,
  description: profileDescription,
});
const editFormValidator = new FormValidator(valObj, popupEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(valObj, popupAddForm);
addFormValidator.enableValidation();

function createCard(data) {
  const card = new Card(data, template, () => {
    imgPopup.open(data.link, data.name);
  });
  return card;
}

function openPopupEdit() {
  const editSaveButton = editFormElement.querySelector(".popup__submit");
  editSaveButton.classList.add("popup__submit-button_disabled");
  editSaveButton.disabled = true;

  const profile = userData.getUserInfo();
  text.value = profile.name;
  description.value = profile.description;

  editPopup.open();
}

function openPopupAdd() {
  const addSaveButton = imageFormElement.querySelector(".popup__submit");
  addSaveButton.classList.add("popup__submit-button_disabled");
  addSaveButton.disabled = true;

  addPopup.open();
}

// создаём экземпляр класса Section для initialCards

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      const cardElement = card.getView();
      cardsList.addItem(cardElement, true);
    },
  },
  cardContainer
);

cardsList.renderItems();

const editPopup = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (item) => {
    userData.setUserInfo(item.name, item.description);
  },
});

editPopup.setEventListeners();

const addPopup = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: () => {
    const inputData = addPopup._getInputValues();

    const newPlaceData = {
      name: inputData.title,
      link: inputData.link,
    };

    const card = createCard(newPlaceData);
    const cardElement = card.getView();
    cardsList.addItem(cardElement, false);
  },
});

addPopup.setEventListeners();

const imgPopup = new PopupWithImage(popupPhoto);

imgPopup.setEventListeners();

editButton.addEventListener("click", openPopupEdit);
addButton.addEventListener("click", openPopupAdd);

export { popupPhoto, popupImg, popupTitle };
