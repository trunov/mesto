class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer; // renderer — это функция

    this._container = containerSelector;
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }

  addItem(card, isArray) {
    if (isArray) {
      this._container.append(card);
    } else {
      this._container.prepend(card);
    }
  }
}

export default Section;
