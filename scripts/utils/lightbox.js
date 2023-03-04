// eslint-disable-next-line no-unused-vars
class LightBox {
  constructor(mediaData, photographerData) {
    this.galleryIndex = 0;
    this.modal = null;
    this.isOpen = false;
    
    this.photographerData = photographerData;
    this.name = photographerData.name;
    const photographerName = this.name.split(" ");
    const firstName = photographerName[0];
    this.mediaData = mediaData;
    this.image = this.mediaData[this.galleryIndex].image;
    this.video = this.mediaData[this.galleryIndex].video;
    this.title = this.mediaData[this.galleryIndex].title;
    this.mediaPath = `assets/photographers/${firstName}/${this.image ? this.image : this.video}`;
    console.log("mediaPath " + this.mediaPath)
}

  generateModal() {
    const isImage = this.mediaPath.endsWith(this.image);
    const isVideo = this.mediaPath.endsWith(this.video);
console.log ("image " + isImage)
console.log ("video " + isVideo)
console.log ("mediaPath " + this.mediaPath)
    const mediaHTML = isImage
      ? `<img class="media" src="${this.mediaPath}">`
      : isVideo
      ? `<video class="media" src="${this.mediaPath}" autoplay controls></video>`
      : "";

    const modalHTML = `
      <div class="lightbox-modal">
        <div class="lightbox-content">
          <button class="close-btn">&times;</button>
          <div class="media-container">
            ${mediaHTML}
          </div>
          <div class="media-info">
            <h2 class="media-title">${this.title}</h2>
            <div class="media-index">${this.galleryIndex + 1}/${this.mediaData.length}</div>
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
    if (!this.isOpen) {
      this.generateModal();
      this.modal.classList.toggle("visible");
      this.isOpen = true;
    }
  }

  hide() {
    if (this.isOpen) {
      this.modal.remove();
      this.isOpen = false;
    }
  }

  showMedia(mediaIndex, mediaSrc) {
    this.galleryIndex = mediaIndex;
    const mediaContainer = this.modal.querySelector(".media-container");
    const media = this.mediaData[this.galleryIndex];
    this.mediaPath = mediaSrc;
    if (media.image) {
      mediaContainer.innerHTML = `<img class="media" src="${this.mediaPath}">`;
    } else if (media.video) {
      mediaContainer.innerHTML = `<video class="media" src="${this.mediaPath}" autoplay controls></video>`;
    }
    const title = this.modal.querySelector(".media-title");
    title.textContent = media.title;
    const indexDisplay = this.modal.querySelector(".media-index");
    indexDisplay.textContent = `${this.galleryIndex + 1}/${this.mediaData.length}`;
  }
  
  
  

  prevMedia() {
    if (this.galleryIndex > 0) {
      this.galleryIndex--;
    } else {
      this.galleryIndex = this.mediaData.length - 1;
    }
    this.showMedia(this.galleryIndex);
  }

  nextMedia() {
    if (this.galleryIndex < this.mediaData.length - 1) {
      this.galleryIndex++;
    } else {
      this.galleryIndex = 0;
    }
    this.showMedia(this.galleryIndex);
  }

  init() {
    const mediaList = document.querySelectorAll('.eachcard img, .eachcard video');
    mediaList.forEach((media) => {
      media.addEventListener('click', () => {
        this.show();
        const mediaSrc = media.getAttribute('src');
        const mediaIndex = [...mediaList].indexOf(media);
        this.showMedia(mediaIndex, mediaSrc);
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
console.log (this.mediaData)