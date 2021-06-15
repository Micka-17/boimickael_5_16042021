document.body.onload = addElement;

function addElement (cam) {
    let newDiv = document.createElement("div");
    const main = document.getElementsById('main');
    main.appendChild(newDiv);
    newDiv.classList.appendChild.add("d-flex", "justify-content-evenly")

    for (let i = 0; i < cameras.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.appendChild(divParent);
        newDiv.classList.add("card", "col", "m-3", "pt-3");

    let newContent = document.createElement("img")
    newDiv.appendChild(newContent)
    newContent.src = "../../back-end/images/vcam_1.jpg"

    //var currentDiv = document.getElementById('div');
    //document.body.insertBefore(newDiv, currentDiv);

    }

    
}