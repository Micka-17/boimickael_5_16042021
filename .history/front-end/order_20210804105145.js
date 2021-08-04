let savedValueProduct = JSON.parse(localStorage.getItem("product"));
let savedValueLocation = JSON.parse(localStorage.getItem("maps"));
console.log(savedValueProduct);
console.log(savedValueLocation);

for (let i = 0; i < savedValue.length; i++) {
    const main = document.getElementById("main");
    console.log(savedValue[i].productQuantity);
    let container = document.createElement("div");
    container.classList.add("d-flex", "card", "justify-content-evenly", "container-sm", "m-5")
    main.appendChild(container);

    let newDiv = document.createElement("h3");
    container.appendChild(newDiv);
    newDiv.classList.add("title")
    newDiv.textContent = savedValue[i].titleArticle;

    let newDiv1 = document.createElement("p");
    container.appendChild(newDiv1);
    newDiv1.classList.add("text-center")
    newDiv1.textContent = savedValue[i].optionSelected;

    let newDiv2 = document.createElement("p");
    container.appendChild(newDiv2);
    newDiv2.classList.add("d-flex", "justify-content-between", "align-items-sm-center")
    newDiv2.textContent = savedValue[i].priceOf / 100 * savedValue[i].productQuantity + " €";
}