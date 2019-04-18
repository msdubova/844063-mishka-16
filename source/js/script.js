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

  // как сделать так, чтоб при переходе с главной в каталог код заново удалял класс nav--no-js
