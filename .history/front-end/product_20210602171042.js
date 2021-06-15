
// recup id url

const urlId = window.location.search;
    console.log(urlId)

// recup info via id

const extractID = new URLSearchParams(urlId);
    console.log(extractID);

const id = extractID.get("id");
    console.log(id);

    fetch(`http://localhost:3000/api/cameras/${id}`);
    console.log(cameras);