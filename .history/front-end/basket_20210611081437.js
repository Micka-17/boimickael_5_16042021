let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);

//let savedValue = JSON.stringify(localStorage.getItem("product"));
//console.log(savedValue);
const main = document.getElementById("product");
main.classList.add("d-flex","justify-content-evenly", "margin-top");

if(savedValue === null) {
  const main = document.getElementById("product");
  let empty = document.createElement('p');
    main.appendChild(empty);
    empty.textContent = "Panier vide !";
    console.log(empty);
}
  else{
for (let i = 0; i < savedValue.length; i++) {
  const main = document.getElementById("product");
  let container = document.createElement("div");
    main.appendChildcontainer

  let newDiv = document.createElement("p");
    main.appendChild(newDiv);
    newDiv.textContent = savedValue[i].titleArticle;

  let newDiv1 = document.createElement("p");
    main.appendChild(newDiv1);
    newDiv1.textContent = savedValue[i].optionSelected;

  let newDiv2 = document.createElement("p");
    main.appendChild(newDiv2);
    newDiv2.textContent = savedValue[i].priceOf + " €";

    console.log(newDiv);
  
  }
  };

  console.log(savedValue);