document.body.onload = addElement;

function addElement () {
    let newDiv = document.createElement("div")

    let newContent = document.createElement("img")

    newDiv.appendChild(newContent)

    newContent.src = "../../back-end/images/"
}