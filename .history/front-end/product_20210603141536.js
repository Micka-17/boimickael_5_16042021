
  fetch("http://localhost:3000/api/cameras/")
  .then((response) => response.json())
  .then((json) => {
      let selectedProduct = json.find((element) => element._id === _id);
      console.log(selectedProduct);
       }
  )
// recup id url



//const selectedProduct = response.find((element) => element._id === _id);
    //console.log(selectedProduct);

    