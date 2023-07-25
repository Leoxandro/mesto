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
const elementContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');
const addForm = popupAddWin.querySelector('.popup__form');
const editForm = popupEditWin.querySelector('.popup__form');
const formEditProfile = popupEditWin.querySelector('.popup__form');
const formAddCard = popupAddWin.querySelector('.popup__form');


export const initialCards = [
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

  const settings = {
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_action_submit_disabled',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_visible'
  };

  export {
    popupNameInput, popupDescriptionInput, popupPlaceInput,
    popupLinkInput, editBtn, addBtn,
    popupEditWin, popupAddWin, popupFullScreen,
    closeBtns, elementContainer, popupImage, popupDescription,
    addForm, editForm, settings, formAddCard, formEditProfile
  };