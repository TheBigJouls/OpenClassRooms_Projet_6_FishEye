class mediaFactory {
constructor(mediaData, photographerData) {
    this.mediaData = mediaData;
    this.image = mediaData.image;
    this.title = mediaData.title;
    this.video = mediaData.video;
    this.name = photographerData.name;
}

getMediaCardDOM() {
   
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const p = document.createElement("p");
    const media = document.createElement(this.image ? "img" : "video");
 
  
}


}