const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');

const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const text = popup.querySelector('.popup__text_type_name');
const description = popup.querySelector('.popup__text_type_description');
const popupForm = popup.querySelector('.popup__form');

function toggle() {
    popup.classList.toggle('popup__open');
}

function openPopUp() {
    text.value = profileName.textContent;
    description.value = profileDescription.textContent;
    toggle();
}

function submitForm(evt) {
    evt.preventDefault();
    profileName.textContent = text.value;
    profileDescription.textContent = description.value;
    toggle();
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', toggle);
popupForm.addEventListener('submit', submitForm);
