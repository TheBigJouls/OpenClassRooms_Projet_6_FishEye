//Mettre le code JavaScript lié à la page photographer.html

const photographerUrl = window.location.search;
const urlParams = new URLSearchParams(photographerUrl);
const photographerId = urlParams.get("id");


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
  
      async function displayData(photographers) {
          const photographersSection = document.querySelector(".photograph-header");
  
          photographers.forEach((photographer) => {
              const photographerModel = mediaFactory(photographer);
              const userCardDOM = photographerModel.getMediaCardDOM();
              photographersSection.appendChild(userCardDOM);
          });
      };
  
      async function init() {
          // Récupère les datas des photographes
          const { photographers } = await getPhotographers();
          displayData(photographers);
      };
      
      init();
      