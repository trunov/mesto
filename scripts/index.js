const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');


function openPopUp() {
    popup.classList.toggle('popup__open');
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', openPopUp);