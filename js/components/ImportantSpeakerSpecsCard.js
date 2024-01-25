// Function to create a card for important speaker specifications
function createImportantSpeakerSpectsCard({ details, imageUrl }) {
    // Create a new div element for the card
    var card = document.createElement('div');
    // Add the 'flex-specs-cards' class to the card
    card.className = 'flex-specs-cards';

    // Add an image at the top that spans the full width
    card.innerHTML += '<div class="image_specs" style="background-image: url(' + imageUrl + ');"></div>';

    // Add content below the image
    card.innerHTML +=
        '<div class="card__container height-container-speakers">' +
        '<div class="card__content div-row">' +
        // Add details if available
        (details ? '<p class="card__details text-center w-100">' + details + '</p>' : '') +
        '</div>' +
        '</div>';

    // Return the created card
    return card;
}
