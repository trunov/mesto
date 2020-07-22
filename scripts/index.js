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



function toggleEdit() {
    popupEdit.classList.toggle('popup_open');
}

function toggleImage() {
    popupImage.classList.toggle('popup_open');
}

function openPopUp() {
    text.value = profileName.textContent;
    description.value = profileDescription.textContent;
    toggleEdit();
}

function makeCard(name = 'Место', link = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg') {
    const cardElement = cardTemplate.cloneNode(true);

    const removeButton = cardElement.querySelector('.cards__element-remove');

    const likeButton = cardElement.querySelector('.cards__element-button');

    removeButton.addEventListener('click', function() {
        const listItem = removeButton.closest('.cards__element');
        listItem.remove();
    });

    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__element-button_active');
      });

    cardElement.querySelector('.cards__element-title').textContent = name;
    cardElement.querySelector('.cards__element-img').src = link;
    cardContainer.prepend(cardElement);
}

initialCards.forEach(element => {
    makeCard(element.name, element.link);
});

function submitEditForm(evt) {
    evt.preventDefault();
    profileName.textContent = text.value;
    profileDescription.textContent = description.value;
    toggleEdit();
}

function submitImgForm(evt) {
    evt.preventDefault();
    makeCard(title.value, link.value);
    title.value = '';
    link.value = '';
    toggleImage();
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', toggleEdit);
popupEditForm.addEventListener('submit', submitEditForm);
popupImgForm.addEventListener('submit', submitImgForm);

addButton.addEventListener('click', toggleImage);
closeImageButton.addEventListener('click', toggleImage);
