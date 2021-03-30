'use strict';

const viewfortUl = document.querySelector('.slider-viewfort ul');

const firstQuarter = -1080; //슬라이더 width 960px + margin 120px 더한 값의 음수
const secondQuarter = -690; //width 670px + margin 20px
const thirdQuarter = -340; //width 335px + margin 5px

const firstChild = viewfortUl.firstElementChild;
const lastChild = viewfortUl.lastElementChild;
const tenChild = document.querySelector('.slider-viewfort ul .Shanghai');

//마지막슬라이드에서 첫번째슬라이드로 전환이 부자연스러워
//첫번째슬라이드와 마지막슬라이드, 마지막슬라이드-1 카피본 생성
const clonedFirst = firstChild.cloneNode(true);
const clonedLast = lastChild.cloneNode(true);
const clonedTen = tenChild.cloneNode(true);
clonedFirst.classList.add('copy');
clonedLast.classList.add('copy');
clonedTen.classList.add('copy');

viewfortUl.insertBefore(clonedLast, viewfortUl.firstElementChild);
viewfortUl.insertBefore(clonedTen, viewfortUl.firstElementChild);
viewfortUl.appendChild(clonedFirst);

let i = 3; //초기값 3 이유는 카피본 두개를 insert하였기때문에 3번째 슬라이더부터 시작

const timer = setInterval(autoMoveSlider, 3000);

function autoMoveSlider(){
  addTransition();
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
  const firstMaxWidth = viewfortUl.clientWidth*-1; //ul너비 15120(카피본 3개 추가)
  const firstTrickWidth = firstMaxWidth - firstQuarter; //트릭효과 주기위해
  let firstWidth3d = number*i;
  if(firstWidth3d <= firstTrickWidth){
    moveTrick();
  }
  viewfortUl.style.transform = `translate3d(${number*i}px, 0px, 0px)`;
  i++;
}

function secondAutoMoveSlider(number){
  const secondMaxWidth = viewfortUl.clientWidth*-1; //ul너비 9,660
  const secondTrickWidth = secondMaxWidth - secondQuarter;
  let secondWidth3d = number*i;
  if(secondWidth3d <= secondTrickWidth){
    moveTrick();
  }
  viewfortUl.style.transform = `translate3d(${number*i}px, 0px, 0px)`;
  i++;
}

function thirdAutoMoveSlider(number){
  const thirdMaxWidth = viewfortUl.clientWidth*-1; //ul너비 4,760px
  const thirdTrickWidth = thirdMaxWidth - thirdQuarter;
  let thirdWidth3d = number*i;
  if(thirdWidth3d <= thirdTrickWidth){
    moveTrick();
  }
  viewfortUl.style.transform = `translate3d(${number*i}px, 0px, 0px)`;
  i++;
}

function moveTrick(){
  i=1;
  viewfortUl.style.transition='none';
};

function addTransition(){
  viewfortUl.style.transition='transform 0.6s';
}