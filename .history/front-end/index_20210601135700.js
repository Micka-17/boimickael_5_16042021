document.body.onload = addElement;


fetch('http://localhost:3000/api/vcam')
  .then((response) => response.json())
  .then((response) => {
  
    console.log(response);

    //Je créer ma variable que je vais ajouter à mes elements
    let html = "";

    // Boucle pour récupére toutes les variables des produits + (Foreach)
    for(let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      
      //Html pur , Créer les élément, clone prototype
      html += `<li class="item">
      <h2 class="row">${response[i].name}</h2>
      <p class="row"><img src="${response[i].imageUrl}" alt="Images ours" style= "width:28rem; border-radius:5px;"></p>
      <p class="row">${response[i].description}</p>
      <p class="row">${(response[i].price/100).toFixed(2).replace(".",",")}€</p>
      <a class="row" href="./produit.html?${response[i]._id}" style= "background-color:#f3e9f1; box-shadow: 0px 0px 12px 0px white; margin:auto; width:100px; border-radius:15px; padding:10px;"><b>Voir l'article</b></a></li>`
    }
    
     // Ajouter mes element créer dans le HTML pour afficher mes produits
    document.getElementById("bear").innerHTML = html
})

// Message d'erreur
.catch(e => {
  errorMessage();
});
























//   let newDiv = document.createElement("div");
  //  const main = document.getElementById('main');
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
        add.innerHTML = '<a class="add" href="/product.html"><i class="fas fa-cart-arrow-down"></i></a>';
    }
}
    

//Pas mon code
    async function getCameras() {
        try {
            let response = await fetch("http://localhost:3000/api/cameras");
            if (response.ok) {
                let cameras = await response.json();
                addElement(cameras);
            } else {
                console.error('Retour du serveur : ', response.status)
            }
        } catch (e) {
            console.log();
        }
    }

    getCameras()