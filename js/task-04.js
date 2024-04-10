let counterValue = 0;
const button1 = document.querySelector(`[data-action="decrement"]`);
const button2 = document.querySelector(`[data-action="increment"]`);
console.log(button2);
let valoare = document.querySelector('#value');

const handleClickPlus = () => {
  counterValue++;
  valoare.textContent = counterValue;
};
const handleClickMinus = () => {
  counterValue--;
  valoare.textContent = counterValue;
};

button2.addEventListener('click', handleClickPlus);
button1.addEventListener('click', handleClickMinus);
