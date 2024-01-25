// Function to create a card for type of speakers
function createTypeSpeakersCard({ title, subtitle = 'Applications', details, applications, imageUrl, links }) {
    var card = document.createElement('div');
    card.className = 'column-type-speakers-card';
    card.innerHTML += '<div class="image-speakers" style="background-image: url(' + imageUrl + ');"></div>';
    card.innerHTML +=
        '<div class="card__container height-container-speakers">' +
        '<div class="card__content">' +
        (title ? '<div class="card__title">' + title + '</div>' : '') +
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        (subtitle ? '<div class="card__subtitle">' + subtitle +
            (applications ? '<p class="card__details">Applications: ' + applications + '</p>' : '') +
            '</div>' : '') +
        (links ? '<div class="card__links">' + (links ? links.map(link => '<span style="padding-right: 20px; display: inline-block;">' + link + '</span>').join('') : '') + '</div>' : '')
    '</div>' +
        '</div>';
    return card;
}
