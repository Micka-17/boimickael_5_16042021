let savedValue = JSON.parse(localStorage.getItem("product"));  ///json => js
console.log(savedValue);

//let savedValue = JSON.stringify(localStorage.getItem("product"));
//console.log(savedValue);


if(savedValue === null) {
  const main = document.getElementById("product");
  let empty = document.createElement('p');
    main.appendChild(empty);
    empty.textContent = "Panier vide !";
    console.log(empty);
}
  else{
for (let i = 0; i < savedValue.length; i++) {
const main = document.getElementById("product");
    let newDiv = document.createElement("div");
    main.appendChild(newDiv);
    newDiv.textContent = savedValue[i].name;

    console.log(newDiv);
  
  }
  }

  console.log(savedValue);