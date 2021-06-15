
    let urlSearch = new URLSearchParams(window.location.search);
    console.log(urlSearch);
    let idCamera = urlSearch.get('id');
    console.log(idCamera);
    getCameraItem(cameras, idCamera);
}

const urlId = window.location.search;
    console.log(urlId)

const extractId = urlId.slice(1);
    console.log(extractId)