document.body.onload = addElement;

function addElement (cameras) {
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","card", "justify-content-evenly");

    let newContent = document.createElement("img");
    newDiv.appendChild(newContent);
    newContent.src = cameras[i].imageUrl;;

    let nameCam = document.createElement("h3");
    newContent.appendChild(nameCam);
    nameCam.classList.add("card-title", "title");
    nameCam.textContent = cameras[i].name;
    }


    getCameras()