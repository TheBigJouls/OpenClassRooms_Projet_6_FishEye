//Mettre le code JavaScript lié à la page photographer.html

const photographerUrl = window.location.search;
const urlParams = new URLSearchParams(photographerUrl);
const photographerId = urlParams.get("id");

function getPhotographerId() {
    const photographerUrl = window.location.search;
    const urlParams = new URLSearchParams(photographerUrl);
    const photographerId = urlParams.get("id");
   
    return photographerId

}

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
  
    // filtrer le photohrapgra et ses médias
    // display data photographe et display media =>factory
  
      async function init() {
          // Récupère les datas des photographes
          const { photographers, media } = await getPhotographers();
         const photographerId = await getPhotographerId();
        const photographerMedias = media.filter (media => media.photographerId == photographerId);
        // index.js  displayData(photographers);
        console.log(photographerMedias)
      };
      

      init();
      