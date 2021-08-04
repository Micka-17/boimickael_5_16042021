let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log('first');
console.log(savedValue)

// Création du corps
const main = document.getElementById("product");
main.classList.add("d-flex", "justify-content-evenly", "margin-top");

// Choix si panier vide affiche ceci ou plein affiche cela 
if (savedValue === null || savedValue.length === 0) {
  document.getElementById('form').hidden = true;
  const main = document.getElementById("product");

  let empty = document.createElement("p");
  main.appendChild(empty);
  empty.classList.add("d-flex", "align-items-sm-center", "column", "empytText")
  empty.textContent = "Panier vide !";

  let emptyImg = document.createElement("img");
  empty.appendChild(emptyImg);
  emptyImg.classList.add("d-flex", "justify-content-evenly", "container-sm", "imgEmpty")
  emptyImg.src = src = "../back-end/images/yoann-siloine.jpg";
}
// Le panier est non vide alors mise en pages du panier avec les produits (boucle for)
else {
  $value = 0;
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
    newDiv2.textContent = savedValue[i].priceOf / 100 * savedValue[i].productQuantity + " €";
    let total =
      savedValue[i].priceOf / 100 * savedValue[i].productQuantity;
    $value += total;
    console.log($value);

    let garbadge = document.createElement("div");
    container.appendChild(garbadge);
    garbadge.setAttribute("id", `"${savedValue[i].numberId}"`);
    garbadge.classList.add("d-flex", "justify-content-evenly", "btn", "align-items-sm-center");
    garbadge.innerHTML = `<button class="btn minus-btn" type="button">-</button>
        <input type="text" class="quantity" value="${savedValue[i].productQuantity}" placeholder="Maximum 3" 
        min="1" max="3">
        <button class="btn plus-btn" type="button">+</button><button class="btn deleteMe"><i class="far fa-trash-alt"></i></button>`; //savedValue[i].numberId + 

    // var valueCount contien la quantité de l'article en question avec un max de 3!
    let valueCount = `${savedValue[i].productQuantity}`;
    console.log(valueCount);
    // Creation de plus ou moins de l'article selectionner avec max 3 et si inferieure a 1 supprimer l'article
    buttonsadd = document.querySelectorAll(".plus-btn");
    for (j = 0; j < buttonsadd.length; j++) {
      element = buttonsadd[j];

      valueCount = element.previousElementSibling.value;
      console.log(valueCount);
      const brotherElement = element.previousElementSibling;

      if (valueCount >= 1) {
        brotherElement.previousElementSibling.removeAttribute("disabled");
        brotherElement.previousElementSibling.classList.remove("disabled");
      };
      if (valueCount >= 3) {
        element.setAttribute("disabled", "disabled");
      };

      console.log(element.previousElementSibling)
      element.addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        valueCount = this.previousElementSibling.value;
        valueCount++;

        const brother = this.previousElementSibling;

        this.previousElementSibling.value = valueCount;
        console.log(valueCount);
        if (valueCount >= 1) {
          brother.previousElementSibling.removeAttribute("disabled");
          brother.previousElementSibling.classList.remove("disabled");
        };
        if (valueCount >= 3) {
          this.setAttribute("disabled", "disabled");
        };
        savedValue[i].productQuantity = valueCount;
        localStorage.setItem("product", JSON.stringify(savedValue));
        location.reload();
      })

    };

    buttonsremove = document.querySelectorAll(".minus-btn");
    for (k = 0; k < buttonsremove.length; k++) {
      element = buttonsremove[k];
      element.addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        valueCount = this.nextElementSibling.value;
        valueCount--;

        const brother = this.nextElementSibling;
        this.nextElementSibling.value = valueCount

        if (valueCount <= 3) {
          brother.nextElementSibling.removeAttribute("disabled");
          brother.nextElementSibling.classList.remove("disabled");
        };
        if (valueCount <= 0) {
          savedValue = JSON.parse(localStorage.getItem("product"));

          let supThisid = {
            index: savedValue,
          };
          savedValue.splice(supThisid, 1);
          //on enregistre le nouveau localStorage
          localStorage.setItem("product", JSON.stringify(savedValue));
          JSON.parse(localStorage.getItem("product"));

          alert('Cet article a bien été supprimé !');
          window.location.href = "../front-end/basket.html";

        };
        savedValue[i].productQuantity = valueCount;
        localStorage.setItem("product", JSON.stringify(savedValue));
        location.reload();
      });
    }
    // Je calcul le prix total du panier
    var totalPrices = $value;
    console.log(totalPrices);

  }
  let btnForm = document.querySelector(".btnForm");
  let totalPrice = document.createElement("p");
  btnForm.appendChild(totalPrice);
  totalPrice.innerHTML = `${totalPrices} €`;
  console.log(totalPrices);
};
// Suppression d'un article directe
let btnsup = document.querySelectorAll(".deleteMe");
for (let l = 0; l < savedValue.length; l++) {
  btnsup[l].addEventListener("click", (event) => {
    event.preventDefault();
    // tout sup localStorage.clear();
    console.log(savedValue);

    const removeItem = savedValue[l];
    // to do function qui trouve mon index dans ma savedValue au click
    const index = savedValue.findIndex(function (product) {
      return product.numberId === removeItem.numberId;
    });
    // je supprimer appartir de mon index
    savedValue.splice(index, 1);
    //on enregistre le nouveau localStorage
    localStorage.setItem("product", JSON.stringify(savedValue));
    JSON.parse(localStorage.getItem("product"));

    alert('Cet article a bien été supprimé !');
    window.location.href = "../front-end/basket.html";
  })
};

let btnForm = document.querySelector(".btnForm")
btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  let maps = {
    lastName: document.getElementById("lastName").value,
    firstName: document.getElementById("firstName").value,
    num: document.getElementById("number").value,
    email: document.getElementById("email").value,
    addresse: document.getElementById("localisation").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };
  
  const regexfirstName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
  const regexlastName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
  const regexNum = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
  const regexAddresse = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
  const regexCodePostale = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
  const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;

  if (
    (regexlastName.test(maps.lastName) == true) &
    (regexfirstName.test(maps.firstName) == true) &
    (regexNum.test(maps.num) == true) &
    (regexEmail.test(maps.email) == true) &
    (regexAdresse.test(maps.adresse) == true) &
    (regexCodePostale.test(maps.codePostale) == true) &
    (regexCity.test(maps.ville) == true)
  ) {
    let data = {};
    document.querySelectorAll('.form-control').forEach(input => {
      data[input.name] = input.value
      console.log(data);
      //
    });
    localStorage.setItem("maps", JSON.stringify(data));
    window.location.href = "../front-end/order.html"
  }
  else {
    alert('Formulaire non valide!');
  }
});