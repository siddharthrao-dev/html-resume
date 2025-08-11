// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop actual submission for now

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your message has been sent.");
    form.reset();
  });
});

// Hover effect for name
const nameHeading = document.querySelector("header h1");

nameHeading.addEventListener("mouseenter", () => {
  nameHeading.style.color = "#007BFF";
});

nameHeading.addEventListener("mouseleave", () => {
  nameHeading.style.color = "white";
});
