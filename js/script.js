const slider = document.querySelector('.slider');
const poiter = document.querySelector('.poiter');
const formUsres = document.querySelector('.form-usres');
const formCompanies = document.querySelector('.form-companies');

const registrationWindow = document.querySelector('.registration-window');
const loginWindow = document.querySelector('.login-window');
const createAccount = document.querySelector('.new-account');

const logo = document.querySelector('.white-logo');


logo.addEventListener('click',()=>{});

slider.addEventListener('click',()=>{
    poiter.classList.toggle('active');
    formUsres.classList.toggle('none');
    formCompanies.classList.toggle('none');
});

createAccount.addEventListener('click',()=>{
     registrationWindow.classList.toggle('none');
    loginWindow.classList.toggle('none');
});






// function openRegistrationWindow() {
   
// }