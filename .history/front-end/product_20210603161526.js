fetch("http://localhost:3000/api/cameras/")
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

var img = new Image();
img.src = 'myImage.png'


    /*document.body.onload = createCard;

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
