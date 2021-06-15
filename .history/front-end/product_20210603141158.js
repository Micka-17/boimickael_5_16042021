
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

//const selectedProduct = response.find((element) => element._id === _id);
    //console.log(selectedProduct);

    document.body.onload = addElement;

    function addElement (cameras) {
        let newDiv = document.createElement("div");
        const product = document.getElementById('product');
        main.appendChild(newDiv);
        newDiv.classList.add("d-flex","justify-content-evenly", "flex-wrap");
    
        for (let i = 0; i < cameras.length; i++) {
    
        let cards = document.createElement("div");
            newDiv.appendChild(cards);
            cards.classList.add("card", "container-sm", "m-5", );
            cards.src = cameras[i]._id
        
            // img
        let imgCam = document.createElement("img");
            cards.appendChild(imgCam);
            imgCam.classList.add("card-image-top", "photo", "img-fluid");
            imgCam.src = cameras[i].imageUrl;
    
            //noms cam
        let nameCam = document.createElement("h3");
            cards.appendChild(nameCam);
            nameCam.classList.add("title");
            nameCam.textContent = cameras[i].name;
        
    
            // description
        let descripCam = document.createElement("p");
            cards.appendChild(descripCam);
            descripCam.classList.add("text-center");
            descripCam.textContent = cameras[i].description;
    
            // Prix
        let price = document.createElement('p');
            cards.appendChild(price);
            price.classList.add('d-flex', 'justify-content-between');
            price.textContent = cameras[i].price + ' €';
    
        let add = document.createElement('p');
            cards.appendChild(add);
            add.classList.add('d-flex',"justify-content-evenly");
            add.innerHTML = `<a class="add" href="./product.html?id=${cameras[i]._id}"><i class="fas fa-cart-arrow-down"></i></a>`;
        }
    }