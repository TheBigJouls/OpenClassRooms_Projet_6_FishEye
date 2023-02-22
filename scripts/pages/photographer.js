
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
//Affiche les données du photographe correspondant à l'ID
async function displayData(currentMedias, currentPhotographer) {

    //Crée une instance de la classe PhotographerFactory
    const photoSection = document.querySelector(".photograph-header");
    // eslint-disable-next-line no-undef
    const photographerFactory = new PhotographerFactory(currentPhotographer);
    // pour le header
    const header = photographerFactory.getUserHeaderCardDOM();
    photoSection.appendChild(header);

    // pour le bloc des likes totaux
    const totalCard = photographerFactory.totalLikesCounterCard();
    const mainSection = document.querySelector("main");
    mainSection.appendChild(totalCard);

    const mediasSection = document.querySelector(".media-section");
    let sortedMedias = currentMedias.slice(); // create a copy of currentMedias for sorting

    // Update total likes count for all media
    let likeSum = 0;
    sortedMedias.forEach(media => {
        const likeCount = parseInt(media.likes);
        likeSum += likeCount;
    });
    const totalCountSpan = totalCard.querySelector('.total-count');
    totalCountSpan.textContent = `${likeSum}`;

    // Add event listener to sort button
    const sortDropdown = document.querySelector(".sort-dropdown");
    sortDropdown.addEventListener("change", () => {
    const sortOption = sortDropdown.value;

        if (sortOption === "date") {
            sortedMedias.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            });
        } else if (sortOption === "title") {
            sortedMedias.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === "popularity") {
            sortedMedias.sort((a, b) => b.likes - a.likes);
        }

        // Update the media section with sorted media
        mediasSection.innerHTML = "";
        sortedMedias.forEach(media => {
            // eslint-disable-next-line no-undef
            const photographerMedia = new MediaFactory(media, currentPhotographer);
            const mediaCardDOM = photographerMedia.getMediaCardDOM();
            mediasSection.appendChild(mediaCardDOM);
        });

        // Update total likes count for all media
        let likeSum = 0;
        sortedMedias.forEach(media => {
            const likeCount = parseInt(media.likes);
            likeSum += likeCount;
        });
        totalCountSpan.textContent = `${likeSum}`;
    });

    // Initial display of media sorted by date
    sortedMedias.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
    sortedMedias.forEach(media => {
        // eslint-disable-next-line no-undef
        const photographerMedia = new MediaFactory(media, currentPhotographer);
        const mediaCardDOM = photographerMedia.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
       
    });
}


   
async function init() {
    const { photographers, media } = await getPhotographers();
    const currentPhotographer = photographers.find(id => id.id == photographerId);
    const currentMedias = media.filter(media => media.photographerId == photographerId);
    
    displayData(currentMedias, currentPhotographer);

    const lightbox = new LightBox(currentMedias);
    lightbox.init();
}

init()

