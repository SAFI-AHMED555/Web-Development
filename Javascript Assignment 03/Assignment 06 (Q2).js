document.addEventListener("DOMContentLoaded", function () {
    const div1 = document.getElementById("page");

    div1.addEventListener("mouseenter", function () {
        div1.style.backgroundColor = "blue";
    });

    div1.addEventListener("mouseleave", function () {
        div1.style.backgroundColor = "";
    });
});m