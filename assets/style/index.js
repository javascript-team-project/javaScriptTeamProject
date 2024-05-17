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
  function() {
    $(this).find('a').css('opacity', 1);
    $(this).find('svg').addClass('event');
  },
  function() {
    $(this).find('a').css('opacity', '');
    $(this).find('svg').removeClass('event');
  }
);

// 브랜드 소개 중 릴리바이레드 텍스트 하나씩 나열
const wave = document.querySelector(".wave-text");
    const text = wave.textContent;

    wave.innerHTML = "";

    text.split("").forEach((letter, idx) => {
      const span = document.createElement("span");
      span.textContent = letter;
      if (letter !== " ") {
        span.style.animationDelay = `${idx * 50}ms`;
        span.classList.add("letter");
      }
      wave.appendChild(span);
    });

// 자동으로 브랜드 소개 넘겨지기
const $slideBtn = $('.brand-intro-wrapper .slide-button li');
let currentIdx = 0;

// pagenation
$slideBtn.on('click', (e) => {
  const idx = $(e.target).index();

  $('.slide-wrapper').stop().animate({
    marginLeft : -100 * idx + '%'
  }, 700);

  $slideBtn.removeClass('active');
  $(e.target).addClass('active');

  currentIdx = idx;
});

const autoSlide = () => {
  currentIdx = (currentIdx + 1) % $('.slide-wrapper .slide-item').length;

  $('.slide-wrapper').stop().animate({
    marginLeft : -100 * currentIdx + '%'
  }, 700);

  $('.brand-intro-wrapper .slide-button li').eq(currentIdx).addClass('active').siblings().removeClass('active');
}

// let mainSlide = setInterval(autoSlide, 3000);


