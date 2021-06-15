let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);

//let savedValue = JSON.stringify(localStorage.getItem("product"));
//console.log(savedValue);

for (let j = 0; j < savedValue.length; j++) {
const main = document.getElementById("product");
    let newDiv = document.createElement("div");
    main.appendChild(newDiv);
    newDiv.textContent = savedValue[j].name;

    console.log(newDiv);

  }

  console.log(savedValue);