// Function to create a card for services and support
function createServicesAndSupportCard({ title, details, imageUrl, links }) {
    // Create a new div element for the card
    var card = document.createElement('div');
    // Add the 'flex-service-cards' class to the card
    card.className = 'flex-service-cards';

    // Add an image at the top that spans the full width
    card.innerHTML += '<div class="image_services" style="background-image: url(' + imageUrl + ');"></div>';

    // Add content below the image
    card.innerHTML +=
        '<div class="card__container">' +
        '<div class="card__content">' +
        // Add title if available
        (title ? '<div class="card__title">' + title + '</div>' : '') +
        // Add details if available
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        // Add links if available
        (links ? '<div class="card__links">' + (links ? links.map(enlace => enlace + ' ').join('') : '') + '</div>' : '') +
        '</div>' +
        '</div>';

    // Return the created card
    return card;
}
