class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);
    return cardTemplate;
  }

  getView() {
    this._view = this._getTemplate();
    this._view.querySelector(".cards__element-title").textContent = this._name;
    this._setEventListeners();
    const cardImage = this._view.querySelector(".cards__element-img");
    cardImage.src = this._link;
    cardImage.alt = this._name;
    return this._view;
  }

  _setEventListeners() {
    this._view
      .querySelector(".cards__element-remove")
      .addEventListener("click", function (evt) {
        evt.target.closest(".cards__element").remove();
      });
    this._view
      .querySelector(".cards__element-button")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("cards__element-button_active");
      });

    this._view
      .querySelector(".cards__element-img")
      .addEventListener("click", this._handleCardClick);
  }
}

export default Card;
