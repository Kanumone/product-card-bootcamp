const quantityButtons = document.querySelectorAll('.product-info__quantity button');
const quantityValue = document.querySelector('.product-info__quantity div');
let quantity = Number(quantityValue.textContent) - 1;

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


