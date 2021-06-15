document.body.onload = addElement;

function addElement () {
    let newDiv = document.createElement("div")

    let newContent = document.createElement("img")

    newDiv.appendChild(newContent)

    newContent.src = "../../back-end/images/orin"

    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}