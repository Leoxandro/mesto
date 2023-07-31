const popupNameInput = document.querySelector(".popup__item_type_name");
const popupDescriptionInput = document.querySelector(".popup__item_type_info");
const editBtn = document.querySelector('.profile__btn_action_edit');
const addBtn = document.querySelector('.profile__btn_action_add');
const popupEditWin = document.querySelector('.popup-edit');
const popupAddWin = document.querySelector('.popup-add');
const popupAvatarWin = document.querySelector('.popup-avatar-change');

const formEditProfile = popupEditWin.querySelector('.popup__form');
const formAddCard = popupAddWin.querySelector('.popup__form');
const formAvatar = popupAvatarWin.querySelector('.popup__form');

const avatarImg = document.querySelector('.profile__avatar');
const avatarBtn = document.querySelector('.profile__avatar-edit');
const avatarArea = document.querySelector('.profile__avatar-area');

const settings = {
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__btn_action_submit',
    inactiveButtonClass: 'popup__btn_action_submit_disabled',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_visible'
};

  export {
    popupNameInput, popupDescriptionInput, 
    editBtn, addBtn,
    settings, formAddCard, formEditProfile,
    avatarArea, avatarBtn, avatarImg, formAvatar, popupAvatarWin
};