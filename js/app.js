//const loginForm = documnet.getElement("#login-form"); //div
const loginForm = document.querySelector("#login-form");  //select
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("button");
const loginLink = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const loginName = loginInput.value;
    console.log(loginName);
    greeting.innerHTML = `hello_${loginName}`;
    greeting.classList.remove(HIDDEN_CLASS);
    localStorage.setItem("loginName",loginName);
    alert("storage="+localStorage.getItem("loginName"));
    
}

function onLoginBtnClick(event){
    event.preventDefault();
    console.log(event);
    alert("click"+loginInput.value+"+");
    const loginName = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(loginName);
    
}

function onHandleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("click!");
    location.href = "https://www.naver.com";

}

loginForm.addEventListener("submit", onLoginSubmit);
loginButton.addEventListener("click", onLoginBtnClick);
loginLink.addEventListener("click", onHandleLinkClick);

if(loginButton != null){
    //loginButton.addEventListener("click", onLoginBtnClick);
}
if(loginLink != null){
    //loginLink.addEventListener("click", handleLinkCLick);
}
$(function(){
    //alert("click"+loginInput.value());
});





