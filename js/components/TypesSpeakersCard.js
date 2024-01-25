// Function to create a card for type of speakers
function createTypeSpeakersCard({ title, subtitle = 'Applications', details, applications, imageUrl, links }) {
    // Create a new div element for the card
    var card = document.createElement('div');
    // Add the 'card' class to the card
    card.className = 'column-type-speakers-card';

    // Add an image at the top that spans the full width
    card.innerHTML += '<div class="image-speakers" style="background-image: url(' + imageUrl + ');"></div>';

    // Add content below the image
    card.innerHTML +=
        '<div class="card__container height-container-speakers">' +
        '<div class="card__content">' +
        (title ? '<div class="card__title">' + title + '</div>' : '') +
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        (subtitle ? '<div class="card__subtitle">' + subtitle +          // Add applications if available
            (applications ? '<p class="card__details">Applications: ' + applications + '</p>' : '') +
            '</div>' : '') +
        (links ? '<div class="card__links">' + (links ? links.map(link => '<span style="padding-right: 20px; display: inline-block;">' + link + '</span>').join('') : '') + '</div>' : '')
    '</div>' +
        '</div>';

    // Return the created card
    return card;
}
