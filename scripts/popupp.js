export function openPopup (popup) {
    popup.classList.add('popup_open')
    document.addEventListener('keydown', escape)
}
  
export function closePopup (popup) {
    popup.classList.remove('popup_open')
    document.removeEventListener('keydown', escape)
}

function escape (evt) {
    const popupOpen = document.querySelector('.popup_open')
      if (evt.key === 'Escape') {
        closePopup(popupOpen)
      }
}