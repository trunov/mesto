import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector, popupImg, popupTitle) {
    super(popupSelector);
    this._popupImg = popupImg;
    this._popupTitle = popupTitle;
  }

  open(link, name) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    
    this._popupTitle.textContent = name;
    super.open();
  }
}

export default PopupWithImage;
