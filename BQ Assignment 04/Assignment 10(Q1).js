var fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];


var list = document.getElementById("list-1");


fruits.forEach(function (fruit) {

    var li = document.createElement("li");

    li.textContent = fruit;
    
    list.appendChild(li);
});