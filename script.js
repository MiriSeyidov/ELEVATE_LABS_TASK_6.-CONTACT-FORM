const contactForm = document.getElementById("contact_form");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("mail");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name_error");
const emailError = document.getElementById("email_error");
const messageError = document.getElementById("message_error");
const successMessage = document.getElementById("success_message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;
  const email_checker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email_checker.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Your message has been sent successfully!";
    contactForm.reset();
  }
});
