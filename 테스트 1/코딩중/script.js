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


// 마우스 커서
let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".hamburger div"); //메뉴 링크
  //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}

// 뇨뇨핑
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.style.zIndex = "-1";
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.style.zIndex = "1000";
    link.classList.remove("hovered-link");
  });
});

// 하암핑
const hamburgerDivs = document.querySelectorAll('.hamburger');

hamburgerDivs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow');
  });
  
  div.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow');
  });
});
