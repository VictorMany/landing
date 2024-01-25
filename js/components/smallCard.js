function createSmallCard({ details, imageUrl }) {
    var card = document.createElement('div');
    card.className = 'small-card';

    // Imagen en la parte superior que abarca todo el ancho
    card.innerHTML += '<div class="card__image" style="background-image: url(' + imageUrl + ');"></div>';

    // Contenido debajo de la imagen
    card.innerHTML +=
        '<div class="card__container">' +
        '<div class="card__content row">' +
        (details ? '<p class="card__details text-center">' + details + '</p>' : '') +
        '</div>' +
        '</div>';
    return card;
}