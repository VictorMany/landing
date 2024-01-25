function createCard({ bigTitle, title, subtitle = 'Applications', details, applications, imageUrl, links }) {
    var card = document.createElement('div');
    card.className = 'card';

    // Imagen en la parte superior que abarca todo el ancho
    card.innerHTML += '<div class="card__image" style="background-image: url(' + imageUrl + ');"></div>';

    // Contenido debajo de la imagen
    card.innerHTML +=
        '<div class="card__container">' +
        '<div class="card__content">' +
        (title ? '<div class="card__title">' + title + '</div>' : '') + // Verificar si title está presente
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        (subtitle ? '<div class="card__subtitle">' + subtitle + '</div>' : '') +
        (applications ? '<p class="card__details">Applications: ' + applications + '</p>' : '') +
        (links ? '<div class="card__links">' + (links ? links.map(enlace => enlace + ' ').join('') : '') + '</div>' : '') + // Verificar si links está presente
        '</div>' +
        '</div>';
    return card;
}