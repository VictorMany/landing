function createAccessoriesCard({ title, sections, details, imageUrl, links }) {
    var card = document.createElement('div');
    card.className = 'column-receivers_amplifiers_cards';

    card.innerHTML += '<div class="image_receivers_amplifiers" style="background-image: url(' + imageUrl + ');"></div>';
    card.innerHTML +=
        '<div class="card__container height-container-accessories">' +
        '<div class="card__content">' +
        (title ? '<div class="card__title-accesories">' + title + '</div>' : '') +
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        // Add sections if available
        (sections ? iterateSections(sections) : '') +
        // Add links if available
        (links ? '<div class="card__links">' + (links ? links.map(link => '<span style="padding-right: 20px; display: inline-block;">' + link + '</span>').join('') : '') + '</div>' : '')
    '</div>' +
        '</div>';

    return card;
}

// Function to iterate through sections and generate HTML
function iterateSections(sections) {
    let div = "";
    sections.forEach(section => {
        div +=
            (section.title ? '<div class="card__title-section">' + section.title + '</div>' : '') +
            (section.links ? '<div class="card__links">' + (section.links ? section.links.map(link => '<span style="padding-right: 20px; display: inline-block;">' + link + '</span>').join('') : '') + '</div>' : '')

    });
    return div;
}
