const bara = document.getElementById('font-size-control');
const text = document.getElementById('text');

bara.addEventListener('input', event => {
  const newFontSize = event.currentTarget.value;
  text.style.fontSize = `${newFontSize}px`;
  console.log(event.currentTarget.value);
});
