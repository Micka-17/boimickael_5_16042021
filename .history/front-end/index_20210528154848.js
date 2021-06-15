document.body.onload = addElement;

function addElement (cameras) {
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","justify-content-evenly", "flex-wrap");

    for (let i = 0; i < cameras.length; i++) {

    let cards = document.createElement("div");
        newDiv.appendChild(cards);
        cards.classList.add("card");
        cards.src = cameras[i]._id
    
        // img
    let imgCam = document.createElement("img");
        cards.appendChild(imgCam);
        imgCam.classList.add("photo");
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
    let price =document.createElement('p');
        cards.appendChild(price);
        price.classList.add('d-flex', 'justify-content-end')
        
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