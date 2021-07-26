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
    //console.log(empty);

    let emptyImg = document.createElement("img");
    empty.appendChild(emptyImg);
    emptyImg.classList.add("d-flex", "justify-content-evenly", "container-sm", "imgEmpty")
    emptyImg.src = src="../back-end/images/yoann-siloine.jpg" ;
}
  else{
    for (let i = 0; i < savedValue.length; i++) {
      const main = document.getElementById("product");
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
        newDiv2.textContent = savedValue[i].priceOf + " €";

      let garbadge = document.createElement("div");
        container.appendChild(garbadge);
        garbadge.setAttribute("id",`"${savedValue[i].numberId}"`);
        garbadge.classList.add("d-flex", "justify-content-evenly", "btn", "align-items-sm-center");
        garbadge.innerHTML = `<button class="btn minus-btn disabled" type="button">-</button>
        <input type="text" class="quantity" value="${savedValue[i].productQuantity}" placeholder="Maximum 3" 
        min="1" max="3">
        <button class="btn plus-btn" type="button">+</button><button class="btn deleteMe"><i class="far fa-trash-alt"></i></button>`; //savedValue[i].numberId + 
        
        //// Salut Nicolas ! Ca merde ici///////////////

      // for (let j = 0; j < optionPresent.length; j++) {
        // console.log("yuflkyf" + optionPresent);
       let valueCount;

       //console.log(valueCount);
       buttonsadd = document.querySelectorAll(".plus-btn");
       for (j = 0; j < buttonsadd.length; j++) {
           element = buttonsadd[j];
           element.addEventListener("click", function(e) {
          e.stopImmediatePropagation();
          e.preventDefault();
           valueCount = this.previousElementSibling.value;
           valueCount++;
           console.log('click');

           const brother = this.previousElementSibling;
           console.log(brother);
           console.log(brother.previousElementSibling);
           console.log(this.parentElement.children);
           
           this.previousElementSibling.value = valueCount;

           if (valueCount > 1) {
            brother.previousElementSibling.removeAttribute("disabled");
            brother.previousElementSibling.classList.remove("disabled");
           } 
           if (valueCount >= 3) {
               this.setAttribute("disabled", "disabled");
           } 
       })}

       buttonsremove = document.querySelectorAll(".minus-btn");
       for (k = 0; k < buttonsremove.length; k++) {
           element = buttonsremove[k];
           element.addEventListener("click", function(e) {
          e.stopImmediatePropagation();
          e.preventDefault();
           valueCount = this.nextElementSibling.value;
           valueCount--;

           const brother = this.nextElementSibling;
           this.nextElementSibling.value = valueCount

           if(valueCount <= 1)
           {
               this.setAttribute("disabled", "disabled");
           } 
           if(valueCount < 3)
           {
               brother.nextElementSibling.removeAttribute("disabled");
               brother.nextElementSibling.classList.remove("disabled");
           } 
});}
    }
  };
 ///////////////// ici
  let btnsup = document.querySelectorAll(".deleteMe");
  //console.log("btn " + btnsup);
  for (let l = 0; l < savedValue.length; l++){
    btnsup[l].addEventListener("click",(event) =>{
      event.preventDefault();
      // tout sup localStorage.clear();
      const localDelete = JSON.parse(localStorage.getItem("product"));;
      console.log(localDelete);

      let supId = {
       index : savedValue[l],
       // id : savedValue[l].numberId,
       // option : savedValue[l].optionSelected,
    };
      console.log(supId);
      localStorage.splice(, 1);
      //on enregistre le nouveau localStorage
      localStorage.setItem("product", JSON.stringify(savedValue));
      JSON.parse(localStorage.setItem('product'));

      alert('Cet article a bien été supprimé !');
      window.location.href = "panier.html";   
    })
  }
//// fin probleme 1
  let btnConfirm = document.createElement("button");
  container.appendChild(btnConfirm);
  btnConfirm.classList.add("d-flex", "justify-content-evenly", "btn", "btnConfirm");
  btnConfirm.textContent = "Confirrmer ma commande !";

  let infoProduit = {
    productQuantity: savedValue.productQuantity,  /////////////////////////////////////////////infos produit
}
console.log("les infos " + infoProduit.values);
console.log(infoProduit)

const btnconf = document.querySelector(".btnConfirm")
  console.log(btnconf)

  btnconf.addEventListener("click", (event)=>{
  event.preventDefault();
  
  //// Save allValue of selected option 
alert("Tu déconne")
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
