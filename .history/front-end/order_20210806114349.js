let savedValueProduct = JSON.parse(localStorage.getItem("product"));
let savedValueLocation = JSON.parse(localStorage.getItem("contact"));
//let savedValueOrederId = JSON.parse(localStorage.getItem("responseId"));

console.log(savedValueProduct);
console.log(savedValueLocation);
//console.log(savedValueOrederId);

/* const title = document.querySelector(".title");
title = document.createElement("h2");
//container.appendChild(title);
title.innerHTML = `Merci pour votre commande n° ${savedValueOrederId.responseId} et à bientôt!`; */

const main = document.querySelector(".main");
for (let i = 0; i < savedValueProduct.length; i++) {
    let container = document.createElement("div");
    container.classList.add("d-flex", "card", "justify-content-evenly", "container-sm", "m-5", "firstContainer")
    main.appendChild(container);

    let newDiv = document.createElement("h3");
    container.appendChild(newDiv);
    newDiv.classList.add("title")
    newDiv.textContent = savedValueProduct[i].titleArticle;

    let newDiv1 = document.createElement("p");
    container.appendChild(newDiv1);
    newDiv1.classList.add("text-center")
    newDiv1.textContent = savedValueProduct[i].optionSelected;

    let newDiv2 = document.createElement("p");
    container.appendChild(newDiv2);
    newDiv2.classList.add("d-flex", "justify-content-between", "align-items-sm-center")
    newDiv2.textContent = savedValueProduct[i].priceOf / 100 * savedValueProduct[i].productQuantity + " €";
};

const mainMaps = document.getElementById("main");
    let divMaps = document.createElement("div");
    divMaps.classList.add("d-flex", "card", "justify-content-evenly", "container-sm", "m-5")
    // JSON.stringify(savedValueLocation);
    mainMaps.innerHTML = `${savedValueLocation.nom} ${savedValueLocation.lastName} <br>
    ${savedValueLocation.num} <br>
    ${savedValueLocation.email} <br>
    ${savedValueLocation.adresse} ${savedValueLocation.codePostale} ${savedValueLocation.ville}`;