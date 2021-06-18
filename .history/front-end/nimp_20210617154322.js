

function addElement (cameras) {
    let newDiv = document.createElement("div");
    const main = document.getElementById('main');
    main.appendChild(newDiv);
    newDiv.classList.add("d-flex","justify-content-evenly", "flex-wrap");

    for (let i = 0; i < cameras.length; i++) {

    let cards = document.createElement("div");
        newDiv.appendChild(cards);
        cards.classList.add("card", "container-sm", "m-5");
        cards.src = cameras[i]._id

    }