// recup id url

var url = 'http://127.0.0.1:5500/front-end/product.html?';
var id = url.substring(url.lastIndexOf('') + 1);
console.log(id)
// recup info via id

let response = fetch (`http://localhost:3000/api/cameras/${_id}`);
    console.log(response);
