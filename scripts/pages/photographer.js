//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() {
    return fetch("./data/photographers.json")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
       
        .catch(function (err) {
            alert("Erreur : " + err);
        });
}