import "./modele2.html";
import "./modele2.scss";

(function () {
  const texts = ["un projet", "une idée", "une migration", "un audit"];
  const typingText = document.getElementById("typing-text");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 120;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex--);
      speed = 60;
    } else {
      typingText.textContent = currentText.substring(0, charIndex++);
      speed = 120;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      speed = 1500; // pause avant suppression
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
})();
