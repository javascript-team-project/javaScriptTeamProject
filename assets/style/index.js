// 스크롤 시 header 변경
$(window).on('scroll', () => {
  // const mainHt = $('main').height() * 0.2;
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
