let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);

const main = document.getElementById("product");
main.classList.add("d-flex","justify-content-evenly", "margin-top");

if(savedValue === null) {
  const main = document.getElementById("product");

  let empty = document.createElement("p");
    main.appendChild(empty);
    empty.classList.add("d-flex", "align-items-sm-center", "column", "empytText")
    empty.textContent = "Panier vide !";
    console.log(empty);

    let emptyImg = document.createElement("img");
    empty.appendChild(emptyImg);
    emptyImg.classList.add("d-flex", "justify-content-evenly", "container-sm", "imgEmpty")
    emptyImg.src = src="../back-end/images/yoann-siloine.jpg" ;
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
        newDiv2.classList.add("d-flex", "justify-content-between", "align-items-sm-center")
        newDiv2.textContent = savedValue[i].priceOf + " €";

      let garbadge = document.createElement("div");
        container.appendChild(garbadge);
        garbadge.setAttribute("id",`"${savedValue[i].numberId}"`);
        garbadge.classList.add("d-flex", "justify-content-evenly", "btn", "align-items-sm-center");
        garbadge.innerHTML = `<button id="btn minus-btn disabled" type="button">-</button>
        <input type="text" id="quantity" value="${savedValue[i].productQuantity}" placeholder="Maximum 3" 
        min="1" max="3">
        <button id="btn plus-btn ${savedValue[i].numberId} " type="button">+</button><button class="btn deleteMe"><i class="far fa-trash-alt"></i></button>`; //savedValue[i].numberId + 
        console.log("quantity");

        //// Salut Nicolas ! Ca merde ici///////////////

      // for (let j = 0; j < optionPresent.length; j++) {
        // console.log("yuflkyf" + optionPresent);
       let valueCount;
       
       console.log(valueCount);

       document.getElementById(".plus-btn ${savedValue[i].numberId}").addEventListener("click", function() {
           valueCount = document.getElementById("quantity").value;
           valueCount++;

           document.getElementById("quantity").value = valueCount;
           console.log("test" +  typeof valueCount)
           //console.log("1" + valueCount);

           if(valueCount > 1)
           {
               document.querySelector(".minus-btn").removeAttribute("disabled");
               document.querySelector(".minus-btn").classList.remove("disabled");
           } 
           if(valueCount >= 3)
           {
               document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
           } 
           //console.log("2" + valueCount);
       })

       document.querySelector(".minus-btn").addEventListener("click", function() {
           valueCount = document.getElementById("quantity").value;
           valueCount--;

           document.getElementById("quantity").value = valueCount

           if(valueCount <= 1)
           {
               document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
           } 
           if(valueCount < 3)
           {
               document.querySelector(".plus-btn").removeAttribute("disabled");
               document.querySelector(".plus-btn").classList.remove("disabled");
           } console.log("3" + valueCount);
});
     // }  //// Au revoir Nicolas ! Ca merde plus!///////////////
    }

    let btnConfirm = document.createElement("button");
      container.appendChild(btnConfirm);
      btnConfirm.classList.add("d-flex", "justify-content-evenly", "btn");
      btnConfirm.textContent = "Confirrmer ma commande !";

  };
  console.log(typeof valueCount)
  let btnsup = document.querySelectorAll(".deleteMe");
  console.log("btn " + btnsup);
  for (let j = 0; j < savedValue.length; j++){
    btnsup[j].addEventListener("click",(event) =>{
      event.preventDefault();

      let supId = savedValue[j].optionSelected;
      savedValue[j].numberId;
      
      console.log("supId");
      console.log(supId);
    })
  }