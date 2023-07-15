export default class Card {
    constructor(card, cardTemplate, handleCardClick, handleDeleteClick, handleLikeCard) {
        this._handleDeleteClick = handleDeleteClick;
        this._handleCardClick = handleCardClick;
        this._handleLikeCard = handleLikeCard;
        this._cardTemplate = cardTemplate;
        this._name = card.name;
        this._link = card.link;
        this._isLike = false;
        this._id = card._id;
    }

    generate = () => {
        this._card = this._getTemplate();
        this._cardBody = this._card.querySelector('.element');
        this._imageItem = this._card.querySelector('.element__img');
        this._deleteElement = this._card.querySelector('.element__delete-btn');
        this._elementsItemLike = this._card.querySelector('.element__like-btn');
        this._card.querySelector('.element__name').textContent = this._name;
        this._imageItem.setAttribute('src', this._link);
        this._imageItem.setAttribute('alt', this._name);
        this._setEventListener();
        return this._card;
    }
    
    _getTemplate() {
        return document
          .querySelector(this._cardTemplate)
          .content
          .cloneNode(true);
    }

    toggleLike() {
        this._elementsItemLike.classList.toggle('active');
    }
    
    deleteCard() {
        this._cardBody.remove();
    }
    
    _handleImageClick() {
        this._handleCardClick(this._name, this._link);
    }
    
    _setEventListener = () => {
        if (this._deleteElement) {
            this._deleteElement.addEventListener('click', () => this._handleDeleteClick(this));
        }
    
        if (this._elementsItemLike) {
            this._elementsItemLike.addEventListener('click', () => this._handleLikeCard(this));
        }

        this._imageItem.addEventListener('click', () => this._handleImageClick());
    }
}

