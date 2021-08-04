let savedValueProduct = JSON.parse(localStorage.getItem("product"));
let savedValueLocation = JSON.parse(localStorage.getItem("maps"));
console.log(savedValueProduct);
console.log(savedValueLocation);

const main = document.getElementById("main");
    let newDiv = document.createElement("div");
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex", "justify-content-evenly", "flex-wrap");

    const newDiv1 = document.createElement("div");
    newDiv.appendChild(newDiv1);
    newDiv1.classList.add("card", "container-sm", "m-5");

    const newDiv2 = document.createElement("img");
    newDiv1.appendChild(newDiv2);
    newDiv2.classList.add("card-image-top", "photo", "img-fluid");
    newDiv2.src = selectedProduct.imageUrl;