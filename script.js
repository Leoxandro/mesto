// Поставить "лайк"

let likeBtns = document.querySelectorAll(".element__like-btn");
likeBtns.forEach(function(likeBtn) {   
    likeBtn.addEventListener("click", function() {
        likeBtn.classList.toggle("active");
    });
});

// Открыть/Закрыть "Попап" редактирования профиля

let editBtn = document.querySelector('.profile__btn_action_edit');
let popupWin = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__btn_action_close');
let submitBtn = document.querySelector(".popup__btn_action_submit");

function closePopup() {
    popupWin.classList.toggle('active');
}

editBtn.addEventListener('click', function() {
    popupWin.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
    popupWin.classList.toggle('active');
});

// Внести изменения в профиль

let submitButton = document.querySelector(".popup__btn_action_submit");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  let popupNameInput = document.getElementById("name");
  let popupDescriptionInput = document.getElementById("info");
  let name = popupNameInput.value;
  let description = popupDescriptionInput.value;

  let nameInput = document.getElementById("profile__author");
  console.log(nameInput.textContent);
  let descriptionInput = document.getElementById("profile__author-description");
  console.log(descriptionInput.textContent);
  nameInput.innerHTML = name;
  console.log(name);
  descriptionInput.innerHTML = description;
  console.log(description);

  closePopup();
});