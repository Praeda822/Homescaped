// Smooth scroll for anchor links within the page
const internalLinks = document.querySelectorAll(
  ".container a[href^='#']:not([href='#'])"
);

// Smooth scroll to other sections
internalLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  });
});

// Slide navigation
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

//Form validation

document.querySelector(".form").addEventListener("submit", function (event) {
  let isFormValid = true;

  // Define validation functions
  const isEmpty = (input) => !input.value.trim();
  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const isPhoneValid = (phone) => /^\d{10}$/.test(phone);

  // Object mapping inputs to their validators
  const validators = {
    name: isEmpty,
    phone: isPhoneValid,
    email: isEmailValid,
    suburb: isEmpty,
    services: isEmpty,
    message: isEmpty,
  };

  Object.keys(validators).forEach((key) => {
    const input = document.getElementById(key);
    const isValid =
      validators[key] === isEmpty
        ? !validators[key](input)
        : validators[key](input.value);

    if (!isValid) {
      console.error(key + " is invalid.");
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    event.preventDefault();
  }
});
