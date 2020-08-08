const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');

const popupEdit = document.querySelector('.popup-edit');

const closeButton = popupEdit.querySelector('.popup__close-button');
const text = popupEdit.querySelector('.popup__text_type_name');
const description = popupEdit.querySelector('.popup__text_type_description');
const popupEditForm = popupEdit.querySelector('.popup__form');

const popupImage = document.querySelector('.popup-image');

const addButton = document.querySelector('.profile__add-button');
const closeImageButton = popupImage.querySelector('.popup__close-button');
const popupImgForm = popupImage.querySelector('.popup__form');
const link = popupImage.querySelector('.popup__text_type_link');
const title = popupImage.querySelector('.popup__text_type_title');

const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.cards__container');

const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoImg = popupPhoto.querySelector('.popup__img');
const popupPhotoTitle = popupPhoto.querySelector('.popup__title-photo');
const closePhoto = popupPhoto.querySelector('.popup__close-button');

const popups = Array.from(document.querySelectorAll(".popup"));

const closeButtons = popups.map((button) =>
    button.querySelector(".popup__close-button")
);

const imageFormElement = popups.find((image) =>
    image.querySelector(".popup-image__form")
);

const editFormElement = popups.find((edit) =>
    edit.querySelector(".popup-edit__form")
);

function openPopup(popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', escape);
}

function closePopup(popup) {
    popup.classList.remove("popup_open");
    document.removeEventListener('keydown', escape);
}

function escape(evt) {
    const popupOpen = document.querySelector('.popup_open');
    if (evt.key === "Escape") {
        closePopup(popupOpen);
    }
}

closeButtons.forEach((item) => item.addEventListener("click", () => closePopup(item.closest('.popup'))));

function openPopupEdit() {
    const editSaveButton = editFormElement.querySelector('.popup__submit');
    editSaveButton.classList.add('popup__submit-button_disabled');
    editSaveButton.disabled = true;

    text.value = profileName.textContent;
    description.value = profileDescription.textContent;

    openPopup(popupEdit);
}

function openPopupAdd() {

    const addSaveButton = imageFormElement.querySelector('.popup__submit');
    addSaveButton.classList.add('popup__submit-button_disabled');
    addSaveButton.disabled = true;

    title.value = "";
    link.value = "";

    openPopup(popupImage);
}


function makeCard(name = 'Место', link = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg') {
    const cardElement = cardTemplate.cloneNode(true);

    const removeButton = cardElement.querySelector('.cards__element-remove');

    const likeButton = cardElement.querySelector('.cards__element-button');

    const cardImage = cardElement.querySelector('.cards__element-img');
    cardImage.addEventListener('click', openPhoto);

    removeButton.addEventListener('click', function () {
        const listItem = removeButton.closest('.cards__element');
        listItem.remove();
    });

    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__element-button_active');
    });

    cardElement.querySelector('.cards__element-title').textContent = name;
    cardElement.querySelector('.cards__element-img').src = link;
    cardElement.querySelector('.cards__element-img').alt = name;
    return cardElement;
}


function openPhoto(evt) {
    const element = evt.target.closest('.cards__element');
    const img = element.querySelector('.cards__element-img').src;
    const title = element.querySelector('.cards__element-title').textContent;

    popupPhotoImg.src = img;
    popupPhotoImg.alt = title;
    popupPhotoTitle.textContent = title;

    openPopup(popupPhoto);
}

initialCards.forEach(element => {
    cardContainer.append(makeCard(element.name, element.link));
});

function submitEditForm(evt) {
    evt.preventDefault();
    profileName.textContent = text.value;
    profileDescription.textContent = description.value;
    closePopup(popupEdit);
}

function submitImgForm(evt) {
    evt.preventDefault();
    cardContainer.prepend(makeCard(title.value, link.value));
    title.value = '';
    link.value = '';
    closePopup(popupImage);
}

popups.forEach((item) => item.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('popup')) {
        item.classList.remove("popup_open");
    }
}));

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);

popupEditForm.addEventListener('submit', submitEditForm);
popupImgForm.addEventListener('submit', submitImgForm);