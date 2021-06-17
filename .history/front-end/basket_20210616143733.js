let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);
let valueCount = savedValue.productQuantity;
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
        <input type="text" id="quantity" value="1" placeholder="Maximum 3" 
        min="1" max="3">
        <button class="btn plus-btn" type="button">+</button><i class="far fa-trash-alt"></i>`; //savedValue[i].numberId + 
        console.log(newDiv);

        
    
    }
    let btnConfirm = document.createElement("button");
      container.appendChild(btnConfirm);
      btnConfirm.classList.add("d-flex", "justify-content-evenly", "btn");
      btnConfirm.textContent = "Confirrmer ma commande !";

  };

 // btnConfirm.addEventListener("click", (event)=>{
  ///  event.preventDefault();


 /// }),
 // console.log(savedValue);

/// on supp l'element selectionner
// let btnDelete = document.querySelectorAll(".btn");

//function uuidv4() {
 // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
 //   var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  //  return v.toString(16);
  //  container.appendChild(uuidv4);
//  });
//}

//console.log(uuidv4());

document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

        let valueCount = savedValue.productQuantity;

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