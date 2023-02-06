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
    // eslint-disable-next-line no-undef
    const photographerFactory = new PhotographerFactory(currentPhotographer);
    const header = photographerFactory.getUserHeaderCardDOM()
    photoSection.appendChild(header)

    const totalCard = photographerFactory.totalLikesCounterCard()
    const mainSection = document.querySelector("main");
    mainSection.appendChild(totalCard);
    //totalCard.classList.add("media-likes");

    const mediasSection = document.querySelector(".media-section");
    
    

  //likeCounter.classList.add("like-count");
    
    currentMedias.forEach((media) => {
        //const totalLikesCount = Array.from(document.getElementsByClassName("media-likes"));
    //console.log(totalLikesCount.map(p=>parseInt(p.textContent)))
        
    const totalLikesCount = Array.from(document.getElementsByClassName("media-likes"));
    let likeSum = 0;
    
    totalLikesCount.forEach(like => {
    const likeCount = parseInt(like.textContent);
    likeSum += likeCount;
   //  console.log(likeSum);
   //console.log(likeCount);
   const totalCountSpan = totalCard.querySelector('.total-count');
   totalCountSpan.textContent = `${likeSum}`;
    //console.log(totalLikesCount);
    console.log(likeSum);
  

});






        
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
    console.log(currentMedias);
    console.log(currentPhotographer);
    displayData(currentMedias, currentPhotographer);
}

init()