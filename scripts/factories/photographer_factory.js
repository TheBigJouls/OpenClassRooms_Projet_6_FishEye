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
            <h2> ${this.name} </h2>
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
        //Comment faire pour que le bouton 
        // <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        // se retrouve entre les infos du photographe et l'image du photographe ?
     articleInfos.innerHTML =
        `
        <a href="./photographer.html?id=${this.id}">
        <h2> ${this.name} </h2>
        </a>
        <div>
            <p> ${this.city}, ${this.country} </p>
            <p> ${this.tagline} </p>
        </div>
        
        <img class="profil" src="assets/photographers/${this.portrait}" alt="Photo de profil de ${this.name}">
        `

        return (articleInfos);
    }
}
// logique des likes 
// lightbox