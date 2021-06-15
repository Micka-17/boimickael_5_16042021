class MyProduct {
    constructor(idCamera, selectedLenses) {
        this.idCamera = idCamera;
        this.selectedLenses = selectedLenses;
    }
}

function getIdUrlAndCard(cameras) {
    let urlSearch = new URLSearchParams(window.location.search);
    console.log(urlSearch);
    let idCamera = urlSearch.get('id');
    console.log(idCamera);
    getCameraItem(cameras, idCamera);
}

