fetch(`http://localhost:3000/api/cameras/${_id}`)
  .then((response) => response.json())
  .then((selectedProduct) => {
      createCard(selectedProduct);
      console.log(selectedProduct);
       }
  )