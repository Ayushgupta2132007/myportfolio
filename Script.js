const typingText = document.querySelector('.typing-text');
const phrases = ["Front-End Developer", "JavaScript Enthusiast", "B.Sc. Student"];
let phraseIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const current = phrases[phraseIndex];
  typingText.textContent = current.substring(0, charIndex) + (charIndex % 2 === 0 ? "|" : "");
  
  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

type();

// 🌗 Dark Mode Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  console.log("Theme toggle clicked");
});


