// recup id url

const urlId = window.location.search;
    console.log(urlId);

const extractId = new URLSearchParams(queryString);
    console.log(extractId);

// recup info via id

let response = fetch (`http://localhost:3000/api/cameras/${_id}`);
    console.log(response);
