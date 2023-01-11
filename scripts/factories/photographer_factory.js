// eslint-disable-next-line no-unused-vars
function photographerFactory({ 
    name, 
    id, 
    city, 
    country, 
    tagline, 
    price, 
    portrait 
}) 
{

    function getUserCardDOM() {
        const article = document.createElement('article')

        article.innerHTML =
        `<a href="./photographer.html?id=${id}">
            <img class="profil" src="assets/photographers/${portrait}" alt="Photo de profil de ${name}">
            <h2 class="name"> ${name} </h2>
        </a>
        <div>
            <p> ${city}, ${country} </p>
            <p> ${tagline} </p>
            <p> ${price} € / jour</p>
        </div>`
        return (article);
    }
    return {
        getUserCardDOM
    }
}