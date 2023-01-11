//Mettre le code JavaScript lié à la page photographer.html

//Récupère l'ID du photographe recherché dans l'URL
const photographerUrl = window.location.search;
const urlParams = new URLSearchParams(photographerUrl);
const photographerId = urlParams.get("id");
   
// Récupère les données du fichier json
async function getPhotographers() {
    return fetch("./data/photographers.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        
        .catch(function (error) {
            console.log(error);
        });
        
  }

async function displayData(medias, photographer) {
    mediaFactory.createMediaCard(medias, photographer);
    mediaFactory.createPhotographerHeader();
    mediaFactory.displayNameInModal();
    mediaFactory.createSortList();
}

 
async function init() {
    //Get data for photographers and media
    const { photographers, media } = await getPhotographers();
    const currentPhotographer = photographers.find(id => id.id == photographerId);
    const currentMedias = media.filter(media => media.photographerId == photographerId);
    
    displayData(currentMedias, currentPhotographer);
}

init();
console.log(displayData)