class Section {
    constructor({ renderer }, items) {
      this._renderer = renderer;
      this._container = document.querySelector(items);
    }

    renderItems(data) {
      data.forEach((item) => {
        this._renderer(item)
      });
    }

    addItem(cardElement) {
      this._container.prepend(cardElement);
    }
  }

  export { Section };