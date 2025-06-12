// Typing Effect
const typingText = document.getElementById("typing-text");
const textArray = ["Student", "Web Developer", "Open Source Enthusiast", "React & Node.js Lover"];
let index = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  if (index >= textArray.length) index = 0;
  let currentText = textArray[index];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 150);
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


// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
