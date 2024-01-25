function createCardWithSections({ title, sections, details, imageUrl, links }) {
    var card = document.createElement('div');
    card.className = 'card-with-sections';

    // Imagen en la parte superior que abarca todo el ancho
    card.innerHTML += '<div class="card__image-with-sections" style="background-image: url(' + imageUrl + ');"></div>';

    // Contenido debajo de la imagen
    card.innerHTML +=
        '<div class="card__container">' +
        '<div class="card__content">' +
        (title ? '<div class="card__bigtitle">' + title + '</div>' : '') + // Verificar si bigTitle está presente
        (details ? '<p class="card__details">' + details + '</p>' : '') +
        (sections ? iterateSections(sections) : '') +
        (links ? '<div class="card__links">' + (links ? links.map(enlace => enlace + ' ').join('') : '') + '</div>' : '') + // Verificar si links está presente
        '</div>' +
        '</div>';
    return card;
}


function iterateSections(sections) {
    let div = ""
    sections.forEach(section => {
        div += (section.title ? '<div class="card__title-section">' + section.title + '</div>' : '') +
            (section.links ? '<div class="card__links">' + (section.links ? section.links.map(enlace => enlace + ' ').join('') : '') + '</div>' : '')
    });
    return div
}