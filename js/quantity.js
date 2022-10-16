const buyButton = document.querySelector('.product-info__button_primary');
const quantityButtons = document.querySelectorAll('.product-info__quantity button');
const quantityValue = document.querySelector('.quantity');
let quantity = Number(quantityValue.textContent);
const popup = $('.notification');

quantityButtons[0].addEventListener('click', () => {
  quantity--;
  quantityValue.textContent = quantity;
  quantityButtons[0].disabled = quantity === 1;
})
quantityButtons[1].addEventListener('click', () => {
  quantity++;
  quantityValue.textContent = quantity;
  quantityButtons[0].disabled = quantity === 1;
})

buyButton.addEventListener('click', () => {
  popup.text(`В корзину добавлено ${quantity} товаров`);
  popup.fadeIn();
  setTimeout(() => {
    popup.fadeOut();
  }, 1000);
})


