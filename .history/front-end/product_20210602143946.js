// recup id url

const urlId = window.location.search;
    console.log(urlId)

const extractId = urlId.slice(1);
    console.log(extractId)

// recup info via id

let response = fetch (`http://localhost:3000/api/cameras/${_id}`);

let newDiv = document.createElement("div");
    const selectedProduct = document.getElementById('product');
    main.appendChild(newDiv);



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