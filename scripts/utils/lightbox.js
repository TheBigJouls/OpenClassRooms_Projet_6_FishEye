
// eslint-disable-next-line no-unused-vars
class LightBox {
  constructor(mediaData) {
    this.galleryIndex = 0;
    this.modal = null;
    this.isOpen = false;

    this.mediaData = mediaData;
    this.image = mediaData.image;
    this.title = mediaData.title;
    this.video = mediaData.video;
    this.mediaPath = `assets/photographers/${firstName}/${this.image ? this.image : this.video}`;
    
}

  generateModal() {
    const isImage = this.mediaPath.endsWith(".jpg");
    const isVideo = this.mediaPath[this.galleryIndex].url.endsWith(".mp4");
console.log (isImage)
console.log (isVideo)
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
            <h2 class="media-title">${this.mediaData[this.galleryIndex].title}</h2>
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

  showMedia(index) {
    this.galleryIndex = index;
    const mediaContainer = this.modal.querySelector(".media-container");
    const isImage = this.mediaPath.endsWith(".jpg");
    const isVideo = this.mediaPath[this.galleryIndex].url.endsWith(".mp4");
    if (isImage) {
      mediaContainer.innerHTML = `<img class="media" src="${this.mediaData[this.galleryIndex].url}">`;
      console.log("image")
    } else if (isVideo) {
      mediaContainer.innerHTML = `<video class="media" src="${this.mediaData[this.galleryIndex].url}" autoplay controls></video>`;
      console.log("video")
    }
    const title = this.modal.querySelector(".media-title");
    title.textContent = this.mediaData[this.galleryIndex].title;
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
      mediaList.forEach((media, index) => {
        media.addEventListener('click', () => {
          this.show();
          this.showMedia(index);
          console.log ("qrlfjerferfiher")
        
        });
      });
      mediaList.forEach((media) => {
        media.addEventListener('keydown', function(event) {
          if (event.keyCode === 0) {
          console.log ("qrlfjerferfiher")
          }
        });
      });
  }
}
console.log (this.mediaData)

//const mediaList = Array.from(document.querySelectorAll(".eachcard img, .eachcard video"));
//const gallery = medias.map(media => media.getAttribute("src"));


