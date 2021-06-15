// recup id url

const urlId = window.location.search;
    console.log(urlId);

const extractId = new URLSearchParams(urlId);

    console.log(extractId);

const id = extractId.get("id");
    console.log(id);
// recup info via id


