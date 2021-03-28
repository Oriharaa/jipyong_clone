'use strict';

const toggleBtn = document.querySelector('#header .toggle-btn');

const headerLogo = document.querySelector('#header .header__logo a img');
const sadan = document.querySelector('#header .sadan');
const lang = document.querySelector('#header .lang');

const activeNav = document.querySelector('#header .active');
const basicNav = document.querySelector('#header .navbar__wrap');
const searchBtn = document.querySelector('#header .until-search');

const searchPopUp = document.querySelector('#searchPop-up');
const xBtn = document.querySelector('#searchPop-up .btn-close');



toggleBtn.addEventListener('click', ()=>{
  showActiveNav();
  hideBasicNav();
  changeBtn();
  changeLogo();
  changeSadan();
});

searchBtn.addEventListener('click',()=> showPopUp());
xBtn.addEventListener('click', ()=> hidePopUp());


function showActiveNav(){
  activeNav.classList.toggle('hide');
};

function hideBasicNav(){
  basicNav.classList.toggle('hide');
}

function changeBtn(){
  toggleBtn.classList.toggle('x-btn');
};

function changeLogo(){
  headerLogo.classList.toggle('change');
  const hasClass = headerLogo.classList.contains('change');
  if(hasClass){
    headerLogo.setAttribute('src', "./images/header/logo_02.png");
  }
  else{
    headerLogo.setAttribute('src', "./images/header/logo_01.png");
  }
};

function changeSadan(){
  sadan.classList.toggle('change');
  lang.classList.toggle('fixed');
};

function showPopUp(){
  searchPopUp.classList.toggle('hide');
};

function hidePopUp(){
  searchPopUp.classList.toggle('hide');
}