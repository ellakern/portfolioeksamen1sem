const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

/**** submit */

const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#hundname_output");
const lastNameOutput = document.querySelector("#alder_output");
const termsOutput = document.querySelector("#terms_output");
const fareOutput = document.querySelector("#fare_output");
const farveOutput = document.querySelector("#farve_output");
const placeringOutput = document.querySelector("#placering_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const firstName = formData.get("hundname");
  const lastName = formData.get("alder");
  const placering = formData.get("placering");
  const terms = formData.get("accept_terms");
  const fare = formData.getAll("fare").join(", ");
  const farve = formData.get("farve");

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  placeringOutput.textContent = placering;
  farveOutput.textContent = farve;
  farveOutput.style.backgroundColor = farve;

  termsOutput.textContent = terms;
  fareOutput.textContent = fare;
  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
