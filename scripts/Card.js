import { openPopup } from './popup.js';
import { popupPhoto, popupImg, popupTitle } from './index.js';

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openPopupPhoto = this._openPopupPhoto.bind(this);
    }
    
    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector).content.cloneNode(true);;
        return cardTemplate;
    }

    getView() {
        this._view = this._getTemplate();
        this._view.querySelector('.cards__element-title').textContent = this._name;
        this._setEventListeners();
        const cardImage = this._view.querySelector('.cards__element-img');
        cardImage.src = this._link;
        cardImage.alt = this._name;
        return this._view;
    }

    _openPopupPhoto() {
        popupImg.src = this._link;
        popupImg.alt = this._name;
        popupTitle.textContent = this._name;

        openPopup(popupPhoto)
    }

    _setEventListeners() {
        this._view.querySelector('.cards__element-remove').addEventListener('click', function(evt) {
            evt.target.closest('.cards__element').remove();
        });
        this._view.querySelector('.cards__element-button').addEventListener('click', function (evt) {
            evt.target.classList.toggle('cards__element-button_active')
        });
        this._view.querySelector('.cards__element-img').addEventListener('click', this._openPopupPhoto);
    }
}

export default Card;