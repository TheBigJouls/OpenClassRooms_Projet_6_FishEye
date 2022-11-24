function photographerFactory(data) {
    const {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait
    } = data;


    function getUserCardDOM() {
        const article = document.createElement('article')
        let href = './photographer.html?id=' + id

        article.innerHTML =
        `<a href="${href}">
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