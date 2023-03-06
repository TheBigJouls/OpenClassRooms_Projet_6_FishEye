// eslint-disable-next-line no-unused-vars
class LightBox {
  constructor(mediasData, photographerData) {
    this.galleryIndex = 0;
    this.modal = null;
    this.isOpen = false;
    
    this.photographerData = photographerData;
    this.name = photographerData.name;
    const photographerName = this.name.split(" ");
    const firstName = photographerName[0];
    this.mediasData = mediasData;
   
    this.mediaPath = `assets/photographers/${firstName}/`;
    console.log("mediaPath " + this.mediaPath)
    console.log("mediasData " + mediasData) 

    this.generateModal()
    this.hide()
  
}

  generateModal() {
    
    const isImage = this.mediasData[0]
    console.log("mediasData 0 " + this.mediasData[0]) 
console.log ("image " + isImage)
console.log ("mediaPath " + this.mediaPath)
    const mediaHTML = isImage
      ? `<img class="media" src="${this.mediaPath}">`
      : `<video class="media" src="${this.mediaPath}" autoplay controls></video>`

    const modalHTML = `
      <div class="lightbox-modal">
        <div class="lightbox-content">
          <button class="close-btn">&times;</button>
          <div class="media-container">
            ${mediaHTML}
          </div>
          <div class="media-info">
            <h2 class="media-title">${this.title}</h2>
            <div class="media-index">${this.galleryIndex + 1}/${this.mediasData.length}</div>
          </div>
          <div class="media-navigation">
            <button class="prev-btn">&lt;</button>
            <button class="next-btn">&gt;</button>
          </div>
        </div>
      </div>
    `;

    const main = document.querySelector("main");
    main.insertAdjacentHTML("beforeend", modalHTML);
    this.modal = document.querySelector(".lightbox-modal");
    const closeBtn = this.modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      this.hide();
      
    });

    const prevBtn = this.modal.querySelector(".prev-btn");
    prevBtn.addEventListener("click", () => {
      this.prevMedia();
    });

    const nextBtn = this.modal.querySelector(".next-btn");
    nextBtn.addEventListener("click", () => {
      this.nextMedia();
    });

    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        this.hide();
      } else if (event.keyCode === 37) {
        this.prevMedia();
      } else if (event.keyCode === 39) {
        this.nextMedia();
      }

    });
  }

  show() {
    
      this.modal.style.display = "block";
      this.isOpen = true;
    
  }

  hide() {
    
      this.modal.style.display = "none";
      this.isOpen = false;
      console.log("je ferme")
  }

  updateMedia(mediaIndex) {
    this.galleryIndex = mediaIndex;
    const mediaContainer = this.modal.querySelector(".media-container");
    const media = this.mediasData[this.galleryIndex];
    console.log(media)
    if (media.image) {
      mediaContainer.innerHTML = `<img class="media" src="${this.mediaPath}${media.image}">`;
    } else if (media.video) {
      mediaContainer.innerHTML = `<video class="media" src="${this.mediaPath}${media.video}" autoplay controls></video>`;
    }
    const title = this.modal.querySelector(".media-title");
    title.textContent = media.title;
    const indexDisplay = this.modal.querySelector(".media-index");
    indexDisplay.textContent = `${this.galleryIndex + 1}/${this.mediasData.length}`;

  }
  

  prevMedia() {
    if (this.galleryIndex > 0) {
      this.galleryIndex--;
    } else {
      this.galleryIndex = this.mediasData.length - 1;
    }
    this.updateMedia(this.galleryIndex);
  }

  nextMedia() {
    if (this.galleryIndex < this.mediasData.length - 1) {
      this.galleryIndex++;
    } else {
      this.galleryIndex = 0;
    }
    this.updateMedia(this.galleryIndex);
  }

  init() {
    const mediaList = document.querySelectorAll('.eachcard img, .eachcard video');
    mediaList.forEach((media) => {
      media.addEventListener('click', () => {
       console.log(media.name)
        const selectedMediaName = media.name
        const mediaIndex = this.mediasData.findIndex(media =>
          media.title === selectedMediaName
          )
        this.updateMedia(mediaIndex);
        this.show();
      });
    });
    mediaList.forEach((media) => {
      media.addEventListener('keydown', function(event) {
        if (event.keyCode === 0) {
          console.log("qrlfjerferfiher")
        }
      });
    });
  }
  
  
}
console.log (this.mediasData)