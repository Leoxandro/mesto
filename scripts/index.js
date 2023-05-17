
let popupNameInput = document.querySelector(".popup__item_type_name");
let popupDescriptionInput = document.querySelector(".popup__item_type_info");
let editBtn = document.querySelector('.profile__btn_action_edit');
let popupWin = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__btn_action_close');
let submitBtn = document.querySelector(".popup__btn_action_submit");
let nameInput = document.querySelector(".profile__author");
let descriptionInput = document.querySelector(".profile__author-description");

// Открыть/Закрыть "Попап" редактирования профиля


editBtn.addEventListener('click', function() {
    popupWin.classList.add('popup_opened');
    popupNameInput.value = nameInput.textContent;
    popupDescriptionInput.value = descriptionInput.textContent;
});

function submitClose() {
    popupWin.classList.remove("popup_opened");
}

closeBtn.addEventListener("click", function() {
    submitClose();
});


// Внести изменения в профиль

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  nameInput.textContent = popupNameInput.value;
  descriptionInput.textContent = popupDescriptionInput.value;

  submitClose();
});