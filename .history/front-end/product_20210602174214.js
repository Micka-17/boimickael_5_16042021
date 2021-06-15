fetch("http://localhost:3000/api/cameras")
        .then((response) => response.json())
        .then((json) => console.log(json));
// recup id url

const urlId = window.location.search;
    console.log(urlId)

// recup info via id

const _id = new URLSearchParams(urlId);
    console.log(extractID);

const id = extractID.get("id");
    console.log(id);

const selectedProduct = response.find((element) => element._id === id);
    console.log(selectedProduct);
    