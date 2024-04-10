function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buton = document.querySelector('.change-color');
const body = document.body;
const span = document.querySelector('.color');
console.log(body);

buton.addEventListener('click', event => {
  const culoare = getRandomHexColor();
  body.style.backgroundColor = culoare;
  span.textContent = culoare;
});
