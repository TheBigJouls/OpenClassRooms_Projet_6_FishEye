
class LightBox {
  constructor(mediaList) {
    this.mediaList = mediaList;
    this.currentIndex = 0;
    this.modal = null;
  }

  generateModal() {
    const modalHTML = `
      <div class="lightbox-modal">
        <div class="lightbox-content">
          <button class="close-btn">&times;</button>
          <div class="media-container">
            <img class="media" src="${this.mediaList[this.currentIndex].url}">
          </div>
          <div class="media-info">
            <h2 class="media-title">${this.mediaList[this.currentIndex].title}</h2>
            <div class="media-index">${this.currentIndex + 1}/${this.mediaList.length}</div>
          </div>
          <div class="media-navigation">
            <button class="prev-btn">&lt;</button>
            <button class="next-btn">&gt;</button>
          </div>
        </div>
      </div>
    `;
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.querySelector('.lightbox-modal');
  }

  toggleModal() {
    this.modal.classList.toggle('visible');
  }

  show() {
    this.generateModal();
    this.toggleModal();
  }

  hide() {
    this.toggleModal();
    this.modal.remove();
  }

  showMedia(index) {
    this.currentIndex = index;
    const media = this.modal.querySelector('.media');
    media.setAttribute('src', this.mediaList[this.currentIndex].url);
    const title = this.modal.querySelector('.media-title');
    title.textContent = this.mediaList[this.currentIndex].title;
    const indexDisplay = this.modal.querySelector('.media-index');
    indexDisplay.textContent = `${this.currentIndex + 1}/${this.mediaList.length}`;
  }

  prevMedia() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.mediaList.length - 1;
    }
    this.showMedia(this.currentIndex);
  }

  nextMedia() {
    if (this.currentIndex < this.mediaList.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.showMedia(this.currentIndex);
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

const mediaList = Array.from(document.querySelectorAll(".eachcard img, .eachcard video"));


