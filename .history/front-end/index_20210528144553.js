document.body.onload = addElement;

function addElement (cameras) {
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","card", "justify-content-evenly");

    let imageCamera = document.createElement("img");
        newD.appendChild(imageCamera);
        imageCamera.classList.add("card-image-top", "photo", "img-fluid");
        imageCamera.src = cameras[i].imageUrl;

    let nameCam = document.createElement("h3");
    newContent.appendChild(nameCam);
    nameCam.classList.add("card-title", "title");
    nameCam.textContent = cameras[i].name;
    }



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