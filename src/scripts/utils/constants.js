const popupNameInput = document.querySelector(".popup__item_type_name");
const popupDescriptionInput = document.querySelector(".popup__item_type_info");
const popupPlaceInput = document.querySelector('.popup__item_type_place');
const popupLinkInput = document.querySelector('.popup__item_type_link');
const editBtn = document.querySelector('.profile__btn_action_edit');
const addBtn = document.querySelector('.profile__btn_action_add');
const popupEditWin = document.querySelector('.popup-edit');
const popupAddWin = document.querySelector('.popup-add');
const popupAvatarWin = document.querySelector('.popup-avatar-change');
const closeBtns = document.querySelectorAll('.popup__btn_action_close');
const editForm = popupEditWin.querySelector('.popup__form');
const formEditProfile = popupEditWin.querySelector('.popup__form');
const formAddCard = popupAddWin.querySelector('.popup__form');
const formAvatar = popupAvatarWin.querySelector('.popup__form');
const avatarImg = document.querySelector('.profile__avatar');
const avatarBtn = document.querySelector('.profile__avatar-edit');
const avatarArea = document.querySelector('.profile__avatar-area');

  const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__btn_action_submit',
    inactiveButtonClass: 'popup__btn_action_submit_disabled',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_visible'
  };

  export {
    popupNameInput, popupDescriptionInput, popupPlaceInput,
    popupLinkInput, editBtn, addBtn,
    popupEditWin, popupAddWin, closeBtns,
    editForm, settings, formAddCard, formEditProfile,
    avatarArea, avatarBtn, avatarImg, formAvatar, popupAvatarWin
  };