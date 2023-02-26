const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll('input');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formEls = event.currentTarget.elements;

  const mail = formEls.mail;
  const password = formEls.password;

  let hasError = false;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      alert("Please fill in all fields.");
      hasError = true;
    }
  });

  if (!hasError) {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(name, value);
    });
    event.currentTarget.reset();
  }
}