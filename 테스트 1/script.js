const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const textEffect = document.querySelector('.text-effect');
const hangoutText = textEffect.querySelector('.hangout-text');
let isMenuOpen = false;

document.addEventListener('DOMContentLoaded', () => {
  textEffect.style.display = 'block';
  textEffect.classList.add('animate-text');
});

const hideText = () => {
  textEffect.style.display = 'none';
};

const showText = () => {
  textEffect.style.display = 'block';
};

hamburger.addEventListener('click', () => {
  if (isMenuOpen) {
    hamburger.classList.remove('active');
    menu.classList.remove('show');
    showText(); // 햄버거 메뉴를 닫을 때 텍스트를 다시 보이게 함
  } else {
    hamburger.classList.add('active');
    menu.classList.add('show');
    hideText(); // 햄버거 메뉴를 열 때 텍스트를 숨김
  }
  isMenuOpen = !isMenuOpen;
});

const letterH = document.querySelector('.letter-h');
const letterE = document.querySelector('.letter-e');
const letterY = document.querySelector('.letter-y');

// 초기 상태 설정
letterE.style.opacity = 0;
letterY.style.opacity = 0;

// "H" 애니메이션
setTimeout(() => {
  letterH.style.transform = 'scaleX(1.5)';
  letterH.style.opacity = 1;
}, 300);

// "E" 애니메이션
setTimeout(() => {
  letterE.style.transform = 'scaleX(1.5)';
  letterE.style.opacity = 1;
  letterE.classList.add('animate');
}, 500); // 500ms (0.5초) 후에 애니메이션 실행

// "Y" 애니메이션
setTimeout(() => {
  letterY.style.transform = 'scaleX(1.5)';
  letterY.style.opacity = 1;
}, 1000); // 1000ms (1초) 후에 애니메이션 실행
