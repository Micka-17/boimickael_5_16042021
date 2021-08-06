/* function send(allData) {
    const promise = fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(allData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    promise.then(async (response) => {
        try {
            const contenu = await response.json();
            console.log(contenu);

            if (response.ok) {
                console.log(`resultats de ${response.ok}`);
                console.log(contenu.id);
            } else {
                console.log(response.status);
                alert("Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande.");
            }
        } catch (e) {
            console.log(e);
        } */

       /*  function send(allData)
        fetch("http://localhost:3000/api/cameras/order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(allData),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        localStorage.setItem("order", JSON.stringify(data.orderId));
                        //document.location.href = "order.html";
                    })
                    .catch((erreur) => console.log("erreur : " + erreur));
            } else {
                alert(
                    "Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande."
                );
            }   
        ; */

        function send(allData) {
            const promise = fetch("http://localhost:3000/api/cameras/order", {
              method: "POST",
              body: JSON.stringify(allData),
              headers: {
                "Content-Type": "application/json",
              },
            });
      ////////////////////////
            promise.then(async (response) => {
              try {
                  const contenu = await response.json();
                  console.log("la reponse du serveur :");
                  console.log(contenu);
      
                  if (response.ok) {
                      console.log(`resultats de ${response.ok}`);
      
                      console.log("la reponse 2 du serveur :");
                      console.log(contenu._id);
                      localStorage.setItem("responseId", contenu._id)
                      // window.location ="order.htmt";
                  } else {
                      console.log("test 25489999" + response.status);
                      alert("Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande.");
                  }
              } catch (e) {
                  console.log(e);
              }
              send(allData)
          });
        }