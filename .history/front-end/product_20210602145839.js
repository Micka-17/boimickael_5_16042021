// recup id url

var url = 'http://www.site.com/234234234';
var id = url.substring(url.lastIndexOf('/') + 1);

// recup info via id

let response = fetch (`http://localhost:3000/api/cameras/${_id}`);
    console.log(response);
