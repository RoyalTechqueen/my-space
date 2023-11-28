var form = document.getElementById('form');
var username =  document.getElementById('username');
var email =  document.getElementById('email');
var pwd1 =  document.getElementById('password');
var pwd2 =  document.getElementById('password2');

function checkInput() {
    var usernameVal = username.value.trim();
    var emailVal = email.value.trim();
    var pwd1Val = pwd1.value.trim();
    var pwd2Val = pwd2.value.trim();

    if (usernameVal === '') {
        setError(username,"Username Cannot Be Empty")
    } else {
        setSuccess(username)
    }
    if (pwd1 !== pwd2) {
        setError(pwd1, "Password Mismatch");
    } else {
        setSuccess(pwd1);
    }
}

function setError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.innerText = message;
    input.classList.add("error");
}

function setSuccess(input) {
    input.classList.add("success");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInput();
});