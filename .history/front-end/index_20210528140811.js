document.body.onload = addElement;

function addElement (cam) {

    let newDiv = document.createElement("div")

    let newContent = document.createElement("img")

    newDiv.appendChild(newContent)

    newContent.src = "../../back-end/images/vcam_1.jpg"

    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);

    let imageCamera = document.createElement("img");
        divParent.appendChild(imageCamera);
        imageCamera.classList.add("card-image-top", "photo", "img-fluid");
        imageCamera.src = camer[i].imageUrl;
    
}