fetch('http://localhost:3000/api/teddies/')
  .then((response) => response.json())
  .then((result) => {
      createCard(result);
      console.log(result);
       }
  )

function createCard (result) {
    console.log("blalvla " + result)
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","justify-content-evenly", "flex-wrap");

    for (let i = 0; i < result.length; i++) {

    let cards = document.createElement("div");
        newDiv.appendChild(cards);
        cards.classList.add("card", "container-sm", "m-5");
        cards.src = result[i]._id

        let imgCam = document.createElement("img");
        cards.appendChild(imgCam);
        imgCam.classList.add("card-image-top", "photo", "img-fluid");
        imgCam.src = result[i].imageUrl;
    }
}


let valueCount;

       //console.log(valueCount);

       document.querySelectorAll(".plus-btn").addEventListener("click", function(e) {
          e.stopImmediatePropagation();
          e.preventDefault();
           valueCount = this.previousElementSibling.value;
           valueCount++;
           console.log('click');

           this.previousElementSibling.value = valueCount;

           if (valueCount > 1) {
               document.querySelectorAll(".minus-btn").removeAttribute("disabled");
               document.querySelectorAll(".minus-btn").classList.remove("disabled");
           } 
           if (valueCount >= 3) {
               document.querySelectorAll(".plus-btn").setAttribute("disabled", "disabled");
           } 
       })

       document.querySelectorAll(".minus-btn").addEventListener("click", function(e) {
          e.stopImmediatePropagation();
          e.preventDefault();
           valueCount = this.nextElementSibling.value;
           valueCount--;

           this.nextElementSibling.value = valueCount

           if(valueCount <= 1)
           {
               document.querySelectorAll(".minus-btn").setAttribute("disabled", "disabled");
           } 
           if(valueCount < 3)
           {
               document.querySelectorAll(".plus-btn").removeAttribute("disabled");
               document.querySelectorAll(".plus-btn").classList.remove("disabled");
           } 
});





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
            productQuantity: quantity.value,
        }
        console.log("les infos " + infoProduit);
        //// Save allValue of selected option 
alert("Produit ajouter")
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
