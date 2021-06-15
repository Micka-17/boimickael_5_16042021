
// recup id url

const urlId = window.location.search;
    console.log(urlId)

// recup info via id

const extractID = new URLSearchParams(urlId)
    console.log(extractID);

const _id = extractID.get("id")
    console.log(_id);

const selectedProduct = response.find((element) => element._id === _id)
    console.log(selectedProduct)


/* fetch("http://localhost:3000/api/cameras") 
    .then((response) => response.json())
    .then((json) => console.log(json))
*/
async function getId() {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            console.log(response);
            let cameras = await response.json();
        } else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (e) {
        console.log();
    }
}

getId()