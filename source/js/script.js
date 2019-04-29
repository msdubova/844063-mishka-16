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



var openPopup = document.querySelector(".bestseller__order");
var popup = document.querySelector(".modal");
var closeForm  = popup.querySelector(".button__modal");

openPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

});

closeForm.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  // popup.classList.remove("modal-error");
  // как сделать проверку если не выбран ни один размер
});
