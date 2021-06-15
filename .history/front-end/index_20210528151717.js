document.body.onload = addElement;

function addElement (cameras) {
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","justify-content-evenly");

    for (let i = 0; i < cameras.length; i++) {

        let newCards = document.createElement("div");
        newDiv.appendChild(newCards);
        newCards.classList.add("card", "col", "m-3", "pt-3");

        // Cards
    let newContent = document.createElement("img");
    newDiv.appendChild(newContent);
    newContent.classList.add("card-image-top", "photo", "img-fluid")
    newContent.src = cameras[i].imageUrl;;

        //noms cam
    let nameCam = document.createElement("h3");
    newContent.appendChild(nameCam);
    nameCam.classList.add("card-title", "title");
    nameCam.textContent = cameras[i].name;

        // description
    let descripCam = document.createElement("p");
    nameCam.appendChild(descriptCam);
    descripCam.classList("text-center")
    descripCam.textContent = cameras[i].description;

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