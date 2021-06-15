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

    const priceselected = document.createElement("p");
    newDiv1.appendChild(priceselected);
    priceselected.classList.add("d-flex", "justify-content-between");
    priceselected.textContent = selectedProduct.price + " €";

    const addlens = document.createElement("select");
    newDiv1.appendChild(addlens);

    const lens = document.createElement("option");
    addlens.appendChild(lens);
    lens.textContent = selectedProduct.lenses[0];

    const lens1 = document.createElement("option");
    addlens.appendChild(lens1);
    lens1.textContent = selectedProduct.lenses;

    const lens2 = document.createElement("option");
    addlens.appendChild(lens2);
    lens2.textContent = selectedProduct.lenses;
}

















































/*fetch("http://localhost:3000/api/cameras/")
  .then((response) => response.json())
  .then((json) => {
      const selectedProduct = json.find((element) => element._id === _id);
      console.log(selectedProduct);
       }
  )
// recup id url


const urlId = window.location.search;
    console.log(urlId);

const extractID = new URLSearchParams(urlId);
    console.log(extractID);

const _id = extractID.get("id");
    console.log(_id);

    document.body.onload = createCard;

function createCard (selectedProduct) {
    let newDiv1 = document.createElement("div");
    const main = document.getElementById('product');
    main.appendChild(newDiv1);
    newDiv1.classList.add("d-flex","justify-content-evenly", "flex-wrap");

    const newDiv2 = document.createElement("div");
    newDiv1.appendChild(newDiv2);
    newDiv2.classList.add("card", "container-sm", "m-5");
    newDiv2.src = selectedProduct.imageUrl;


}
*/









/*async function getmyId() {
    try {
        let response = await fetch("http://localhost:3000/api/cameras/");
        if (response.ok) {
            console.log(response);
            let selectedProduct = await response.json();
            addElement(selectedProduct);
        } else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (e) {
        console.log();
    }
}
    getmyId();
/*
        .then((response) => response.json())
        .then((json) => {
            const selectedProduct = json.find((element) => element._id === _id);
            console.log(selectedProduct);
        }
}*/
