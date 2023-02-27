const body = document.querySelector('body')
const btn = document.querySelector('.change-color');
const colorText = document.querySelector('.color')



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', handleSubmit)

function handleSubmit(event) {
  const colorFn = getRandomHexColor()
  body.style.backgroundColor = colorFn;
  colorText.textContent = colorFn;
}
