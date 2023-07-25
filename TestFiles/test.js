// JavaScript code for triggering the typewriting animation
window.onload = function() {
  var typewriterElement = document.querySelector('.typewriter');
  typewriterElement.innerHTML = ''; // Clear the text initially

  var text = "Welcome to my Website!";
  var charIndex = 0;
  var typingInterval = setInterval(function() {
    typewriterElement.innerHTML += text.charAt(charIndex);
    charIndex++;
    if (charIndex >= text.length) {
      clearInterval(typingInterval);
    }
  }, 120);
};
