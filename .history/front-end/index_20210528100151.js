function createCardCameras(cameras) {
    let divParentParent = document.createElement("div");
    const mainHome = document.getElementById("main-home");
    mainHome.appendChild(divParentParent);
    divParentParent.classList.add("row-cols-1", "row-cols-md-4", "row-cols-lg-5", "d-flex", "flex-wrap", "justify-content-between", "align-items-between");