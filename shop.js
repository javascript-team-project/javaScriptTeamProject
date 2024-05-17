
/*
$(function () {
  $('.btn-arrange > li').on({
    'mouseenter': (e) => {
      $('.btn-arrange > ul').stop().slideDown();
    },
    'mouseleave': () => {
    $('.btn-arrange > ul').stop().slideUp();
  }
  })
});
*/

document.addEventListener('DOMContentLoaded', function () {
  const newProduct = document.getElementById('new-product');
  const categoryMenu = document.querySelector('.category');

  newProduct.addEventListener('click', function () {
    categoryMenu.classList.toggle('show');
  });
});