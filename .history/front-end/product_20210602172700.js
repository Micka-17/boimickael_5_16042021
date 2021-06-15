
// recup id url

const urlId = window.location.search;
    console.log(urlId)

// recup info via id

const extractID = new URLSearchParams(urlId);
    console.log(extractID);

const id = extractID.get("id");
    console.log(id);

fetch("http://localhost:3000/api/cameras/");
            if (response.ok) {
                console.log(response);
                let cameras = await response.json();
            } else {
                console.error('Retour du serveur : ', response.status)
            }
        } catch (e) {
            console.log(e);
        }
    }

    getMyCam()