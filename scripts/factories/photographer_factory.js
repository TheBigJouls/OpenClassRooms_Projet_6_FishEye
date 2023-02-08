// eslint-disable-next-line no-unused-vars
class PhotographerFactory {
    constructor({ name, id, city, country, tagline, price, portrait }) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
    }
    
    getUserCardDOM() {
        const article = document.createElement('article')

        article.innerHTML =
        `<a href="./photographer.html?id=${this.id}">
            <img class="profil" src="assets/photographers/${this.portrait}" alt="Photo de profil de ${name}">
            <h1> ${this.name} </h1>
        </a>
        <div>
            <p> ${this.city}, ${this.country} </p>
            <p> ${this.tagline} </p>
            <p> ${this.price} € / jour</p>
        </div>`
        return (article);
    }

    getUserHeaderCardDOM() {
        const articleInfos = document.createElement('article')
     articleInfos.innerHTML =
        `
        <div class="photographer_info">
        <a href="./photographer.html?id=${this.id}">
        <h1> ${this.name} </h1>
        </a>
            <p> ${this.city}, ${this.country} </p>
            <p> ${this.tagline} </p>
        </div>
        <div class="photographer_contact_button">
        <button class="modal_btn open_btn" onclick="displayModal()">Contactez-moi</button>
        </div>
        <div class="photographer_img">
        <img class="profil" src="assets/photographers/${this.portrait}" alt="Photo de profil de ${this.name}">
        </div> 
        `

        return (articleInfos);
    }

    totalLikesCounterCard() {
        const likesCounterCard = document.createElement("div");
        likesCounterCard.id = "total-card";
        likesCounterCard.innerHTML = `<span class="total-count"></span><i class="fa-solid fa-heart"></i><span class="total-price">${this.price}€ / jour</span>`; 
        
        return likesCounterCard;
    }
}
