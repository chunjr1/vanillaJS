const loginFormDiv = document.querySelector(".login-form-div");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#todo-form");
const todoDiv = document.querySelector(".todo-div");
const greetingSection = document.querySelector(".greeting-section");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event)
{
    event.preventDefault();
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    loginFormDiv.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username) 
{
    greeting.innerText = `Welcome ${username}`;
    greetingSection.classList.remove(HIDDEN_CLASSNAME);
    todoDiv.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null)
{
  loginFormDiv.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
