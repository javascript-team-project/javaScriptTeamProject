// 상품 배치 드롭다운 메뉴 (작동안됨)

document.addEventListener('DOMContentLoaded', function () {
  const btnArrange = document.querySelector('.btn-arrange');
  const categoryMenu = btnArrange.querySelector('.category');

  btnArrange.addEventListener('click', function () {
    categoryMenu.classList.toggle('show');
  });
});