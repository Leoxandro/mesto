export class Card {
    constructor(cardObj, cardTemplate, userId, authorInfo, handleCardClick, handleDeleteClick, handleLikeCard, handleDislikeCard) {
        this._cardTemplate = cardTemplate;
        this._card = cardObj;
        this._name = cardObj.name;
        this._link = cardObj.link;

        this._handleDeleteClick = handleDeleteClick;
        this._handleCardClick = handleCardClick;
        this._putLike = handleLikeCard;
        this._removeLike = handleDislikeCard;

        this._cardId = authorInfo.cardId;
        this._userId = userId;
        this._authorId = authorInfo.authorId;
    }

    generate = () => {
        this._cardTemp = this._getTemplate();
        this._imageItem = this._cardTemp.querySelector('.element__img');
        this._elementName = this._cardTemp.querySelector('.element__name');
        this._deleteElement = this._cardTemp.querySelector('.element__delete-btn');
        this._elementsItemLike = this._cardTemp.querySelector('.element__like-btn');
        this.likeCounter = this._cardTemp.querySelector('.element__like-counter');

        this._elementName.textContent = this._name;
        this._imageItem.src = this._link;
        this._imageItem.alt = this._cardName;
        this.renderCardLike(this._card);

        this._setEventListener();

        return this._cardTemp;
    }
    
    _getTemplate() {
        return document
          .querySelector(this._cardTemplate)
          .content
          .querySelector('.element')
          .cloneNode(true);
    }

    _toggleLike = () => {
      this._likedCard() 
        ? this._removeLike(this_.cardId)
        : this._putLike(this._cardId);
    };
    
    renderCardLike(card) {
        this._likeArea = card.likes;

        if (this._likeArea.length === 0) {
          this.likeCounter.textContent = '';
        } else {
          this.likeCounter.textContent = this._likeArea.length.toString();
        }
        if (this._likedCard()) {
          this._elementsItemLike.classList.add('active');
        } else {
          this._elementsItemLike.classList.remove('active');
        }
    }

    _likedCard() {
        return this._likeArea.find((userLike) => userLike._id === this._userId);
    }


    deleteCard() {
        this._cardTemp.remove();
        this._cardTemp = null;
    }
    

    _setEventListener = () => {
        this._elementsItemLike.addEventListener('click', () => this._toggleLike())
        this._imageItem.addEventListener('click', () => this._handleCardClick(this._name, this._link));
        if (this._userId === this._authorId) {
        this._deleteElement.addEventListener('click', () =>  this._handleDeleteClick(this, this._cardId));
        } else {
        this._deleteElement.remove();
        }
        console.log("Is liked:", this._likedCard());
    }
}