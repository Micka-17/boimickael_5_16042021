// recup id url

const urlId = window.location.search;
    console.log(urlId)

const extractId = urlId.slice(1);
    console.log(extractId)

// recup info via id

let response = await fetch (`http://localhost:3000/api/cameras/${_id}`);

const selectedProduct = document.getElementById