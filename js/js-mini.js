const formshow=document.querySelector(".cont-btn"),loginPopup=document.querySelector(".modal-latters"),formClose=loginPopup.querySelector(".modal-close"),firstname=loginPopup.querySelector(".person"),loginForm=loginPopup.querySelector(".modal-form"),useremail=loginPopup.querySelector(".email"),latters=loginPopup.querySelector(".modal-inputbig");formshow.addEventListener("click",function(e){e.preventDefault(),loginPopup.classList.remove("visually-hidden"),loginPopup.classList.add("show")}),formClose.addEventListener("click",function(e){e.preventDefault(),loginPopup.classList.add("visually-hidden"),loginPopup.classList.remove("modal-error"),loginPopup.classList.remove("show"),firstname.value="",useremail.value="",latters.value=""}),loginForm.addEventListener("submit",function(e){firstname.value&&useremail.value&&latters.value?(localStorage.setItem("name",firstname.value),localStorage.setItem("email",useremail.value)):(e.preventDefault(),loginPopup.classList.remove("modal-error"),loginPopup.offsetWidth=loginPopup.offsetWidth,loginPopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&loginPopup.classList.contains("modal-latters")&&(e.preventDefault(),loginPopup.classList.add("visually-hidden"),loginPopup.classList.remove("modal-error"))});