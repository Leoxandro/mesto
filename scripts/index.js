
let popupNameInput = document.querySelector(".popup__item_type_name");
let popupDescriptionInput = document.querySelector(".popup__item_type_info");
let popupPlaceInput = document.querySelector('.popup__item_type_place');
let popupLinkInput = document.querySelector('.popup__item_type_link');
let editBtn = document.querySelector('.profile__btn_action_edit');
let addBtn = document.querySelector('.profile__btn_action_add');
let popupEditWin = document.querySelector('.popup-edit');
let popupAddWin = document.querySelector('.popup-add');
let popupFullScreen = document.querySelector('.popup-photo');
const closeBtns = document.querySelectorAll('.popup__btn_action_close');
let submitInfoBtn = document.querySelector(".popup__btn-edit-info");
let submitNewCardBtn = document.querySelector('.popup__btn-add-card');
let nameInput = document.querySelector(".profile__author");
let descriptionInput = document.querySelector(".profile__author-description");

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

// Открыть/Закрыть "Попап" редактирования профиля

editBtn.addEventListener('click', function() {
    popupEditWin.classList.add('popup_opened');
    popupNameInput.value = nameInput.textContent;
    popupDescriptionInput.value = descriptionInput.textContent;
});

function submitClose() {
    popupEditWin.classList.remove("popup_opened");
    popupAddWin.classList.remove('popup_opened');
    popupFullScreen.classList.remove('popup_opened');
}

closeBtns.forEach(function(button){
    button.addEventListener('click', function(){
        submitClose();
    });
});


// Внести изменения в профиль

submitInfoBtn.addEventListener("click", function(event) {
  event.preventDefault();
  nameInput.textContent = popupNameInput.value;
  descriptionInput.textContent = popupDescriptionInput.value;

  submitClose();
});

// Появление стандартных изображений на странице при загрузке

const template = document.querySelector('#card__template');
const elementContainer = document.querySelector('.elements');

initialCards.forEach(function(card) {
    const templateContent = template.content.cloneNode(true);
    const element = templateContent.querySelector('.element');
    const image = templateContent.querySelector('.element__img');
    const name = templateContent.querySelector('.element__name');
    const deleteBtn = templateContent.querySelector('.element__delete-btn');

    image.src = card.link;
    image.alt = card.name;
    name.textContent = card.name;

    deleteBtn.addEventListener('click', function(){
        element.remove();
    });

    elementContainer.appendChild(templateContent);
});


// Добавить новую карточку


addBtn.addEventListener("click", function() {
    popupAddWin.classList.add('popup_opened');
});

submitNewCardBtn.addEventListener('click', function(event){
    event.preventDefault();
    const templateContent = template.content.cloneNode(true);
    const element = templateContent.querySelector('.element');
    const image = templateContent.querySelector('.element__img');
    const name = templateContent.querySelector('.element__name');
    const deleteBtn = templateContent.querySelector('.element__delete-btn');
    const likeBtn = templateContent.querySelector('.element__like-btn');

    image.src = popupLinkInput.value;
    image.alt = popupPlaceInput.name;
    name.textContent = popupPlaceInput.value;
    elementContainer.appendChild(templateContent);

    deleteBtn.addEventListener('click', function(){
        element.remove();
    });

    likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('active');
    });

    submitClose();
});


// Поставить лайк

const likeBtns = document.querySelectorAll('.element__like-btn');
likeBtns.forEach(function(like) {
    like.addEventListener('click', function() {
        like.classList.toggle('active');
    });
});


// Открыть фото на весь экран

const imgInitial = document.querySelectorAll('.element__img');

imgInitial.forEach(function(event) {
    event.addEventListener('click', function(img) {
        const photoPopup = document.querySelector('.popup__photo');
        photoPopup.classList.add('popup_opened');
        const imageSrc = img.target.src;
        const imageDescription = img.target.alt;

        const popupImage = document.querySelector('.popup__img');
        const popupDescription = document.querySelector('.popup__description');
        popupImage.src = imageSrc;
        popupDescription.textContent = imageDescription;
    });

});
