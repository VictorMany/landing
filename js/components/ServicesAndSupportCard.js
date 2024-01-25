// Function to create a card for services and support
function createServicesAndSupportCard({ title, details, imageUrl, links }) {
    var card = document.createElement('div');
    card.className = 'column-service-cards';
    card.innerHTML += '<div class="image_services" style="background-image: url(' + imageUrl + ');"></div>';
    card.innerHTML +=
        '<div class="card__container height-container-services">' +
        '<div class="card__content">' +
        (title ? '<div class="card__title">' + title + '</div>' : '') +
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        (links ? '<div class="card__links">' + (links ? links.map(link => link + ' ').join('') : '') + '</div>' : '') +
        '</div>' +
        '</div>';
    return card;
}
