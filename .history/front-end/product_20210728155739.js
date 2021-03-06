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


function createCard(selectedProduct) {
    console.log(selectedProduct)
    const main = document.getElementById("product");
    let newDiv = document.createElement("div");
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex", "justify-content-evenly", "flex-wrap");

    const newDiv1 = document.createElement("div");
    newDiv.appendChild(newDiv1);
    newDiv1.classList.add("card", "container-sm", "m-5");

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
    priceSelected.textContent = selectedProduct.price / 100 + " €";

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
    addToBasket.classList.add("d-flex", "justify-content-evenly", "margin-top");
    addToBasket.innerHTML = `<button class="btn minus-btn disabled" type="button">-</button>
        <input type="text" id="quantity" value="1" placeholder="Maximum 3" 
        min="1" max="3">
        <button class="btn plus-btn" type="button">+</button>
        <a class="add" href="../front-end/basket.html"><i class="fas fa-cart-arrow-down fa-3x arrow"></i></a>`;

    //////////////// nombre de produit
    //// Salut Nicolas ! La ça marche///////////////
    let valueCount

    document.querySelector(".plus-btn").addEventListener("click", function () {
        valueCount = document.getElementById("quantity").value;
        valueCount++;

        document.getElementById("quantity").value = valueCount;

        if (valueCount > 1) {
            document.querySelector(".minus-btn").removeAttribute("disabled");
            document.querySelector(".minus-btn").classList.remove("disabled");
        }
        if (valueCount == 3) {
            document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
        }

    })

    document.querySelector(".minus-btn").addEventListener("click", function () {
        valueCount = document.getElementById("quantity").value;
        valueCount--;

        document.getElementById("quantity").value = valueCount

        if (valueCount == 1) {
            document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
        }
        if (valueCount < 3) {
            document.querySelector(".plus-btn").removeAttribute("disabled");
            document.querySelector(".plus-btn").classList.remove("disabled");
        }
    });
    //////////////// nombre de produit fin
    //////////////// ajout de produit

    const btnBasket = document.querySelector(".add")
    console.log(btnBasket)


    const allOptions = document.querySelector(".selectionOption")
    console.log(allOptions);

    btnBasket.addEventListener("click", (event) => {
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

        let savedValue = [infoProduit];
        console.log("les infos " + infoProduit);
        //// Save allValue of selected option 
        if (localStorage.length === 0) {
            localStorage.setItem("product", JSON.stringify(savedValue));
            alert(`Le produit ${selectedProduct.name} est ajouté à votre panier !`)
            //Et sinon on récupère la liste de produit pour voir si il n'est pas déjà dans le panier
        } else {
            let savedValue = JSON.parse(localStorage.getItem("product"));
            //Ajout panier
            let index = null;
            for (let i = 0; i < savedValue.length; i+=1) {
                console.log('for'+i);
                console.log(savedValue);
                const productOfCart = savedValue[i];
                console.log(infoProduit.titleArticle)
                console.log(productOfCart.name)
                if (infoProduit.titleArticle !== productOfCart.titleArticle) {
                    console.log('if 1')
                    continue;
                }
                if (infoProduit.optionSelected !== productOfCart.optionSelected) {
                    console.log('if 2')
                    continue;
                }
            
                index = i;
                console.log(index)
            }
            
            if (index === null) {
                alert(`Le produit ${selectedProduct.name} est ajouté à votre panier !`)
                savedValue.push(infoProduit);
                localStorage.setItem("product", JSON.stringify(savedValue));
            } else {
                console.log('found product index at', index);
                console.log(savedValue[index].productQuantity)
                savedValue[index].productQuantity = parseInt(savedValue[index].productQuantity) + 1;
                
            }
        }
        savedValue.push(infoProduit);
                localStorage.setItem("product", JSON.stringify(savedValue));
    })
};
// let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
// console.log(savedValue);

// ///if else + const

// if(savedValue){
//     addProductBasket();
//     console.log(savedValue);
// }
// else{
//     savedValue = [];
//     addProductBasket();
//     console.log(savedValue);
// }

// const addProductBasket = () => {
//     savedValue.push(infoProduit);
//     localStorage.setItem("product", JSON.stringify(savedValue))
//     alert("Produit ajouter")
// };

//     })
// };



/*

//Méthode qui nous permet d'ajouter un produit dans le panier dans le localStorage avec l'id, le nom et la quantité du produit
const btnBasket = document.querySelector(".add")

    //On défini la valeur de la quantité du produit sur 1 avant que l'utilisateur ne le change (ou pas)

    btnBasket.addEventListener('click', function (e) {
        //On créé un tableau de tableau (id + quantité)
        let productArray = [id, productQuantity, productPrice];
        let productsInCartArray = [productArray];

        //Quand le panier est vide on ajoute un produit
        if (localStorage.length === 0) {
            localStorage.setItem("productsInCart", JSON.stringify(productsInCartArray));
            alert(`Le produit ${name} est ajouté à votre panier !`)
            //Et sinon on récupère la liste de produit pour voir si il n'est pas déjà dans le panier
        } else {
            let productsInCartArray = JSON.parse(localStorage.getItem("productsInCart"));
            //Ajout panier
            if (JSON.stringify(productsInCartArray).indexOf(JSON.stringify(productArray)) === -1) {
                productsInCartArray.push(productArray);
                localStorage.setItem("productsInCart", JSON.stringify(productsInCartArray));
                alert(`Le produit ${name} est ajouté à votre panier !`);
                //Produit déjà dans le panier
            } else {
                alert(`Le produit ${name} est déjà dans votre panier !`);
            }
        }
    });
}
}*/