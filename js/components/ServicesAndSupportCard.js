// Function to create a card for services and support
function createServicesAndSupportCard({ title, details, imageUrl, links }) {
    // Create a new div element for the card
    var card = document.createElement('div');
    // Add the 'column-service-cards' class to the card
    card.className = 'column-service-cards';

    // Add an image at the top that spans the full width
    card.innerHTML += '<div class="image_services" style="background-image: url(' + imageUrl + ');"></div>';

    // Add content below the image
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
