// recup id url

const urlId = window.location.search;
    console.log(urlId)

const extractId = urlId.slice(1);
    console.log(extractId)

// recup info via id

let response = fetch (`http://localhost:3000/api/cameras/${_id}`);
    console.log(response)

    async function getCameras() {
        try {
            let response = await fetch("http://localhost:3000/api/cameras${_id}");
            if (response.ok) {
                let cameras = await response.json();
                addElement(cameras);
                console.log(response)
            } else {
                console.error('Retour du serveur : ', response.status)
            }
        } catch (e) {
            console.log();
        }
    }

    getCameras()