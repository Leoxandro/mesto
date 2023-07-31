class Section {
    constructor({ renderer }, items) {
      this._renderer = renderer;
      this._container = document.querySelector(items);
    }

    renderItems(res) {
      res.forEach(this._renderer);
    }

    addItem(cardElement) {
      this._container.prepend(cardElement);
    }
  }

  export { Section };