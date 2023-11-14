const slider = document.querySelector('.slider');
const poiter = document.querySelector('.poiter');
const formUsres = document.querySelector('.form-usres');
const formCompanies = document.querySelector('.form-companies');


slider.addEventListener('click',(event)=>{
    if(event='click'){
        poiter.classList.toggle('active');
        formUsres.classList.toggle('none');
        formCompanies.classList.toggle('none');
    }
});


