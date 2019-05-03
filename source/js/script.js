  var identificator  = document.querySelector(".page-header__container");
  var navToggle = document.querySelector(".page-header__toggle");

  identificator.classList.remove("nav--no-js");

  navToggle.addEventListener("click", function() {
    if (identificator.classList.contains("nav--closed")) {
      identificator.classList.remove("nav--closed");
      identificator.classList.add("nav--opened");
    } else {
      identificator.classList.add("nav--closed");
      identificator.classList.remove("nav--opened");
    }
  });


var openPopup = document.querySelector(".modal__button--open");
var popup = document.querySelector(".modal-overlay");
var formField = popup.querySelector("[name=size]");
var popupOverlay = document.querySelector(".modal-overlay");

openPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  formField.focus();
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

popupOverlay.addEventListener("click", function(evt){
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
}
});
