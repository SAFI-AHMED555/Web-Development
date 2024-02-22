// Define the software company object
var softwareCompany = {
    name: "Microsoft Corp.",
    founder: "Bill Gates" + " , " + "Paul Allen",
    yearFounded: 1975,
    products: ["One Note", "Microsoft Edge", "Excel"]
};

// Access and log some properties
console.log("Company Name:", softwareCompany.name);
console.log("Founder:", softwareCompany.founder);
console.log("Year Founded:", softwareCompany.yearFounded);
console.log("Products:", softwareCompany.products.join(", "));

// Display some properties in HTML
var companyInfoDiv = document.getElementById("CompanyMain");
companyInfoDiv.innerHTML = `

    <h1>${softwareCompany.name}</h1>
    <p>Founder: ${softwareCompany.founder}</p>
    <p>Year Founded: ${softwareCompany.yearFounded}</p>
    <p>Products: ${softwareCompany.products.join(", ")}</p>
  `;  