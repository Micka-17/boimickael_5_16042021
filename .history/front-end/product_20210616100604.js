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
    newDiv1.classList.add("d-flex","justify-content-evenly", "flex-wrap");

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
    };

    const addToBasket = document.createElement("div");
    newDiv1.appendChild(addToBasket);
    addToBasket.classList.add("d-flex","justify-content-evenly", "margin-top");
    addToBasket.innerHTML = `<button class="btn minus-btn disabled" type="button">-</button>
        <input type="text" id="quantity" value="1" placeholder="Maximum 3" 
        min="1" max="3">
        <button class="btn plus-btn" type="button">+</button>
        <a class="add" href="../front-end/basket.html"><i class="fas fa-cart-arrow-down fa-3x"></i></a>`;


        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

        let valueCount

        document.querySelector(".plus-btn").addEventListener("click", function() {
            valueCount = document.getElementById("quantity").value;
            valueCount++;

            document.getElementById("quantity").value = valueCount;

            if(valueCount > 1)
            {
                document.querySelector(".minus-btn").removeAttribute("disabled");
                document.querySelector(".minus-btn").classList.remove("disabled");
            } 
        })

        document.querySelector(".minus-btn").addEventListener("click", function() {
            valueCount = document.getElementById("quantity").value;
            valueCount--;

            document.getElementById("quantity").value = valueCount

            if(valueCount == 1)
            {
                document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
            } 
});
    //const addToBasket = document.createElement("div");
   // newDiv1.appendChild(addToBasket);
   // addToBasket.classList.add("d-flex","justify-content-evenly", "margin-top");
   // addToBasket.innerHTML = `<label for="lenses"></label>
      //  <input type="number" id="manyOf" name="manyOf" placeholder="Maximum 3"
      //  min="1" max="3"><a class="add" href="../front-end/basket.html"><i class="fas fa-cart-arrow-down fa-3x"></i></a>`;


    const btnBasket = document.querySelector(".add")
        console.log(btnBasket)


        const allOptions = document.querySelector(".selectionOption")
        console.log(allOptions);

    btnBasket.addEventListener("click", (event)=>{
        event.preventDefault();

        const selectedOptions = allOptions.value;
        console.log(selectedOptions);

        let infoProduit = {
            numberId: selectedProduct._id,
            titleArticle: selectedProduct.name,
            priceOf: selectedProduct.price,
            optionSelected: allOptions.value,
        }
        console.log(infoProduit);
        //// Save allValue of selected option 

let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);

///if else + const

const addProductBasket = () => {
    savedValue.push(infoProduit);
    localStorage.setItem("product", JSON.stringify(savedValue))
};

if(savedValue){
    addProductBasket();
    console.log(savedValue);
}
else{
    savedValue = [];
    addProductBasket();
    console.log(savedValue);
}


    })
};
