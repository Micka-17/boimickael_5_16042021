
  fetch("http://localhost:3000/api/cameras/")
  .then((response) => response.json())
  .then((json) => {
      let selectedProduct = json.find((element) => element._id === _id);
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

//function getId () {
    console.log(response);

let elt = document.getElementById('product');
       elt.innerHTML = "<div class="${_id.imageUrl}"></div>";
    