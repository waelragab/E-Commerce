const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-btn");
const loginForm = document.querySelector("#login");
const registerForm = document.querySelector("#register");



loginBtn.addEventListener("click", function () {
    loginForm.style.left = "0px";
    registerForm.style.left = "300px"
})

registerBtn.addEventListener("click", function () {
    loginForm.style.left = "-300px";
    registerForm.style.left = "0px"
})