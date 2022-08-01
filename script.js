let themeButton = document.getElementById("mode");

themeButton.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeButton.innerHTML = `<img src="./images/sun.png" alt="" />`;
  } else {
    themeButton.innerHTML = `<img src="./images/moon.png" alt="" />`;
  }
};
