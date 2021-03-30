'use strict';

const sliderTxt = document.querySelector('#case .slider__txt p');
const sliderNums = document.querySelector('#case .slider__txt div');
const sliderImg = document.querySelector('#case .slider__img');
const sliderBtn = document.querySelector('#case .slider__btn');
const sliderNum = document.querySelectorAll('#case .slider__idx');

const prev = document.querySelector('#case .prev');
const next = document.querySelector('#case .next');

let sliderIdx = 0;

sliderBtn.addEventListener('click', (e)=>{
  const target = e.target.parentNode.className;
  target === 'prev' ? prevSlider() : nextSlider();
});

sliderNums.addEventListener('click', (e)=>{
  const idx = parseInt(e.target.dataset.idx);
  changeSlider(idx);
});


function prevSlider(){
  console.log("prev");
  sliderIdx--;
  sliderIdx = sliderIdx === -1 ? 3 : sliderIdx;
  changeSlider(sliderIdx);
};

function nextSlider(){
  console.log("next");
  sliderIdx++;
  sliderIdx = sliderIdx === 4 ? 0 : sliderIdx;
  changeSlider(sliderIdx);
};

function changeSlider(idx){
  sliderIdx = idx;
  switch(idx){
    case 0 :
      sliderTxt.innerHTML = `ESG 자료실` ;
      sliderImg.style.backgroundImage='url("./images/case/slider01.jpg")';
      sliderNum[3].classList.remove('active');
      sliderNum[idx+1].classList.remove('active');
      sliderNum[idx].classList.add('active');
      break;

    case 1 : 
      sliderTxt.innerHTML = `지평 노동팀, '2020년 주요 노동판례집' 발간` ;
      sliderImg.style.backgroundImage='url("./images/case/slider02.jpg")';
      sliderNum[idx-1].classList.remove('active');
      sliderNum[idx+1].classList.remove('active');
      sliderNum[idx].classList.add('active');
      break;

    case 2 :
      sliderTxt.innerHTML = `지평, 하나은행과 유언대용신탁 업무협약 체결` ;
      sliderImg.style.backgroundImage='url("./images/case/slider03.jpg")';
      sliderNum[idx-1].classList.remove('active');
      sliderNum[idx+1].classList.remove('active');
      sliderNum[idx].classList.add('active');
      break;

    case 3 :
      sliderTxt.innerHTML = `지평ㆍ두루, “탈탄소 자원순환 분야 소셜벤처” 법률지원` ;
      sliderImg.style.backgroundImage='url("./images/case/slider04.jpg")';
      sliderNum[idx-1].classList.remove('active');
      sliderNum[0].classList.remove('active');
      sliderNum[idx].classList.add('active');
      break;
  }
}