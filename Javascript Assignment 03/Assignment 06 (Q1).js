const button = document.getElementById("btn1");

button.addEventListener("mouseenter", function () {
  button.style.backgroundColor = "yellow";
});

button.addEventListener("mouseleave", function () {
  button.style.backgroundColor = "";
});


button.addEventListener("click", () => {
  alert("Button Clicked !");
});