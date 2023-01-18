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
            <h2> ${name} </h2>
        </a>
        <div>
            <p> ${this.city}, ${this.country} </p>
            <p> ${this.tagline} </p>
            <p> ${this.price} € / jour</p>
        </div>`
        return (article);
    }

}
// logique des likes 
// lightbox