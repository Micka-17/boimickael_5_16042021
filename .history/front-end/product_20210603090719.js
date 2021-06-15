
// recup id url

const urlId = window.location.search;
    console.log(urlId)

// recup info via id

const extractID = new URLSearchParams(urlId)
    console.log(extractID);

const _id = extractID.get("id")
    console.log(_id);

const selectedProduct = response.find((element) => element._id === _id)
    console.log(selectedProduct)
