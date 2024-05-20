// 마우스 따라 움직이는 눈
$(document).mousemove(function (event) {
  // 각 '.eye' 클래스를 가진 요소에 대해 반복합니다.
  $('.eye').each(function () {
    // 현재 눈의 중심 좌표를 계산합니다. 
    const centerX = $(this).offset().left + $(this).width() / 2;
    const centerY = $(this).offset().top + $(this).height() / 2;

    // 마우스 위치와 눈의 중심 사이의 각도를 계산합니다.
    const angle = Math.atan2(event.pageX - centerX, event.pageY - centerY);

    // 각도를 도(degree) 단위로 변환하고, 270도를 더해 눈동자가 마우스를 바라보도록 조정합니다.
    const rotateDeg = (angle * (180 / Math.PI) * -1) + 270;

    // 계산된 각도로 눈동자의 회전을 설정합니다.
    $(this).css('transform', `rotate(${rotateDeg}deg)`);
  });
});

// 상품 배치 드롭다운 메뉴 (작동됩니당 ♥) - li 대신 ul을 클릭해도 메뉴 내려오도록 수정했어요!
$('.btn-arrange').on('click', () => {
  $('.btn-arrange .category').toggleClass('show');
});
// document.addEventListener('DOMContentLoaded', function () {
//   const btnArrange = document.querySelector('.btn-arrange');
//   const categoryMenu = btnArrange.querySelector('.category');

//   btnArrange.addEventListener('click', function () {
//     categoryMenu.classList.toggle('show');
//   });
// });

// 더보기 버튼 클릭 시 상품 추가 나열
$('.sub-shop-wrapper .more-btn').on('click', (e) => {
  e.preventDefault();
  $('.sub-shop-wrapper .hidden').addClass('show-list');
  $(e.target).hide();
});

// document.addEventListener('DOMContentLoaded', function() {
//   const moreBtn = document.querySelector('.more-btn');
//   const hiddenItems = document.querySelectorAll('.product-box.hidden');

//   moreBtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     hiddenItems.forEach(item => {
//       item.classList.remove('hidden');
//     });
//     moreBtn.style.display = 'none'; // 더보기 버튼을 숨기기
//   });
// });


