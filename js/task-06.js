
const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener("blur", (event) => {
  inputEl.classList.add("invalid");
  if (event.target.value.length === Number(event.target.dataset.length)) {
    inputEl.classList.replace('invalid', 'valid');
  } 
});
