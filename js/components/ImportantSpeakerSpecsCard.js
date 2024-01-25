// Function to create a card for important speaker specifications
function createImportantSpeakerSpectsCard({ details, imageUrl }) {
    var card = document.createElement('div');
    card.className = 'column-specs-cards';
    card.innerHTML += '<div class="image_specs" style="background-image: url(' + imageUrl + ');"></div>';
    card.innerHTML +=
        '<div class="card__container height-container-speakers">' +
        '<div class="card__content div-row w-100">' +
        (details ? '<p class="card__specs-details text-center w-100">' + details + '</p>' : '') +
        '</div>' +
        '</div>';
    return card;
}
