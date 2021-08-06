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

        