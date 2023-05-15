// Открыть/Закрыть "Попап" редактирования профиля

let editBtn = document.querySelector('.profile__btn_action_edit');
let popupWin = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__btn_action_close');
let submitBtn = document.querySelector(".popup__btn_action_submit");

editBtn.addEventListener('click', function() {
    popupWin.classList.add('popup_opened');
});

closeBtn.addEventListener("click", function() {
    popupWin.classList.remove('popup_opened');
});
function submitClose() {
    popupWin.classList.remove("popup_opened");
}

// Внести изменения в профиль

let popupNameInput = document.querySelector(".popup__item_type_name");
let popupDescriptionInput = document.querySelector(".popup__item_type_info");

let submitButton = document.querySelector(".popup__btn_action_submit");
submitButton.addEventListener("click", function(event) {

  event.preventDefault();
  let nameInput = document.getElementById("profile__author");
  let descriptionInput = document.getElementById("profile__author-description");
  console.log(descriptionInput.textContent);
  nameInput.textContent = popupNameInput.value;
  descriptionInput.textContent = popupDescriptionInput.value;

  submitClose();
});