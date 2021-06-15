// recup id url

const urlId = window.location.search;
    console.log(urlId)

const extractId = urlId.slice(1);
    console.log(extractId)

// recup info via id

function addElement (cameras) {
    let newDiv = document.createElement("div");
        const product = document.getElementById('product');
        product.appendChild(newDiv);
        newDiv.classList.add("d-flex","justify-content-evenly", "flex-wrap");
}

async function getCameras() {
    try {
        let response = await fetch("http://localhost:3000/api/cameras/${_id}");
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