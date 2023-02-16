// eslint-disable-next-line no-unused-vars
class lightBox {
  constructor(media) {
    this.media = media;
  }
 
  //show() {
    // const lightBox = document.querySelector(".light-box");
    // const mediaContainer = document.querySelector(".media-container");
    // const mediaFactory = new MediaFactory(this.media);
    // const mediaCard = mediaFactory.getLightBoxDOM();
    // mediaContainer.appendChild(mediaCard);
    // lightBox.style.display = "flex";
   //}
 
  close() {
    const lightBox = document.querySelector(".light-box");
    lightBox.style.display = "none";
  }
 
 prev() {
  
 }
 
 next() {
 
 }
 
 getLightBoxDOM() {
   const lightBox = document.createElement("div");
   lightBox.classList.add("light-box");
   lightBox.innerHTML = `
     <div class="media-container">
     </div>
     <div class="close-btn">
       <i class="fas fa-times"></i>
     </div>
     <div class="nav-btns">
       <div class="prev-btn">
         <i class="fas fa-arrow-left"></i>
       </div>
       <div class="next-btn">
         <i class="fas fa-arrow-right"></i>
       </div>
     </div>`;
   const closeBtn = lightBox.querySelector(".close-btn");
   closeBtn.addEventListener("click", this.close.bind(this));
   const prevBtn = lightBox.querySelector(".prev-btn");
   prevBtn.addEventListener("click", this.prev.bind(this));
   const nextBtn = lightBox.querySelector(".next-btn")
   nextBtn.addEventListener("click", this.next.bind(this));
   return lightBox();
 }
 
 }