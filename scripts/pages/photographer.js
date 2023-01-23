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
//forEach
  async function displayData(currentMedias, currentPhotographer) {
    const photoSection = document.querySelector(".photograph-header");
    const photographerFactory = new PhotographerFactory(currentPhotographer);
    const header = photographerFactory.getUserHeaderCardDOM()
    photoSection.appendChild(header)

    const mediasSection = document.querySelector(".media-section");
    currentMedias.forEach((media) => {

        const photographerMedia = new MediaFactory(media, currentPhotographer);
        const mediaCardDOM = photographerMedia.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);

    });
}

   


async function init() {
    const { photographers, media } = await getPhotographers();
    const currentPhotographer = photographers.find(id => id.id == photographerId);
    const currentMedias = media.filter(media => media.photographerId == photographerId);
    console.log(currentMedias);
    console.log(currentPhotographer);
    displayData(currentMedias, currentPhotographer);
}

init();