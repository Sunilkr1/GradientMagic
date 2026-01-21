// Your original JavaScript code (unchanged)
let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".code-content");
let copyBtn = document.querySelector(".copy-btn");
let copyHint = document.querySelector(".copy-hint");
let gradientDisplay = document.querySelector(".gradient-display");
let dirButtons = document.querySelectorAll(".dir-btn");
let currentDirection = "to right";

const hexValue = () => {
  let myHexaCode = "0123456789abcdef";
  let colors = "#";

  for (let i = 0; i < 6; i++) {
    colors = colors + myHexaCode[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const updateGradient = () => {
  let color1 = btn1.querySelector(".color-value").textContent;
  let color2 = btn2.querySelector(".color-value").textContent;

  // Update body background
  document.body.style.background = `linear-gradient(${currentDirection}, ${color1}, ${color2})`;

  // Update gradient display
  gradientDisplay.style.background = `linear-gradient(${currentDirection}, ${color1}, ${color2})`;

  // Update code
  copyDiv.innerHTML = `background-image: linear-gradient(${currentDirection}, ${color1}, ${color2});`;
};

const handelButton1 = () => {
  let rgb1 = hexValue();
  console.log(rgb1);

  btn1.querySelector(".color-value").textContent = rgb1;
  btn1.style.background = rgb1;

  updateGradient();
};

const handelButton2 = () => {
  let rgb2 = hexValue();
  console.log(rgb2);

  btn2.querySelector(".color-value").textContent = rgb2;
  btn2.style.background = rgb2;

  updateGradient();
};

// Copy functionality
const copyToClipboard = () => {
  navigator.clipboard.writeText(copyDiv.innerText);

  // Show confirmation
  copyHint.classList.add("show");
  copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';

  setTimeout(() => {
    copyHint.classList.remove("show");
    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
  }, 2000);
};

// Direction buttons
dirButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dirButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentDirection = button.getAttribute("data-direction");
    updateGradient();
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Event listeners
copyDiv.addEventListener("click", copyToClipboard);
copyBtn.addEventListener("click", copyToClipboard);
btn1.addEventListener("click", handelButton1);
btn2.addEventListener("click", handelButton2);
