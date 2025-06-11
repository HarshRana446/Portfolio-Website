// Typing Text Effect
const typingText = document.getElementById("typing-text");
const textArray = [
  "Student",
  "Web Developer",
  "Open Source Enthusiast",
  "React & Node.js Lover",
];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (index >= textArray.length) index = 0;
  currentText = textArray[index];

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

// Custom Cursor Logic
const customCursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  customCursor.style.top = e.clientY + "px";
  customCursor.style.left = e.clientX + "px";
});

document.addEventListener("mousedown", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(1.5)";
});

document.addEventListener("mouseup", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(1)";
});
