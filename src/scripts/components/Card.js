class Card {
  constructor(
    data,
    cardSelector,
    currentUserId,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    handleDislikeCard
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDislikeCard = handleDislikeCard;

    this._likes = data.likes;
    this._currentUserId = currentUserId;
    this._owner = data.owner;
    this._isLiked = data.likes.some((user) => user._id === currentUserId);
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

    if (this._owner._id !== this._currentUserId) {
      this._view.querySelector(".cards__element-remove").remove();
    }

    this._likes.forEach((item) => {
      if (item._id == this._currentUserId) {
        this._view
          .querySelector(".cards__element-button")
          .classList.add("cards__element-button_active");
      }
    });

    this._cardButton = this._view.querySelector(".cards__element-button");
    this._cardItem = this._view.querySelector(".cards__element");
    this._counter = this._view.querySelector(".cards__element-like");

    this._view.querySelector(
      ".cards__element-like"
    ).textContent = this._likes.length;

    return this._view;
  }

  removeCardElement() {
    this._cardItem.remove();
  }

  setLikes(likes) {
    this._counter.textContent = likes;
  }

  _renderLikeBtn(isLiked) {
    if (isLiked) {
      this._cardButton.classList.add("cards__element-button_active");
    } else {
      this._cardButton.classList.remove("cards__element-button_active");
    }
  }

  processLikes(data) {
    this._isLiked = !this._isLiked;
    this.setLikes(data.likes.length);
    this._renderLikeBtn(this._isLiked);
  }

  _handleLike() {
    if (!this._isLiked) {
      this._handleLikeClick();
    } else {
      this._handleDislikeCard();
    }
  }

  _setEventListeners() {
    this._view
      .querySelector(".cards__element-remove")
      .addEventListener("click", this._handleDeleteClick);
    this._view
      .querySelector(".cards__element-button")
      .addEventListener("click", this._handleLike.bind(this));

    this._view
      .querySelector(".cards__element-img")
      .addEventListener("click", this._handleCardClick);
  }
}

export default Card;
