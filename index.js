window.onload = function() {
  var typewriterElement = document.querySelector('.typewriter');
  typewriterElement.innerHTML = '';

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
