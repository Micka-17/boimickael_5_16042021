const urlId = window.location.search;
    console.log(urlId);

const extractID = new URLSearchParams(urlId);
    console.log(extractID);

const _id = extractID.get("id");
    console.log(_id);
fetch(`http://localhost:3000/api/cameras/${_id}`)
  .then((response) => response.json())
  .then((selectedProduct) => {
      createCard(selectedProduct);
      console.log(selectedProduct);
       }
  )
  

function createCard (selectedProduct) {
    console.log(selectedProduct)
    const main = document.getElementById("product");
    product.classList.add("d-flex","justify-content-evenly");
    let newDiv1 = document.createElement("div");
    main.appendChild(newDiv1);
    newDiv1.classList.add("d-flex","justify-content-evenly", "flex-wrap", "card", "container-sm", "m-5");

    const newDiv2 = document.createElement("img");
    newDiv1.appendChild(newDiv2);
    newDiv2.classList.add("card-image-top", "photo", "img-fluid");
    newDiv2.src = selectedProduct.imageUrl;

    const title = document.createElement("h3");
    newDiv1.appendChild(title);
    title.classList.add("title");
    title.textContent = selectedProduct.name;

    const description = document.createElement("p");
    newDiv1.appendChild(description);
    description.classList.add("text-center");
    description.textContent = selectedProduct.description;

    const priceSelected = document.createElement("p");
    newDiv1.appendChild(priceSelected);
    priceSelected.classList.add("d-flex", "justify-content-between");
    priceSelected.textContent = selectedProduct.price + " €";

    const addlens = document.createElement("select");
    newDiv1.appendChild(addlens);
    addlens.classList.add("selectionOption");
//// faire une boucle for

    let allLenses = selectedProduct.lenses;
    console.log(allLenses);

for (let i = 0; i < allLenses.length; i++) {

    const lens = document.createElement("option");
    addlens.appendChild(lens);
    lens.textContent = allLenses[i];

    //const lens1 = document.createElement("option");
    //addlens.appendChild(lens1);
    //lens1.textContent = allLenses.lenses[1];

   // const lens2 = document.createElement("option");
    //addlens.appendChild(lens2);
   // lens2.textContent = allLenses.lenses[2];
};
    const addToBasket = document.createElement("div");
    newDiv1.appendChild(addToBasket);
    addToBasket.classList.add("d-flex","justify-content-evenly", "margin-top");
    addToBasket.innerHTML = `<a class="add" href="./basket.html"><i class="fas fa-cart-arrow-down fa-3x"></i></a>`;

    let orderButton = document.getElementById("addToBasket");
    let itemList = document.getElementById("foods");
    let outputBox = document.getElementById("output");

    addToBasket.addEventListener("click", function() {
        let collection = itemList.selectedOptions;
        let output = "";
        for (let i=0; i<collection.length; i++) {
            if (output === "") {
              output = "Your order for the following items has been placed: ";
            }
            output += collection[i].label;
        
            if (i === (collection.length - 2) && (collection.length < 3)) {
              output +=  " and ";
            } else if (i < (collection.length - 2)) {
              output += ", ";
            } else if (i === (collection.length - 2)) {
              output += ", and ";
            }
          }
        
          if (output === "") {
            output = "You didn't order anything!";
          }
        
          outputBox.innerHTML = output;
        }, false);

};


//// Save value of selected option 













































