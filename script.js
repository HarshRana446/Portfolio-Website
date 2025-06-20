const typingText = document.getElementById("typing-text");
const textArray = [
  "Student",
  "Web Developer",
  "Open Source Enthusiast",
  "React & Node.js Lover",
];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[index];
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const aboutSection = document.querySelector(".about .container");

function revealAbout() {
  const scrollPos = window.scrollY + window.innerHeight;
  const aboutPos = aboutSection.offsetTop + aboutSection.clientHeight / 2;

  if (scrollPos > aboutPos) {
    aboutSection.style.opacity = 1;
    aboutSection.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", revealAbout);

// Animate Projects on Scroll
const animateItems = document.querySelectorAll(".animate");

function showOnScroll() {
  animateItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemTop < windowHeight - 100) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
document.addEventListener("DOMContentLoaded", showOnScroll);

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
  });

// Hide loader after page load
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
