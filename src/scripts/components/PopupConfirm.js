import { Popup } from "./Popup.js";

class PopupConfirm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__submit-button').addEventListener('click', evt => {
      evt.preventDefault();
      this._handleSubmit(this._card);
    });
    super.setEventListeners();
  }
}

export default PopupConfirm;
