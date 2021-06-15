document.body.onload = addElement;

function addElement (cam) {

    for (let i = 0; i < cameras.length; i++) {
        
    let newDiv = document.createElement("div")

    let newContent = document.createElement("img")

    newDiv.appendChild(newContent)

    newContent.src = "../../back-end/images/vcam_1.jpg"

    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);

        for
}