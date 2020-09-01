import Card from './Card.js';

import Section from './Section.js';

import FormValidator from './FormValidator.js';

import { openPopup, closePopup } from './popup.js';

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
]

const valObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__error',
  errorClass: 'popup__error_visible'
};

const popupPhoto = document.querySelector('.popup-photo');
const popupImg = popupPhoto.querySelector('.popup__img');
const popupTitle = popupPhoto.querySelector('.popup__title-photo');

const popupImage = document.querySelector('.popup-image');
const popupImgForm = popupImage.querySelector('.popup__form');
const cardContainer = document.querySelector('.cards__container');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');

const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup__form');

const text = popupEdit.querySelector('.popup__text_type_name')
const description = popupEdit.querySelector('.popup__text_type_description')

const link = popupImage.querySelector('.popup__text_type_link');
const title = popupImage.querySelector('.popup__text_type_title');

const template = '#card-template';

const popupAdd = document.querySelector('.popup-image');
const popupAddForm = popupAdd.querySelector('.popup__form');

const popups = Array.from(document.querySelectorAll('.popup'));

const imageFormElement = popups.find((image) =>
  image.querySelector('.popup-image__form')
)

const editFormElement = popups.find((edit) =>
  edit.querySelector('.popup-edit__form')
)

const closeButtons = popups.map((button) =>
  button.querySelector('.popup__close-button')
)

// initialCards.forEach(item => {
//   cardContainer.append(createCard(item));
// })

const editFormValidator = new FormValidator(valObj, popupEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(valObj, popupAddForm);
addFormValidator.enableValidation();

function createCard(data) {
  const card = new Card(data, template);
  // const cardElement = card.getView();
  return card;
}

function openPopupEdit () {

  const editSaveButton = editFormElement.querySelector('.popup__submit')
  editSaveButton.classList.add('popup__submit-button_disabled')
  editSaveButton.disabled = true

  text.value = profileName.textContent
  description.value = profileDescription.textContent

  openPopup(popupEdit)
}

function openPopupAdd () {

  const addSaveButton = imageFormElement.querySelector('.popup__submit')
  addSaveButton.classList.add('popup__submit-button_disabled')
  addSaveButton.disabled = true

  title.value = '';
  link.value = '';

  openPopup(popupImage)
}

closeButtons.forEach((item) => item.addEventListener('click', () => closePopup(item.closest('.popup'))));

popups.forEach((item) => item.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(item);
    }
}));

function submitEditForm (evt) {
  evt.preventDefault();
  profileName.textContent = text.value;
  profileDescription.textContent = description.value;
  closePopup(popupEdit);
}

function addCard(card) {
  cardContainer.prepend(card);
}

function submitImgForm (evt) {
  evt.preventDefault()
  const data = { name: title.value, link: link.value };
  addCard(createCard(data));

  title.value = '';
  link.value = '';
  closePopup(popupImage);
}

// создаём экземпляр класса Section для initialCards

const cardsList = new Section({
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

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);

popupEditForm.addEventListener('submit', submitEditForm);
popupImgForm.addEventListener('submit', submitImgForm);

export { popupPhoto, popupImg, popupTitle };