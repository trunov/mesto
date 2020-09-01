import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {

    }

    setEventListeners() {
        
    }
}

export default PopupWithForm;