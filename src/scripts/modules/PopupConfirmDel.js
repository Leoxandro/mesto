import { Popup } from "./Popup.js";

class PopupConfirmDel extends Popup {
  constructor(popupSelector, { callbackNotice }) {
    super(popupSelector);
    this._submitButton = this._popupItem.querySelector('.popup__form');
    this._callbackNotice = callbackNotice;
  }

  open(cardObj, cardId) {
    this._cardObj = cardObj;
    this._cardId = cardId;
    super.open();
  }

  setEventListeners() {
    this._submitButton.addEventListener('submit', (evt) => { 
        evt.preventDefault();
        this._callbackNotice(this._cardObj, this._cardId);
    });
    super.setEventListeners();
  }
}

export { PopupConfirmDel };