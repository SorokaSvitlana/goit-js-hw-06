const inputEl = document.querySelector('#font-size-control');
let inputTextEl = document.querySelector("span#text");

inputEl.addEventListener('input', (event) => {
inputTextEl.style.fontSize = `${event.target.value}px`
})