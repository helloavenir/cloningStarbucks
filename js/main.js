const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// focus가 해제됐을 때, blur일 때 focused 클래스를 제거
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
// script에 lodash library 링크로 throttle 명령을 사용할 수 있게 됨
// 300밀리세컨드 = .3초 마다 () 안의 함수가 실행되도록 하는 throttle 기능을 설정
window.addEventListener('scroll', _.throttle( function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap 라이브러리 사용해 구현
    gsap.to();
  } else {
    badgeEl.style.display = 'block';
  }
}, 300));


const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true, 
});

