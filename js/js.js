const formshow = document.querySelector(".cont-btn");
const loginPopup = document.querySelector(".modal-latters");
const formClose = loginPopup.querySelector(".modal-close");
const firstname = loginPopup.querySelector(".person");
const loginForm = loginPopup.querySelector(".modal-form");
const useremail = loginPopup.querySelector(".email");
const latters = loginPopup.querySelector(".modal-inputbig");

formshow.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("visually-hidden");
  loginPopup.classList.add("show");
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("visually-hidden");
  loginPopup.classList.remove("modal-error");
  loginPopup.classList.remove("show");
  firstname.value="";
  useremail.value="";
  latters.value="";
});


loginForm.addEventListener("submit", function (evt) {
  if (!firstname.value || !useremail.value || !latters.value ) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  }else {
    localStorage.setItem("name", firstname.value);
    localStorage.setItem("email", useremail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-latters")) {
      evt.preventDefault();
      loginPopup.classList.add("visually-hidden");
      loginPopup.classList.remove("modal-error");
    }
  }
});
