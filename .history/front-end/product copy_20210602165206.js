// recup id url

const urlId = window.location.search;
    console.log(urlId)

//const extractId = urlId.slice(1);
   // console.log(extractId)

// recup info via id

const extractID = new URLSearchParams(urlId);
    console.log(extractID);

const id = extractID.get("id");
console.log(extractID);

 