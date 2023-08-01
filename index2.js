// Function to show the animated element
function showAnimatedElement() {
  const element = document.getElementById("popup");
  element.style.opacity = "1";
  element.style.transform = "translateY(0)";
}

// Show the animated element when the website loads
document.addEventListener("DOMContentLoaded", showAnimatedElement);
