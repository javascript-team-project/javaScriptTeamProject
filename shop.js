

// 상품 배치 드롭다운 메뉴 (작동됩니당 ♥)
$('.btn-arrange li').on('click', () => {
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


