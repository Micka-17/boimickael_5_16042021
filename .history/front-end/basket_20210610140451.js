let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);

let savedValue = JSON.parse(localStorage.getItem("product"));


const main = document.getElementById("product");
    let newDiv = document.createElement("div");
    main.appendChild(newDiv);
    newDiv.textContent = savedValue;