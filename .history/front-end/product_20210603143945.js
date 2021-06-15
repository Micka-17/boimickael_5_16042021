
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

// recup info via id

const extractID = new URLSearchParams(urlId);
    console.log(extractID);

const _id = extractID.get("id");
    console.log(_id);

    ocument.body.onload = createCard;

function createCard (selectedProduct) {

    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","justify-content-evenly", "flex-wrap");

const newDiv = document.getElementById('product');
    newDiv = document.createElement("div");
    newDiv.classList.add("card", "container-sm", "m-5");
    newDiv.src = selectedProduct.imageUrl;

}
    async function
fetch("http://localhost:3000/api/cameras/")
  .then((response) => response.json())
  .then((json) => {
      const selectedProduct = json.find((element) => element._id === _id);
      console.log(selectedProduct);
       }
  )
    