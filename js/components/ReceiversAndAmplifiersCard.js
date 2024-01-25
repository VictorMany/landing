// Function to create a card for receivers and amplifiers
function createReceiversAndAmplifiersCard({ title, sections, details, imageUrl, links }) {
    // Create a new div element for the card
    var card = document.createElement('div');
    // Add the 'flex-receivers' class to the card
    card.className = 'flex-receivers';

    // Add an image at the top that spans the full width
    card.innerHTML += '<div class="image_receivers_amplifiers" style="background-image: url(' + imageUrl + ');"></div>';

    // Add content below the image
    card.innerHTML +=
        '<div class="card__container height-container-receivers_amplifiers">' +
        '<div class="card__content">' +
        // Add title if available
        (title ? '<div class="card__bigtitle">' + title + '</div>' : '') +
        // Add details if available
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        // Add sections if available
        (sections ? iterateSections(sections) : '') +
        // Add links if available
        (links ? '<div class="card__links">' + (links ? links.map(enlace => enlace + ' ').join('') : '') + '</div>' : '') +
        '</div>' +
        '</div>';

    // Return the created card
    return card;
}

// Function to iterate through sections and generate HTML
function iterateSections(sections) {
    let div = "";
    sections.forEach(section => {
        div +=
            (section.title ? '<div class="card__title-section">' + section.title + '</div>' : '') +
            (section.links ? '<div class="card__links">' + (section.links ? section.links.map(enlace => enlace + ' ').join('') : '') + '</div>' : '');
    });
    return div;
}
