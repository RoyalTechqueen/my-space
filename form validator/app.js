// complete form validator
// password and confirm password are the same
//check if email is valid
//check if names has special character or numbers

var firstname =  document.querySelector("#firstname");
var firstname_msg = document.querySelector(".firtname_error_message")
var lastname =  document.querySelector("#lastname");
var lastname_msg = document.querySelector(".lastname_error_message")
var email =  document.querySelector("#email");
var email_msg = document.querySelector(".email_error_message")
var pwd =  document.querySelector("#pwd");
var pwd_msg = document.querySelector(".password_error_message")
var con_pwd =  document.querySelector("#con_pwd");
var con_pwd_msg = document.querySelector(".confirm_password_error_message")
var btn = document.querySelector("button");

btn.addEventListener("click", function() {
    check_firstName();    
    check_lastname();
    check_email();
    check_pwd();
    check_con_pwd();
    check_length();
    check_lastname_length();
    checkpwd_length();
    check_con_pwd_value();
    checkallvalue();
});

function check_firstName() {
    if (firstname.value == "") {
        firstname_msg.innerText = " Enter FirstName ";
        firstname.classList.add("error");
        firstname.classList.remove("success");
        setTimeout(()=>{
            firstname_msg.innerText = "";
            firstname.classList.remove("error");
        },5000);
    }else{
        firstname.classList.add("success");
    }    
};

function check_length() {
    if (firstname.value.length < 4 || firstname.value.length > 20) {
        firstname.classList.remove("success");
        firstname_msg.innerText = "FirstName shouldn't be less than 4 characters or more than 20 characters";
        firstname.classList.add("error");
        setTimeout(()=>{
            firstname_msg.innerText = "";
            firstname.classList.remove("error");
        },5000);
    }else{
        firstname.classList.add("success");
    }
}
function check_lastname_length() 
{
    if (lastname.value.length < 4 || lastname.value.length > 20) {
        lastname.classList.remove("success");
        lastname_msg.innerText = "LastName shouldn't be less than 4 characters or more than 20 characters";
        lastname.classList.add("error");
        setTimeout(()=>{
            lastname_msg.innerText = "";
            lastname.classList.remove("error");
        },5000);
    }else{
        lastname.classList.add("success");
    }
}
function checkpwd_length() {
    if (pwd.value.length < 8 ) {
        pwd.classList.remove("success");
        pwd_msg.innerText = "Password should not be less than 8 characters";
        pwd.classList.add("error");
        setTimeout(()=>{
            pwd_msg.innerText = "";
            pwd.classList.remove("error");
        },5000);
    }else{
        pwd.classList.add("success");
    }
    
}
function check_con_pwd_value() {
    if (con_pwd.value != pwd.value) {
        con_pwd.classList.remove("success");
        con_pwd_msg.innerText = "Password doesn't match";
        con_pwd.classList.add("error");
        setTimeout(()=>{
            con_pwd_msg.innerText = "";
            con_pwd.classList.remove("error");
        },5000);
    }else{
        con_pwd.classList.add("success");
    }
}

function check_lastname() {
    if (lastname.value == "") {
        lastname_msg.innerText = " Enter LastName";
        lastname.classList.add("error");
        lastname.classList.remove("success");
        setTimeout(()=>{
            lastname_msg.innerText = "";
            lastname.classList.remove("error");
        },5000);
    }else{
        lastname.classList.add("success");
    }   
}

function check_email() {
    if (email.value == "") {
        email_msg.innerText = "Enter Email Address";
        email.classList.add("error");
        email.classList.remove("success");
        setTimeout(()=>{
            email_msg.innerText = "";
            email.classList.remove("error");
        },5000);
    }else{
        email.classList.add("success");
    }   
}

function check_pwd() {
    if (pwd.value == "") {
        pwd_msg.innerText = " Enter Password";
        pwd.classList.add("error");
        pwd.classList.remove("success");
        setTimeout(()=>{
            pwd_msg.innerText = "";
            pwd.classList.remove("error");
        },5000);
    }else{
        pwd.classList.add("success");
    }   
}


function check_con_pwd() {
    if (con_pwd.value == "") {
        con_pwd_msg.innerText = "Confirm Password";
        con_pwd.classList.add("error");
        con_pwd.classList.remove("success");
        setTimeout(()=>{
            con_pwd_msg.innerText = "";
            con_pwd.classList.remove("error");
        },5000);
    }else{
        con_pwd.classList.add("success");
    }   
}

/*function checkallvalue() {
    if(lastname.value != "" & firstname.value != "" & lastname.value.length < 4 || lastname.value.length > 20  & firstname.value.length < 4 || firstname.value.length > 20 & pwd.value.length < 8  & pwd.value == con_pwd.value ){
        alert(" thank you for submitting")
    }
    else{
        alert("incomplete")
    }
}*/