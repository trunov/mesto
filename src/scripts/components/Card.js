class Card {
  constructor(data, cardSelector, currentUserId, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this._likes = data.likes;
    this._owner = data.owner;
    this._currentUserId = currentUserId;
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

    this._likes.forEach((item) => {
      if (item._id == this._currentUserId) {
        this._view.querySelector('.cards__element-button').classList.add('cards__element-button_active');
      }
    });

    this._cardItem = this._view.querySelector(".cards__element");

    this._view.querySelector(
      ".cards__element-like"
    ).textContent = this._likes.length;

    return this._view;
  }

  removeCardElement() {
    this._cardItem.remove();
  }

  renderLike(likes) {
    this._view.querySelector(
      ".cards__element-like"
    ).textContent = likes;
  }

  setLike(data) {
    this.isLike();
    this.renderLike(data.likes.length);
    
  }

  isLike() {
    this._view
      .querySelector(".cards__element-button")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("cards__element-button_active");
      });
  }

  _setEventListeners() {
    this._view
      .querySelector(".cards__element-remove")
      .addEventListener("click", this._handleDeleteClick);
    this._view
      .querySelector(".cards__element-button")
      .addEventListener("click", this._handleLikeClick);

    this._view
      .querySelector(".cards__element-img")
      .addEventListener("click", this._handleCardClick);
  }
}

export default Card;
