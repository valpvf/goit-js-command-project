const firstBtn = document.querySelector('.first-slider-btn');
const middleBtn = document.querySelector('.middle-slider-btn');
const lastBtn = document.querySelector('.last-slider-btn');
const pantherImg = document.querySelector('.blackpanther-slider-img');
const spiderImg = document.querySelector('.spiderman-slider-img');
const hulkImg = document.querySelector('.hulk-slider-img');
const pantherCard = document.querySelector('.blackpanther-card-img');
const spiderCard = document.querySelector('.spiderman-card-img');
const hulkCard = document.querySelector('.hulk-card-img');
const desc = document.querySelector('.characters-desc');
const charactersBtn = document.querySelector('.hero-btn-characters');
const hover = 'hero-btn-characters:hover{ background-color: #00ff00 }';
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
  desc.innerHTML = `T’Challa is the king of the secretive and highly advanced African nation 
  of Wakanda - as well as the powerful warrior known as the Black Panther.`;
  charactersBtn.style.backgroundColor = '#34387F';
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
  spiderCard.style.boxShadow = '-5px 80px 60px 10px #600404';
  desc.innerHTML = `With amazing spider-like abilities, teenage science whiz Peter Parker
            fights crime and dreams of becoming an Avenger as Spider-Man.`;
  charactersBtn.style.backgroundColor = '#600404';
}

lastBtn.addEventListener('click', lastBtnClickHandler);
function lastBtnClickHandler() {
  lastBtn.style.backgroundColor = '#5B7F3C';
  firstBtn.style.backgroundColor = '#171717';
  middleBtn.style.backgroundColor = '#171717';
  pantherImg.style.display = 'none';
  spiderImg.style.display = 'none';
  hulkImg.style.display = 'block';
  hulkCard.style.display = 'block';
  pantherCard.style.display = 'none';
  spiderCard.style.display = 'none';
  hulkCard.style.boxShadow = '-5px 20px 60px 10px #5B7F3C';
  desc.innerHTML = `Exposed to heavy doses of gamma radiation, scientist Bruce Banner 
    transforms into the mean, green rage machine called the Hulk.`;
  charactersBtn.style.backgroundColor = '#5B7F3C';
}
// slider
