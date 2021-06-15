
let response = fetch("http://localhost:3000/api/cameras")
.then((response) => response.json())
    let selectedProduct = response.find((element) => element._id === _id);
    console.log(selectedProduct);
.then((json) => console.log(json))
 console.log(response)

// recup id url



const urlId = window.location.search;
    console.log(urlId);

// recup info via id

const extractID = new URLSearchParams(urlId);
    console.log(extractID);

const _id = extractID.get("id");
    console.log(_id);

//function getId () {
    console.log(response);

const selectedProduct = response.find((element) => element._id === _id);
    console.log(selectedProduct);

