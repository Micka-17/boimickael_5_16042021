let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);

//let savedValue = JSON.stringify(localStorage.getItem("product"));
//console.log(savedValue);

const main = document.getElementById("product");
    let newDiv = document.createElement("p");
    main.appendChild(newDiv);
    newDiv.textContent = savedValue.name;

    console.log(newdiv);