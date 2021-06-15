// recup id url

const urlId = window.location.search;
    console.log(urlId)

const extractId = urlId.slice(1);
    console.log(extractId)

// recup info via id

let response = fetch (`http://localhost:3000/api/cameras/${_id}`);
let newDiv = document.createElement("div");
const selectedProduct = document.getElementById('product');
fetch('.name')
.then(function(response) {
    return response.blob();
  })
  .then(function(myBlob) {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = = cameras[i].imageUrl;;
  });