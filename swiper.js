'use strict';

const viewfortUl = document.querySelector('.slider-viewfort ul');

const firstQuarter = -1080; //슬라이더 width 960px + margin 120px 더한 값의 음수
const secondQuarter = -690; //width 670px + margin 20px
const thirdQuarter = -340; //width 335px + margin 5px

let i = 1;

const timer = setInterval(autoMoveSlider, 5000);
// clearInterval(timer);

function autoMoveSlider(){

  if(window.innerWidth > 1000){
    firstAutoMoveSlider(firstQuarter);
  }
  else if(680 < window.innerWidth && window.innerWidth <= 1000){
    secondAutoMoveSlider(secondQuarter);
  }
  else if(window.innerWidth <= 680){
    thirdAutoMoveSlider(thirdQuarter);
  }
};

function firstAutoMoveSlider(number){
  const firstMaxWidth = viewfortUl.clientWidth*-1; //ul너비 11,880
  let firstWidth3d = number*i;
  if(firstWidth3d <= firstMaxWidth){
    i=0;
  }
  if(firstWidth3d === number*10){
    console.log("dd");
  }
  viewfortUl.style.transform = `translate3d(${number*i}px, 0px, 0px)`;
  i++;
}

function secondAutoMoveSlider(number){
  const secondMaxWidth = viewfortUl.clientWidth*-1; //ul너비 7,590
  let secondWidth3d = number*i;
  if(secondWidth3d <= secondMaxWidth){
    i=0;
  }
  viewfortUl.style.transform = `translate3d(${number*i}px, 0px, 0px)`;
  i++;
}

function thirdAutoMoveSlider(number){
  const thirdMaxWidth = viewfortUl.clientWidth*-1; //ul너비 3,740
  let thirdWidth3d = number*i;
  if(thirdWidth3d <= thirdMaxWidth){
    i=0;
  }
  viewfortUl.style.transform = `translate3d(${number*i}px, 0px, 0px)`;
  i++;
}
