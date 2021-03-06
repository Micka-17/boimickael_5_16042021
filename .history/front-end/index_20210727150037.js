document.body.onload = addElement;

function addElement(cameras) {
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex", "justify-content-evenly", "flex-wrap");

    for (let i = 0; i < cameras.length; i++) {

        let cards = document.createElement("div");
        newDiv.appendChild(cards);
        cards.classList.add("card", "container-sm", "m-5");
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
        let price = document.createElement("p");
        cards.appendChild(price);
        price.classList.add("d-flex", "justify-content-between");
        price.textContent = cameras[i].price / 100 + " €";

        let add = document.createElement("p");
        cards.appendChild(add);
        add.classList.add("d-flex", "justify-content-evenly");
        add.innerHTML = `<a class="add" href="../front-end/product.html?id=${cameras[i]._id}"><i class="far fa-plus-square fa-3x"></i></a>`;
    }
}


//code
async function getCameras() {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            console.log(response);
            let cameras = await response.json();
            addElement(cameras);
        } else {
            console.error("Retour du serveur : ", response.status)
        }
    } catch (e) {
        console.log(e);
    }
}

getCameras()