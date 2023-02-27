const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll('input');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formEls = event.currentTarget.elements;
  const mail = formEls.email;
  const password = formEls.password;
    if (mail.value === "" || password.value === "") {
     return alert("Please fill in all fields.");
    }
  else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
    console.log(name, value);
 
    });
    event.currentTarget.reset();
  }
}