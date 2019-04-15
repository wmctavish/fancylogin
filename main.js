var loginButton = document.getElementById('login-button');
var bgModal = document.getElementById('bg-modal');
var modalContent = document.getElementById('modal-content');
var userName = document.getElementById('username');
var password = document.getElementById('password');
var submitButton = document.getElementById('submit-button');


//Modal fade-ins
loginButton.addEventListener('click', (event)=>{
    bgModal.classList.toggle('opened');
    modalContent.classList.toggle('opened');
    userName.classList.toggle('opened');
    password.classList.toggle('opened');
    submitButton.classList.toggle('opened');
});

//Modal fade-outs
document.querySelector('.close').addEventListener('click', () => {
    bgModal.classList.toggle('bg-modal');
    modalContent.classList.toggle('modal-content');
    userName.classList.toggle('username');
    password.classList.toggle('password');
    submitButton.classList.toggle('submit-button');
});

//From input validation
userName.onkeyup = () => {
    if (username.value.length < 5){
        userName.className += " invalid";
        //if (userName.className === )
    } else if (username.value.length >= 5){
        userName.className += ' valid';
    };
};