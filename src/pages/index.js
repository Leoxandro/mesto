import { Card } from '../scripts/modules/Card.js';
import { Section } from '../scripts/modules/Section.js';
import { PopupWithForm } from '../scripts/modules/PopupWithForm.js';
import { PopupWithImage } from '../scripts/modules/PopupWithImage.js';
import { PopupConfirmDel } from '../scripts/modules/PopupConfirmDel.js';
import { UserInfo } from '../scripts/modules/UserInfo.js';
import FormValidator from '../scripts/modules/FormValidator.js';
import { Api } from '../scripts/modules/Api.js';
import { apiLink } from '../scripts/utils/apiLink.js';
import {
  popupNameInput, popupDescriptionInput,
  editBtn, addBtn,
  settings, formAddCard, formEditProfile,
  avatarArea, avatarBtn, avatarImg, formAvatar, popupAvatarWin
} from '../scripts/utils/constants.js';
import './index.css';


// Объявление API

const api = new Api(apiLink);

// Переменная для хранения ID пользователя

let userId;

// Получение селекторов для данных пользователя

const userInfo = new UserInfo({
  usernameSelector: '.profile__author',
  userDescriptionSelector: '.profile__author-description',
  userAvatarSelector: '.profile__avatar'
});


Promise.all([ api.getUserData(), api.getInitialCards() ])
  .then(([ userProfileData, card ]) => {
    userId = userProfileData._id;
    userInfo.setUserInfo({ 
      username: userProfileData.name,
      description: userProfileData.about
     });
    renderInitialCards.renderItems(card);
    userInfo.setUserAvatar(userProfileData.avatar);
})
.catch((err) => { console.log(`Возникла глобальная ошибка, ${err}`) })


// Появление кнопки редактирования аватара при наведении курсора

avatarArea.addEventListener('mouseenter', function() {
  avatarImg.classList.toggle('active');
  avatarBtn.classList.toggle('active');
});

avatarArea.addEventListener('mouseleave', function() {
  avatarImg.classList.toggle('active');
  avatarBtn.classList.toggle('active');
});


// Слушатели открытия попапов

avatarBtn.addEventListener('click', function() {
  popupEditAvatar.open();
  formValidatorAvatarEdit.resetValidation();
});


editBtn.addEventListener('click', function() {
  popupEditProfile.open();
  formValidatorEditProfile.resetValidation();
  const actualUserInfo = userInfo.getUserInfo();
  popupNameInput.value = actualUserInfo.username;
  popupDescriptionInput.value = actualUserInfo.description;
});

addBtn.addEventListener("click", function() {
  popupAddCard.open();
  formValidatorAddCard.resetValidation();
});

// Объявление функции для добавления карточки

const renderCard = function(cardObj) {
  const newCard = new Card(
    cardObj,
    '#card__template', 
    userId, 
    { 
      cardId: cardObj._id,
      authorId: cardObj.owner._id,
    }, 
    (name, link) => { popupWithImage.open(name, link) },
    (cardElement, cardId) => { popupConfirmDel.open(cardElement, cardId) },
    (cardId) => { api.putCardLike(cardId)
        .then((res) => {
          newCard.renderCardLike(res);
        })
        .catch((err) => { console.log(`При лайке карточки возникла ошибка, ${err}`) })
      },
    (cardId) => { api.deleteCardLike(cardId)
        .then((res) => {
          newCard.renderCardLike(res);
        })
        .catch((err) => { console.log(`При дизлайке карточки возникла ошибка, ${err}`) })
      },
  );
  return newCard.generate();
}

//  Создание экземпляра класса Section для отображения карточек на странице

const renderInitialCards = new Section({
  renderer: (cardObj) => {
    renderInitialCards.addItem(renderCard(cardObj));
  }
}, '.elements');


// Объявление popup всплывающего изображения

const popupWithImage = new PopupWithImage('.popup-photo');
popupWithImage.setEventListeners();

// Объявление popup редактирования аватара

const popupEditAvatar = new PopupWithForm('.popup-avatar-change', {
  callbackFormSubmit: (userProfileData) => { popupEditAvatar.btnSavingLabel();
     api.sendAvatarData(userProfileData)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupEditAvatar.close();
      })
      .catch((err) => { console.log(`При обновлении аватара возникла ошибка, ${err}`) })
      .finally(() => {
        popupEditAvatar.btnDefaultLabel();
      })
  }
});
popupEditAvatar.setEventListeners();

// Объявление popup подтверждения удаления карточки

const popupConfirmDel = new PopupConfirmDel(".popup-confirmation-delete", {
  callbackConfirm: (cardElement, cardId) => { api.deleteCard(cardId)
      .then(() => {
        cardElement.deleteCard();
        popupConfirmDel.close();
      })
      .catch((err) => { console.log(`При удалении карточки возникла ошибка, ${err}`) })
  }
});
popupConfirmDel.setEventListeners();

// Объявление popup редактирования профиля

const popupEditProfile = new PopupWithForm('.popup-edit', {
  callbackFormSubmit: (userProfileData) => { 
    popupEditProfile.btnSavingLabel();
    api.sendUserData(userProfileData)
      .then((res) => {
        userInfo.setUserInfo({ username: res.name, description: res.about });
        popupEditProfile.close();
      })
      .catch((err) => { console.log(`При редактировании профиля возникла ошибка, ${err}`) })
      .finally(() => {
        popupEditProfile.btnDefaultLabel();
      })
  }
});
popupEditProfile.setEventListeners();

// Объявление popup добавления новой карточки

const popupAddCard = new PopupWithForm('.popup-add', {
  callbackFormSubmit: (formValues) => { 
    popupAddCard.btnSavingLabel();
    api.addNewCard({ name: formValues.place, link: formValues.link })
      .then((card) => {
        renderInitialCards.addItem(renderCard(card));;
        popupAddCard.close();
      })
      .catch((err) => { console.log(`При добавлении новой карточки возникла ошибка, ${err}`) })
      .finally(() => {
        popupAddCard.btnDefaultLabel();
      })
  }
});
popupAddCard.setEventListeners();

// Инициализация валидации форм

const formValidatorEditProfile = new FormValidator(settings, formEditProfile);
const formValidatorAddCard = new FormValidator(settings, formAddCard);
const formValidatorAvatarEdit = new FormValidator(settings, formAvatar);

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
formValidatorAvatarEdit.enableValidation();