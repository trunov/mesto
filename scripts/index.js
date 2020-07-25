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

function toggleEdit() {
    popupEdit.classList.toggle('popup_open');
}

function toggleImage() {
    popupImage.classList.toggle('popup_open');
}

function togglePhoto() {
    popupPhoto.classList.toggle('popup_open');
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

    const cardImage = cardElement.querySelector('.cards__element-img');
    cardImage.addEventListener('click', openPhoto);

    removeButton.addEventListener('click', function() {
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

    popupPhoto.classList.toggle('popup_open');
}

initialCards.forEach(element => {
    cardContainer.append(makeCard(element.name, element.link));
});

function submitEditForm(evt) {
    evt.preventDefault();
    profileName.textContent = text.value;
    profileDescription.textContent = description.value;
    toggleEdit();
}

function submitImgForm(evt) {
    evt.preventDefault();
    cardContainer.prepend(makeCard(title.value, link.value));
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

closePhoto.addEventListener('click', togglePhoto);


