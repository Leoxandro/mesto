
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
const submitInfoBtn = document.querySelector(".popup__btn-edit-info");
const submitNewCardBtn = document.querySelector('.popup__btn-add-card');
const nameInput = document.querySelector(".profile__author");
const descriptionInput = document.querySelector(".profile__author-description");
const template = document.querySelector('#card__template');
const elementContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');

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
}

closeBtns.forEach(function(button){
  button.addEventListener('click', function(){
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

// Функция открытия попапов
function openPopup(arg) {
  switch (arg) {
   case 1:
    popupEditWin.classList.add("popup_opened");
    break;
   case 2: 
    popupAddWin.classList.add('popup_opened');
    break;
   case 3:
    popupFullScreen.classList.add('popup_opened');
    break;
  }
};

// Открыть/Закрыть "Попап" редактирования профиля

editBtn.addEventListener('click', function() {
  openPopup(1);
  popupNameInput.value = nameInput.textContent;
  popupDescriptionInput.value = descriptionInput.textContent;
});


// Внести изменения в профиль

submitInfoBtn.addEventListener("click", function(event) {
  event.preventDefault();
  nameInput.textContent = popupNameInput.value;
  descriptionInput.textContent = popupDescriptionInput.value;

  closePopup(popupEditWin);
});

// Появление стандартных изображений на странице при загрузке



function createCard(card) {
    const templateContent = template.content.cloneNode(true);
    const element = templateContent.querySelector('.element');
    const image = templateContent.querySelector('.element__img');
    const name = templateContent.querySelector('.element__name');
    const deleteBtn = templateContent.querySelector('.element__delete-btn');
    const likeBtn = templateContent.querySelector('.element__like-btn');

    image.src = card.link;
    image.alt = card.name;
    name.textContent = card.name;

    deleteBtn.addEventListener('click', function(){
        element.remove();
    });

    likeBtn.addEventListener('click', function() {
      likeBtn.classList.toggle('active');
    });

    return templateContent;
  }

    function renderCard(card) {
      const newCard = createCard(card);
      elementContainer.prepend(newCard);
  }
  
  initialCards.forEach(function(card) {
    renderCard(card);
});


// Добавить новую карточку


addBtn.addEventListener("click", function() {
    openPopup(2);
});

submitNewCardBtn.addEventListener('click', function(event){
  event.preventDefault();

  const card = {
      link: popupLinkInput.value,
      name: popupPlaceInput.value,
      alt: popupPlaceInput.value
  };

  renderCard(card);

  popupLinkInput.value = '';
  popupPlaceInput.value = ''; 
  fullScreen();
  closePopup(popupAddWin);
});


// Поставить лайк

const likeBtns = document.querySelectorAll('.element__like-btn');
likeBtns.forEach(function(like) {
    like.addEventListener('click', function() {
        like.classList.toggle('active');
    });
});


// Открыть фото на весь экран

function fullScreen() {

  const imgInitial = document.querySelectorAll('.element__img');
  imgInitial.forEach(function(event) {
      event.addEventListener('click', function(img) {
          openPopup(3);
          const imageSrc = img.target.src;
          const imageDescription = img.target.alt;

          popupImage.src = imageSrc;
          popupImage.alt = imageDescription;
          popupDescription.textContent = imageDescription;
      });
  });
};

fullScreen();