import { Card } from '../scripts/modules/Card.js';
import { Section } from '../scripts/modules/Section.js';
import { PopupWithForm } from '../scripts/modules/PopupWithForm.js';
import { PopupWithImage } from '../scripts/modules/PopupWithImage.js';
import { UserInfo } from '../scripts/modules/UserInfo.js';
import FormValidator from '../scripts/modules/FormValidator.js';
import {
  popupNameInput, popupDescriptionInput, popupPlaceInput,
  popupLinkInput, editBtn, addBtn,
  popupEditWin, popupAddWin, popupFullScreen,
  closeBtns, elementContainer, popupImage, popupDescription,
  addForm, editForm, settings, formAddCard, formEditProfile
} from '../scripts/utils/constants.js';
import { initialCards } from '../scripts/utils/constants.js';
import './index.css';



// Получение селекторов для класса UserInfo

const userInfo = new UserInfo({
  usernameSelector: ".profile__author",
  userDescriptionSelector: ".profile__author-description"
});


// Внести изменения в профиль

editForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = {
    username: popupNameInput.value,
    description: popupDescriptionInput.value
  };
  userInfo.setUserInfo(formData);
  closePopup(popupEditWin);
});


// Создание экземпляров классов

const popupWithImage = new PopupWithImage('.popup-photo');

const popupEditProfile = new PopupWithForm('.popup-edit', {
  callbackFormSubmit: handleEditProfileFormSubmit
});

const popupAddCard = new PopupWithForm('.popup-add', {
  callbackFormSubmit: handleAddCardFormSubmit
});

// Функции обработчиков самбитов форм

function handleEditProfileFormSubmit(formData) {
  const { username, description } = formData;
  userInfo.setUserInfo({ username, description });
  popupEditProfile.close();
}

function handleAddCardFormSubmit(formData) {
  const { name, link } = formData;
  const newCard = {
    name: name,
    link: link
  };
  renderCard(newCard);
  popupAddCard.close();
}

// Слушатели открытия попапов

editBtn.addEventListener('click', function() {
  const { username, description } = userInfo.getUserInfo();
  popupNameInput.value = username;
  popupDescriptionInput.value = description;
  popupEditProfile.open();
});

addBtn.addEventListener("click", function() {
  popupAddCard.open();
});

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

// Функция-обработчик для открытия попапа с увеличенной картинкой
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// Функция-обработчик для удаления карточки
function handleDeleteClick(card) {
  card.deleteCard();
}

// Функция-обработчик для лайка карточки


function handleLikeCard(card) {
  card.toggleLike();
  console.log(card);
}


// Появление стандартных изображений на странице при загрузке
function createCard(card) {
  const newCard = new Card(
    card,
    '#card__template',
    handleCardClick,
    handleDeleteClick,
    handleLikeCard
  );

    const cardElement = newCard.generate();
    newCard._setEventListener();
    return cardElement;
}

// Создание экземпляра класса Section для отображения карточек на странице

const cardsSection = new Section({
  renderer: (card) => {
    const newCardElement = createCard(card);
    cardsSection.addItem(newCardElement);
  }
}, ".elements");

// Появление стандартных изображений на странице при загрузке

cardsSection.renderItems(initialCards);

// Добавить новую карточку
addForm.addEventListener('submit', function(event){
  event.preventDefault();

  const card = {
      link: popupLinkInput.value,
      name: popupPlaceInput.value,
  };

  cardsSection.addItem(createCard(card));

  popupLinkInput.value = '';
  popupPlaceInput.value = '';

  formValidatorAddCard.disableSubmitButton();

  closePopup(popupAddWin);
});

// Инициализация валидации форм

const formValidatorEditProfile = new FormValidator(settings, formEditProfile);
const formValidatorAddCard = new FormValidator(settings, formAddCard);

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();