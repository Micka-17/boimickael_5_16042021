let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);


const main = document.getElementById("product");
    let newDiv1 = document.createElement("div");
    main.appendChild(newDiv1);