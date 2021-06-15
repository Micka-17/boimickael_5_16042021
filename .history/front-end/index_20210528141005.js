document.body.onload = addElement;

function addElement (cam) {

    let newDiv = document.createElement("div")

    let newContent = document.createElement("img")

    newDiv.appendChild(newContent)

    newContent.src = "../../back-end/images/vcam_1.jpg"

    var currentDiv = document.getElementById('div');
    document.body.insertBefore(newDiv, currentDiv);

    

    
}