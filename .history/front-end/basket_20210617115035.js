let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);
//let savedValue = JSON.stringify(localStorage.getItem("product"));
//console.log(savedValue);
const main = document.getElementById("product");
main.classList.add("d-flex","justify-content-evenly", "margin-top");

if(savedValue === null) {
  const main = document.getElementById("product");
  let empty = document.createElement("p");
    main.appendChild(empty);
    empty.textContent = "Panier vide !";
    console.log(empty);
}
  else{
    for (let i = 0; i < savedValue.length; i++) {
      const main = document.getElementById("product");

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
        newDiv2.classList.add("d-flex", "justify-content-between")
        newDiv2.textContent = savedValue[i].priceOf + " €";

      let garbadge = document.createElement("div");
        container.appendChild(garbadge);
        garbadge.classList.add("d-flex", "justify-content-evenly", "btn");
        garbadge.innerHTML = `<button class="btn minus-btn disabled" type="button">-</button>
        <input type="text" id="quantity" value="${savedValue[i].productQuantity}" placeholder="Maximum 3" 
        min="1" max="3">
        <button class="btn plus-btn" type="button">+</button><i class="far fa-trash-alt"></i>`; //savedValue[i].numberId + 
        console.log(newDiv);

       // for (let j = 0; j < productQuantity.length; i++) {}
       let valueCount = 0;

       document.querySelector(".plus-btn").addEventListener("click", function() {
           valueCount = document.getElementById("quantity").value;
           valueCount++;

           document.getElementById("quantity").value = valueCount;

           if(valueCount > 1)
           {
               document.querySelector(".minus-btn").removeAttribute("disabled");
               document.querySelector(".minus-btn").classList.remove("disabled");
           } 
           if(valueCount == 3)
           {
               document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
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
           if(valueCount < 3)
           {
               document.querySelector(".plus-btn").removeAttribute("disabled");
               document.querySelector(".plus-btn").classList.remove("disabled");
           } 
});
    
    }
    let btnConfirm = document.createElement("button");
      container.appendChild(btnConfirm);
      btnConfirm.classList.add("d-flex", "justify-content-evenly", "btn");
      btnConfirm.textContent = "Confirrmer ma commande !";

  };

