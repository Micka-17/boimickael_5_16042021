document.body.onload = addElement;

function addElement (cam) {
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","card", "justify-content-evenly")

    let newContent = document.createElement("img")
    newDiv.appendChild(newContent)
    newContent.src = "../../back-end/images/vcam_1.jpg"

    
    }