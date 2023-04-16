const firstBtn = document.querySelector('.first-slider-btn');
const middleBtn = document.querySelector('.middle-slider-btn');
const lastBtn = document.querySelector('.last-slider-btn');
const pantherImg = document.querySelector('.blackpanther-slider-img');
const spiderImg = document.querySelector('.spiderman-slider-img');
const hulkImg = document.querySelector('.hulk-slider-img');
const pantherCard = document.querySelector('.blackpanther-card-img');
const spiderCard = document.querySelector('.spiderman-card-img');
const hulkCard = document.querySelector('.hulk-card-img');
firstBtn.addEventListener('click', firstBtnClickHandler);
function firstBtnClickHandler() {
  firstBtn.style.backgroundColor = '#34387F';
  middleBtn.style.backgroundColor = '#171717';
  lastBtn.style.backgroundColor = '#171717';
  pantherImg.style.display = 'block';
  spiderImg.style.display = 'none';
  hulkImg.style.display = 'none';
  pantherCard.style.display = 'block';
  spiderCard.style.display = 'none';
  hulkCard.style.display = 'none';
}
middleBtn.addEventListener('click', middleBtnClickHandler);
function middleBtnClickHandler() {
  firstBtn.style.backgroundColor = '#171717';
  lastBtn.style.backgroundColor = '#171717';
  middleBtn.style.backgroundColor = '#600404';
  spiderImg.style.display = 'block';
  pantherImg.style.display = 'none';
  hulkImg.style.display = 'none';
  spiderCard.style.display = 'block';
  pantherCard.style.display = 'none';
  hulkCard.style.display = 'none';
}

lastBtn.addEventListener('click', lastBtnClickHandler);
function lastBtnClickHandler() {
  firstBtn.style.backgroundColor = '171717';
  middleBtn.style.backgroundColor = '#171717';
  lastBtn.style.backgroundColor = '#5B7F3C';
  pantherImg.style.display = 'none';
  spiderImg.style.display = 'none';
  hulkImg.style.display = 'block';
  hulkCard.style.display = 'block';
  pantherCard.style.display = 'none';
  spiderCard.style.display = 'none';
}
