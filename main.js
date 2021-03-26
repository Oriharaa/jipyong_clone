'use strict';

const viewfortUl = document.querySelector('.slider-viewfort ul');
const maxWidth = viewfortUl.clientWidth*-1;
let moveInterval = -1080;

let fuck = -1080;

let i = 1;

function autoMoveSlider(number){
  let width3d = number*i;
  if(width3d === maxWidth){
    i = 0;    
  }
  viewfortUl.style.transform = `translate3d(${number*i}px, 0px, 0px)`;
  i++;
};

const timer = setInterval(autoMoveSlider, 5000, moveInterval);
