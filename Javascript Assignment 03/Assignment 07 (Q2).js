document.addEventListener("DOMContentLoaded", function () {
  const toggle_Button = document.getElementById("btn1");

  toggle_Button.addEventListener("mouseenter", function () {
    toggle_Button.style.backgroundColor = "yellow";
  });

  toggle_Button.addEventListener("mouseleave", function () {
    toggle_Button.style.backgroundColor = "";
  });

  const hidden_Div = document.getElementById("appearance");
  toggle_Button.addEventListener("click", function () {
    hidden_Div.classList.toggle("hidden");

  });

});