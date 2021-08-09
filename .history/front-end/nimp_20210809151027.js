for (k = 0; k < buttonsremove.length; k++) {
    element = buttonsremove[k];

    valueCount = element.previousElementSibling.value;
    const brotherElement = element.previousElementSibling;

    if (valueCount >= 1) {
      brotherElement.previousElementSibling.removeAttribute("disabled");
      brotherElement.previousElementSibling.classList.remove("disabled");
    };
    if (valueCount >= 3) {
      element.setAttribute("disabled", "disabled");
    };

    element.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      valueCount = this.previousElementSibling.value;
      valueCount++;

      const brother = this.previousElementSibling;

      this.previousElementSibling.value = valueCount;
      if (valueCount >= 1) {
        brother.previousElementSibling.removeAttribute("disabled");
        brother.previousElementSibling.classList.remove("disabled");
      };
      if (valueCount >= 3) {
        this.setAttribute("disabled", "disabled");
      };
      savedValue[i].productQuantity = valueCount;
      localStorage.setItem("product", JSON.stringify(savedValue));
      location.reload();
    })

  };