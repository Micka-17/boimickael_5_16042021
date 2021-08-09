let savedValueProduct = JSON.parse(localStorage.getItem("product"));
let savedValueLocation = JSON.parse(localStorage.getItem("contact"));
let savedValueId = JSON.stringify(localStorage.getItem("responseId"));
let savedValuePrice = JSON.parse(localStorage.getItem("totalPrice"));

const title = document.querySelector(".top-container");
let titleOrder = document.createElement("h2");
title.appendChild(titleOrder);
titleOrder.classList.add("title", "mb-5", "mx-5");
titleOrder.textContent = `Merci pour votre commande numero ${savedValueId}`; //orderId

const main = document.querySelector(".bottom-container");

for (let i = 0; i < savedValueProduct.length; i++) {
    let container = document.createElement("div");
    container.classList.add("d-flex", "card", "justify-content-evenly", "container-sm", "firstContainer");
    main.appendChild(container);

    let newDiv = document.createElement("h3");
    container.appendChild(newDiv);
    newDiv.classList.add("title")
    newDiv.textContent = savedValueProduct[i].titleArticle;

    let newDiv1 = document.createElement("p");
    container.appendChild(newDiv1);
    newDiv1.classList.add("text-center", "mx-5")
    newDiv1.textContent = savedValueProduct[i].optionSelected;

    let newDiv2 = document.createElement("p");
    container.appendChild(newDiv2);
    newDiv2.classList.add("d-flex", "justify-content-between", "align-items-sm-center");
    newDiv2.textContent = savedValueProduct[i].priceOf / 100 * savedValueProduct[i].productQuantity + " €";
};

const mainMaps = document.querySelector(".midle-container");
let divcontact = document.createElement("div");
mainMaps.appendChild(divcontact);
divcontact.classList.add("d-flex", "justify-content-evenly", "mx-5");
divcontact.innerHTML = `${savedValueLocation.nom} ${savedValueLocation.lastName} <br>
    ${savedValueLocation.num} <br>
    ${savedValueLocation.email} <br>
    ${savedValueLocation.adresse} ${savedValueLocation.codePostale} ${savedValueLocation.ville}`;

const price = document.querySelector(".price-container");
let h4Price = document.createElement("h4");
h4Price.classList.add("d-flex", "justify-content-evenly", "container-lg", "")
price.appendChild(h4Price);
h4Price.textContent = `Montant totale payer: ${savedValuePrice} €`;