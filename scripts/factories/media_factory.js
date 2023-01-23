class MediaFactory {
    constructor(mediaData, photographerData) {
        this.mediaData = mediaData;
        this.image = mediaData.image;
        this.title = mediaData.title;
        this.video = mediaData.video;
        this.name = photographerData.name;
        const nameOfPhotographer = this.name.split(" ");
        const pathName = nameOfPhotographer[0].replace("-"," ");
        this.mediaPath = `assets/photographers/${this.name}/${this.image ? this.image : this.video}`;
    }
    getMediaCardDOM() {
        //DOM éléments de media card
        const div = document.createElement("div");
        const p = document.createElement("p");
        const media = document.createElement(this.image ? "img" : "video");
       
       //Texte inséré en éléments HTML
        p.textContent = `${this.title}`;
        
        div.appendChild(p);
        div.appendChild(media);

        //Ajout éléments créés dans le DOM
     

        return div;

        
    }


//createMediaCard(currentMedias, currentPhotographer) {
  //  const mediasSection = document.createElement("div");
  //  mediasSection.id = "medias_section";
   // const photographerSection = document.querySelector('.photographer_section');
    //photographerSection.appendChild(mediasSection);

 //   this.currentPhotographer = currentPhotographer;

    //Crée section pour chaque media dans le DOM ATTENTION CA PART DANS LE photographer.js
  //  currentMedias.forEach((media) => {
  //      const photographerMedia = new MediaFactory(media, currentPhotographer);
   //     const mediaCardDOM = photographerMedia.getMediaCardDOM();
    //    mediasSection.appendChild(mediaCardDOM.media);

 //   });
//}

//createPhotographerHeader() {
    //Crée header infos photographe
   // const photographHeader = document.querySelector(".photograph-header");
   // const photographerInfo = new PhotographerFactory(this.currentPhotographer);
   // à finir
//}

}