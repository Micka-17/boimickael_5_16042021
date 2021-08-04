let savedValueProduct = JSON.parse(localStorage.getItem("product"));
let savedValueLocation = JSON.parse(localStorage.getItem("maps"));
console.log(savedValueProduct);
console.log(savedValueLocation);

const main = document.getElementById("product");
main.classList.add("d-flex", "justify-content-evenly", "margin-top");