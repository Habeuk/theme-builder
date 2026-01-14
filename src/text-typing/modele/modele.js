import "./modele.scss";
import "./modele.html";

(function () {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 90;
  const pauseBetweenTexts = 2500;
  function typeWriter(dynamicTexts, dynamicElement) {
    const currentText = dynamicTexts[textIndex];
    if (isDeleting) {
      // Effacer le texte
      dynamicElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % dynamicTexts.length;
        setTimeout(() => {
          typeWriter(dynamicTexts, dynamicElement);
        }, typingSpeed);
      } else {
        setTimeout(() => {
          typeWriter(dynamicTexts, dynamicElement);
        }, deletingSpeed);
      }
    } else {
      // Écrire le texte
      dynamicElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(() => {
          typeWriter(dynamicTexts, dynamicElement);
        }, pauseBetweenTexts);
      } else {
        setTimeout(() => {
          typeWriter(dynamicTexts, dynamicElement);
        }, typingSpeed);
      }
    }
  }
  const typingContents = document.querySelectorAll(".typing-content-m1");
  if (typingContents) {
    typingContents.forEach((typingContent) => {
      const dynamicElement = typingContent.querySelector(".dynamic-part");
      if (dynamicElement) {
        const dynamicTexts = JSON.parse(dynamicElement.getAttribute("data-anime-text"));
        if (dynamicTexts) {
          console.log("dynamicTexts : ", dynamicTexts[0]);
          typeWriter(dynamicTexts, dynamicElement);
        }
      }
    });
  }
})();
//drupal
Drupal.behaviors.paragraph__presentation___47878 = {
  attach: function (context, settings) {
    if (context.querySelectorAll && context.querySelectorAll(".typing-content-m1")) {
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typingSpeed = 150;
      const deletingSpeed = 90;
      const pauseBetweenTexts = 2500;
      function typeWriter(dynamicTexts, dynamicElement) {
        const currentText = dynamicTexts[textIndex];
        if (isDeleting) {
          // Effacer le texte
          dynamicElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % dynamicTexts.length;
            setTimeout(() => {
              typeWriter(dynamicTexts, dynamicElement);
            }, typingSpeed);
          } else {
            setTimeout(() => {
              typeWriter(dynamicTexts, dynamicElement);
            }, deletingSpeed);
          }
        } else {
          // Écrire le texte
          dynamicElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;

          if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(() => {
              typeWriter(dynamicTexts, dynamicElement);
            }, pauseBetweenTexts);
          } else {
            setTimeout(() => {
              typeWriter(dynamicTexts, dynamicElement);
            }, typingSpeed);
          }
        }
      }
      once("paragraph__presentation___47878", ".typing-content-m1", context).forEach((typingContent) => {
        const dynamicElement = typingContent.querySelector(".dynamic-part");
        if (dynamicElement) {
          const dynamicTexts = JSON.parse(dynamicElement.getAttribute("data-anime-text"));
          if (dynamicTexts) {
            console.log("dynamicTexts : ", dynamicTexts[0]);
            typeWriter(dynamicTexts, dynamicElement);
          }
        }
      });
    }
  },
};
