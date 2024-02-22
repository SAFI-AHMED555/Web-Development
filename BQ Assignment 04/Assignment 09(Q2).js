var car = {
    brand: "Honda",
    model: "Civic",
    year: 2023,
    drive: function printcar() {
        console.log("The " + this.brand + " " + this.model + " is being driven.");
    }
};
car.drive();

var cardetails = document.getElementById("details");
details.innerHTML = `
  <h1>${car.brand} ${car.model}</h1>
  <p>Year: ${car.year}</p>
`;  