import Card from './modules/Card.js';
import FormValidator from './modules/FormValidator.js';

const popupNameInput = document.querySelector(".popup__item_type_name");
const popupDescriptionInput = document.querySelector(".popup__item_type_info");
const popupPlaceInput = document.querySelector('.popup__item_type_place');
const popupLinkInput = document.querySelector('.popup__item_type_link');
const editBtn = document.querySelector('.profile__btn_action_edit');
const addBtn = document.querySelector('.profile__btn_action_add');
const popupEditWin = document.querySelector('.popup-edit');
const popupAddWin = document.querySelector('.popup-add');
const popupFullScreen = document.querySelector('.popup-photo');
const closeBtns = document.querySelectorAll('.popup__btn_action_close');
const nameInput = document.querySelector(".profile__author");
const descriptionInput = document.querySelector(".profile__author-description");
const elementContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');
const addForm = popupAddWin.querySelector('.popup__form');
const editForm = popupEditWin.querySelector('.popup__form');


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 



// Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

closeBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

// Функция закрытия попапов через оверлэй

document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('mousedown', function(evt) {
    if (evt.target.classList.contains('popup')) { 
      closePopup(popup);
    }
  });
});


// Функция открытия попапов

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}


// Открыть/Закрыть "Попап" редактирования профиля

editBtn.addEventListener('click', function() {
  openPopup(popupEditWin);
  popupNameInput.value = nameInput.textContent;
  popupDescriptionInput.value = descriptionInput.textContent;
});


// Внести изменения в профиль

editForm.addEventListener("submit", function(event) {
  event.preventDefault();
  nameInput.textContent = popupNameInput.value;
  descriptionInput.textContent = popupDescriptionInput.value;

  closePopup(popupEditWin);
});

// Появление стандартных изображений на странице при загрузке

function createCard(card) {
  const newCard = new Card(
    card,
    '#card__template',
    handleCardClick,
    handleDeleteClick,
    handleLikeCard
  );
  
  return newCard.generate();
}

function handleCardClick(name, link) {
  openPopup(popupFullScreen);
  popupImage.src = link;
  popupImage.alt = name;
  popupDescription.textContent = name;
}

function handleDeleteClick(card) {
  card.deleteCard();
}

function handleLikeCard(card) {
  card.toggleLike();
}

function renderCard(card) {
  const newCardElement = createCard(card);
  elementContainer.prepend(newCardElement);
}

initialCards.forEach(function (card) {
  renderCard(card);
});


// Добавить новую карточку


addBtn.addEventListener("click", function() {
    openPopup(popupAddWin);
});

addForm.addEventListener('submit', function(event){
  event.preventDefault();

  const card = {
      link: popupLinkInput.value,
      name: popupPlaceInput.value,
  };

  renderCard(card);

  popupLinkInput.value = '';
  popupPlaceInput.value = '';


  formValidatorAddCard.disableSubmitButton();

  closePopup(popupAddWin);
});

// Инициализация валидации форм

const settings = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_action_submit_disabled',
  inputErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_visible'
};

const formEditProfile = popupEditWin.querySelector('.popup__form');
const formAddCard = popupAddWin.querySelector('.popup__form');

const formValidatorEditProfile = new FormValidator(settings, formEditProfile);
const formValidatorAddCard = new FormValidator(settings, formAddCard);

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
