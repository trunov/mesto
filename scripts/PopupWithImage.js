import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, name) {
    const popupImg = this._popupSelector.querySelector(".popup__img");

    popupImg.src = link;
    popupImg.alt = name;
    this._popupSelector.querySelector(".popup__title-photo").textContent = name;

    super.open();
  }
}

export default PopupWithImage;
