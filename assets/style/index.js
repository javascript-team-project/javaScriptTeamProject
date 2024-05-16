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
$('header.active .logo a').on('click', (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

// 마우스 모양 변경
const mouse = document.querySelector('.mouse-deco img');
$('.mouse-deco img');

// 마우스 커서 좌표
let mouseX = 0;
let mouseY = 0;

addEventListener('mousemove', (e) => {
  mouseX = e.clientX - 10;
  mouseY = e.clientY - 10;
  console.log(mouseX, mouseY);
});

// 마우스 커서를 따라 다니는 이모지 좌표
let imgX = 0;
let imgY = 0;

// 호출
const imgMov = () => {
  requestAnimationFrame(imgMov); // 연속 호출 필요. 다음 프레임 요청

  imgX += (mouseX - imgX) * 0.1;
  imgY += (mouseY - imgY) * 0.1;

  mouse.style.transform = `translate(${imgX}px, ${imgY}px)`;
}
imgMov();

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


