// Function to create a card for receivers and amplifiers
function createReceiversAndAmplifiersCard({ title, details, imageUrl, links }) {
    var card = document.createElement('div');
    card.className = 'column-receivers_amplifiers_cards';

    // Add an image at the top that spans the full width
    card.innerHTML += '<div class="image_receivers_amplifiers" style="background-image: url(' + imageUrl + ');"></div>';

    card.innerHTML +=
        '<div class="card__container height-container-receivers_amplifiers">' +
        '<div class="card__content">' +
        (title ? '<div class="card__bigtitle">' + title + '</div>' : '') +
        (details ? '<p class="card__details" style=detailsAccesories"margin-bottom: 45px">' + details + '</p>' : '') +
        // Add links if available
        (links ? '<div class="card__links">' + (links ? links.map(link => '<span style="padding-right: 20px; display: inline-block;">' + link + '</span>').join('') : '') + '</div>' : '')
    '</div>' +
        '</div>';

    return card;
}
