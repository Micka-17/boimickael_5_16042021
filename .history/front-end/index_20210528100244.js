function createCardCameras(cameras) {
    let divParentParent = document.createElement("div");
    const mainHome = document.getElementById("main-home");
    mainHome.appendChild(divParentParent);
    divParentParent.classList.add("row-cols-1", "row-cols-md-4", "row-cols-lg-5", "d-flex", "flex-wrap", "justify-content-between", "align-items-between");

    for (let i = 0; i < cameras.length; i++) {

        let divParent = document.createElement("div");
        divParentParent.appendChild(divParent);
        divParent.classList.add("card", "col", "m-3", "pt-3");
    }