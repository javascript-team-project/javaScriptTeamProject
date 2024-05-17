// a 요소가 가지고 있는 기본 이벤트 제거
$('a[href="#').on('click', (e) => {
  e.preventDefault();
});

// 스크롤 시 header 변경
$(window).on('scroll', () => {
  // const mainHt = $('.main-page-wrapper').height();
  if (scrollY > 100) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  }

  // 스크롤이 이벤트 박스에 도착했을 때 텍스트 하나씩 나열
  const eventHt = $('.brand-intro-wrapper').offset().top * 0.9;
  if (scrollY > eventHt) {
    $('.event-wrapper .event-box .event-title').addClass('scroll');

    const waveElements = document.querySelectorAll(".wave-text");

    let delay = 0;
    waveElements.forEach((wave) => {
      const text = wave.textContent;
      wave.innerHTML = "";
      text.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        if (letter !== " ") {
          span.style.animationDelay = `${delay}ms`;
          span.classList.add("letter");
          delay += 40; // 각 문자당 50ms 딜레이
        }
        wave.appendChild(span);
      });
    });
  } else {
    $('.event-wrapper .event-box .event-title').removeClass('scroll');
  }
});

// 로고 클릭 시 페이지 맨 위로 이동
$('header .logo a[href="#"]').on('click', (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// header에 마우스 허버시 svg 그려지고, 'a'의 투명도 1
$('header .global-menu li').hover(
  function () {
    $(this).find('a').css('opacity', 1);
    $(this).find('svg').addClass('event');
  },
  function () {
    $(this).find('a').css('opacity', '');
    $(this).find('svg').removeClass('event');
  }
);

// 자동으로 브랜드 소개 넘겨지기
const $slideBtns = $('.brand-intro-wrapper .slide-button li');
let currentIdx = 0;
const $slides = $('.slide-wrapper .slide-item');
const slideCount = $slides.length;

// 페이지네이션
$slideBtns.on('click', (e) => {
  const $target = $(e.target);
  const idx = $target.index();

  $('.slide-wrapper').stop().animate({
    marginLeft: -100 * idx + '%'
  }, 700);

  $slideBtns.removeClass('active');
  $target.addClass('active');

  currentIdx = idx;
});

const autoSlide = () => {
  currentIdx = (currentIdx + 1) % slideCount;

  $('.slide-wrapper').stop().animate({
    marginLeft: -100 * currentIdx + '%'
  }, 700);

  $slideBtns.eq(currentIdx).addClass('active').siblings().removeClass('active');
};

// let mainSlide = setInterval(autoSlide, 3000);
