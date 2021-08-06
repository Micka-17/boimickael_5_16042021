/* fetch('http://localhost:3000/api/teddies/')
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
 */
    /* let btnConfirmation = document.createElement("button");
  container.appendChild(btnConfirm);
  btnConfirm.classList.add("d-flex", "justify-content-evenly", "btn", "btnConfirm");
  btnConfirm.textContent = "Confirrmer ma commande !";

  let infoProduits = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(infoProduits);
  let infoProduit = {
    numberId : savedValue.numberId,
    titleArticle : savedValue.titleArticle,
    priceOf : savedValue.priceOf,
    optionSelected : savedValue.optionSelected,
    productQuantity : savedValue.productQuantity,
}
console.log("les infos " + infoProduit);
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


}) */

{/* <div id="form">
                <form action="#" method="get">
                    <fieldset>
                    <legend class="title">Adresse de livraison :</legend>
                    <p class="userInput" id="part-1"><label>Nom <br><input type="text" name="nom"></label></p>
                    <p class="userInput" id="part-1"><label>Prénom <br><input type="text" name="prenom"></label></p>
                    <p class="userInput" id="part-1"><label>Tel <br><input type="text" maxlength="id="part-1"" name="telephone"></label></p>
                    <p class="userInput" id="part-1"><label>Email <br><input type="text" name="mail"></label></p>
                    <p class="userInput" id="part-2"><label>Adresse <br><input type="text" name="localisation"></label></p>
                    <p class="userInput" id="part-2"><label>Code postal <br><input type="text" name="zipcode"></label></p>
                    <p class="userInput" id="part-2"><label>Ville <br><input type="text" name="city"></label></p>
                    <p id="btnConfirmation part-3" class="btnSubmit"><input type="submit" onclick="formulaire()" name="Confirmer ma commande" value="Valider"></label></p>
                    </fieldset>
                </form>
            </div> *//* }
            
for (let i = 0; i < cart.length; i+=1) {
    const productOfCart = cart[i];
    if (product.name !== productOfCart.name) {
        continue;
    }
    if (product.lens !== productOfCart.lens) {
        continue;
    }

    index = i;
}

if (index === null) {
    console.log('product doesn\'t exist on cart yet');
    cart.push(product);
} else {
    console.log('found product index at', index);
    cart[index].quantity += 1;
} */

/* let savedValue = [infoProduit];
        console.log("les infos " + infoProduit);
        //// Save allValue of selected option 
        if (localStorage.length === 0) {
            localStorage.setItem("product", JSON.stringify(savedValue));
            alert(`Le produit ${selectedProduct.name} est ajouté à votre panier !`)
            //Et sinon on récupère la liste de produit pour voir si il n'est pas déjà dans le panier
        } else {
            let savedValue = JSON.parse(localStorage.getItem("product"));
            //Ajout panier
            if (JSON.stringify(savedValue).indexOf(JSON.stringify(infoProduit)) === -1) {
                savedValue.push(infoProduit);
                localStorage.setItem("product", JSON.stringify(savedValue));
                alert(`Le produit ${selectedProduct.name} est ajouté à votre panier !`);
                //Produit déjà dans le panier
            } else {
                alert(`Le produit ${selectedProduct.name} est déjà dans votre panier !`);
            }
        } */

        /* else {
            let savedValue = JSON.parse(localStorage.getItem("product"));
            //Ajout panier
            if (JSON.stringify(savedValue).indexOf(JSON.stringify(infoProduit)) === -1) {
                savedValue.push(infoProduit);
                localStorage.setItem("product", JSON.stringify(savedValue));
                alert(`Le produit ${selectedProduct.name} est ajouté à votre panier !`);
                //Produit déjà dans le panier
            } else {
                alert(`Le produit ${selectedProduct.name} est déjà dans votre panier !`);
            }
        } */

        /* savedValue[index].productQuantity = parseInt(savedValue[index].productQuantity) + 1;
                alert(`Plus un produit ${selectedProduct.name} est ajouté à votre panier !`)
            }
            localStorage.setItem("product", JSON.stringify(savedValue));
        } */
        
        /* const savedValue = JSON.parse(localStorage.getItem("product"));
        localStorage.setItem("product", JSON.stringify(savedValue)); */
/* 
        let removeItem = savedValue[l];

    const index = savedValue.findIndex(function (product) {
      return product.numberId === removeItem.numberId;
    });
    console.log(index)

    savedValue.splice(index, 1);
    console.log(savedValue); */

    // Je calcul le prix total du panier
/* 
let total = savedValue;
console.log(savedValue.priceOf);
console.log(total);

// Je confirme ma commande



 //validation du formulaire et envoie en POST
 const order = document.getElementById("order");
 const regexName = ;
 const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
 const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
 const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
 const checkBox = document.getElementById("invalidCheck2");

 order.addEventListener("click", (event) => {
     // on prépare les infos pour l'envoie en POST
     let contact = {
         firstName: document.getElementById("firstName").value,
         lastName: document.getElementById("lastName").value,
         address: document.getElementById("address").value,
         city: document.getElementById("city").value,
         email: document.getElementById("email").value,
     };
     // on valide que le formulaire soit correctement rempli
     if (
         (regexMail.test(contact.email) == true) &
         (regexName.test(contact.firstName) == true) &
         (regexName.test(contact.lastName) == true) &
         (regexCity.test(contact.city) == true) &
         (regexAddress.test(contact.address) == true) &
         (checkBox.checked == true)
     ) {
         event.preventDefault();

         // on envoie en POST
         fetch("https://teddies-api.herokuapp.com/api/cameras/order", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({ contact, products }),
         })
             .then((response) => response.json())
             .then((data) => {
                 localStorage.setItem("order", JSON.stringify(data));
                 document.location.href = "order.html";
             })
             .catch((erreur) => console.log("erreur : " + erreur));
     } else {
         alert(
             "Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande."
         );
     }
 });

 fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, maps }),
  })
      .then((response) => response.json())
      .then((data) => {
          localStorage.setItem("order", JSON.stringify(data));
          document.location.href = "order.html";
      })
      .catch((erreur) => console.log("erreur : " + erreur));
}
  else {
    alert('Formulaire non valide!');
  }

  localStorage.setItem("maps", JSON.stringify(data));
    window.location.href = "../front-end/order.html"
  }
  else {
    alert('Formulaire non valide!');
  }


 adresse: "1497 route de lançon"
cardnumber: ""
cc-exp: ""
cc-name: ""
codePostale: "13250"
cvc: ""
email: "Vpmicka@hotmail.fr"
lastName: "Mickael"
nom: "Boi"
num: "+33768137248"
ville: "CORNILLON CONFOUX" */


/* async function getCameras() {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            console.log(response);
            let cameras = await response.json();
            addElement(cameras);
        } else {
            console.error("Retour du serveur : ", response.status)
        }
    } catch (e) {
        console.log(e);
    }
}

getCameras()

let promise = fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((response) => response.json())
      .then((allData) => {
        localStorage.setItem("order", JSON.stringify(allData));
        //document.location.href = "order.html";
      })
      .catch((erreur) => console.log("erreur : " + erreur));
    console.log(promise);
  }
  else {
    alert('Formulaire non valide!');
  } */

/* 
  let btnForm = document.querySelector(".btnForm")
btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  let contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    num: document.getElementById("number").value,
    email: document.getElementById("email").value,
    address: document.getElementById("localisation").value,
    codePostale: document.getElementById("zipcode").value,
    city: document.getElementById("city").value,
  };
  console.log(firstName);
  console.log(lastName);

  const regexfirstName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
  const regexlastName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
  const regexNum = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
  const regexAdresse = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
  const regexCodePostale = /^[0-9]{5}$/;
  const regexCity = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,50}$/;

  if (
    (regexfirstName.test(contact.firstName) == true) &
    (regexlastName.test(contact.lastName) == true) &
    (regexNum.test(contact.num) == true) &
    (regexEmail.test(contact.email) == true) &
    (regexAdresse.test(contact.address) == true) &
    (regexCodePostale.test(contact.codePostale) == true) &
    (regexCity.test(contact.city) == true)
  ) {
    let data = {};
    document.querySelectorAll('.form-control').forEach(input => {
      data[input.name] = input.value
    });

    let products = savedValue;
    let contact = {
      firstName,
      lastName,
      address,
      city,
      email,
    };

    let allData = {
      products,
      contact,
      //totalPrices,
    };

    const post = async function (allData) {
      try {
        let response = await fetch("http://localhost:3000/api/cameras/order", {
          method: "POST",
          body: JSON.stringify(allData),
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (response.ok) {
          let data = await response.json();
          console.log(allData);
          localStorage.setItem("responseOrder", allData);
          //document.location.href = "order.html";
        } else {
          e.preventDefault();
          console.error('Retour du serveur : ', response.status);
          alert('Erreur rencontrée : ' + response.status);
          alert('Formulaire non valide!');
        }
      }
      catch (error) {
        alert("Erreur : " + error);
      }
    };
    post(allData);
  }
});

const post = async function (data) {
    try {
      let promise = await fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (promise.ok) {
        let data = await response.json();
        localStorage.setItem("order", JSON.stringify(data));
        console.log(promise);
        //document.location.href = "order.html";
      } else {
        e.preventDefault();
        console.error('Retour du serveur : ', response.status);
        alert('Erreur rencontrée : ' + response.status);
        alert('Formulaire non valide!');
      }
    } catch (error) {
      alert("Erreur : " + error);
    }
    console.log(promise);
    post(allData);
  }};
  
});
 */


function send(allData) {
    const promise = fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                body: JSON.stringify(allData),
                headers: {
                    "Content-Type": "application/json",
                },   
            });

            promise.then(async (response) => {
              try {
                const contenu = await response.json();
                console.log(contenu);
              
              if(response.ok){
                console.log(`resultats de ${response.ok}`);
                console.log(contenu.id);
              } else {
                console.log(response.status);
            alert("Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande.");
        }
      } catch (e) {
        console.log(e);
            });