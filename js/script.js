document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo para las tarjetas
    const speakerItems = [
        {
            title: 'Floor-standing',
            details: 'Floor-standing speakers, also known as tower speakers, offer high-performance sound and more bass compared to other speakers since they are designed with multiple speaker drivers. These speakers are more ideal for rooms with a sizable space that will help the speaker create a balanced sound throughout the room.  Floor-standing speakers are very versatile devices that come in various designs, aesthetics and speaker drivers. ',
            applications: 'Living rooms, home theaters, music rooms, gaming rooms ',
            imageUrl: './assets/1.jpeg',
            links: ['Shop', 'Floor-Standing', 'Speakers']
        },
        {
            title: 'Bookshelf',
            details: 'Bookshelf speakers are well-rounded devices that offer a proportional balance of reliable sound quality and performance, while being portable and affordable. These speakers are perfect for customers who want to elevate their sound for casual activities such as listening to music or watching movies. Bookshelf speakers are best suited for small to medium-sized rooms in a home. ',
            applications: 'Living rooms, home theaters, music rooms, gaming rooms, bedrooms',
            imageUrl: './assets/2.jpeg',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        },
        {
            title: 'Bookshelf',
            details: 'Bookshelf speakers are well-rounded devices that offer a proportional balance of reliable sound quality and performance, while being portable and affordable. These speakers are perfect for customers who want to elevate their sound for casual activities such as listening to music or watching movies. Bookshelf speakers are best suited for small to medium-sized rooms in a home. ',
            applications: 'Living rooms, home theaters, music rooms, gaming rooms, bedrooms',
            imageUrl: './assets/3.jpeg',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        },
        {
            title: 'Bookshelf',
            details: 'Bookshelf speakers are well-rounded devices that offer a proportional balance of reliable sound quality and performance, while being portable and affordable. These speakers are perfect for customers who want to elevate their sound for casual activities such as listening to music or watching movies. Bookshelf speakers are best suited for small to medium-sized rooms in a home. ',
            applications: 'Living rooms, home theaters, music rooms, gaming rooms, bedrooms',
            imageUrl: './assets/4.jpeg',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        },
        {
            title: 'Bookshelf',
            details: 'Bookshelf speakers are well-rounded devices that offer a proportional balance of reliable sound quality and performance, while being portable and affordable. These speakers are perfect for customers who want to elevate their sound for casual activities such as listening to music or watching movies. Bookshelf speakers are best suited for small to medium-sized rooms in a home. ',
            applications: 'Living rooms, home theaters, music rooms, gaming rooms, bedrooms',
            imageUrl: 'https://s3-alpha-sig.figma.com/img/db8f/1d7d/92112eb56a7e630e4fe7fe0ce97b1780?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zzsm9FLkYou3cr01p3fceuqHf2mMgHMwUQCk2LZXqZbuUdUgevoILhyD4k6KAyB4ZadLiEYDk4uKW6EKGMKJBwwRuCZTdNwf9yFNafB7AaY0TsSmnpdB9fsiAjw5GncFv6M-NM8ghHwnDr~YxKpM~dWWToLo0tWCBc-kjoZs8WFY1IkQ0I1dq4a1hqa0k6qZKa-nu61M0yshSjX0hYWMRbfkMcp0AEr3Se8FI0GqRcSpoW0cntUie-ibpQVNuNYg9F1glMOLBaqSQq4uW4W2qcjuePuUDA0etgpPSa9gnN1vwBAPOiWmmoBECR1EkUmYm8ekrfmgOTNX5YTBVBtShw__',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        },
        {
            title: 'Bookshelf',
            details: 'Bookshelf speakers are well-rounded devices that offer a proportional balance of reliable sound quality and performance, while being portable and affordable. These speakers are perfect for customers who want to elevate their sound for casual activities such as listening to music or watching movies. Bookshelf speakers are best suited for small to medium-sized rooms in a home. ',
            applications: 'Living rooms, home theaters, music rooms, gaming rooms, bedrooms',
            imageUrl: './assets/6.jpeg',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        },
        {
            title: 'Bookshelf',
            details: 'Bookshelf speakers are well-rounded devices that offer a proportional balance of reliable sound quality and performance, while being portable and affordable. These speakers are perfect for customers who want to elevate their sound for casual activities such as listening to music or watching movies. Bookshelf speakers are best suited for small to medium-sized rooms in a home. ',
            applications: 'Living rooms, home theaters, music rooms, gaming rooms, bedrooms',
            imageUrl: './assets/7.jpeg',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        }
        // Puedes agregar más datos según sea necesario
    ];

    const amplifierItems = [
        {
            title: 'Receivers ',
            details: 'Receivers play a crucial role in managing and processing audio and video signals in any sound system. Receivers feature multiple audio and video inputs and outputs that allow people to connect various devices to them. These devices also offer multiple video processing features to enhance the video quality, while providing a range of audio input options including HDMI, optical, coaxial, analog RCA and more.',
            imageUrl: './assets/8.jpeg',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        },
        {
            title: 'Amplifiers ',
            details: 'Amplifiers are designed to increase an audio or radio frequency signal. Amplifiers have a gain factor that represents how much they increase the input signal’s amplitude, which is expressed in decibels.  ',
            imageUrl: './assets/8.jpeg',
            links: ['Shop', 'Bookshelf', 'Speakers ']
        },
    ]

    const speakerSpecsItems = [
        {
            details: 'Frequency response ',
            imageUrl: './assets/8.jpeg',
        },
        {
            details: 'Ohms ',
            imageUrl: './assets/9.jpeg',
        },
        {
            details: 'Coverage angle',
            imageUrl: './assets/8.jpeg',
        },
        {
            details: 'Maximum Sound Pressure Level (SPL)',
            imageUrl: './assets/8.jpeg',
        },
    ]

    const speakerAccessoriesItems = [
        {
            title: 'Speaker accessories',
            details: 'Be sure you shop all the essential wire and cable you’ll need to install for your next installation. ',
            links: ['Shop Speaker Mounts', 'Shop Speaker Stands', 'Shop Speaker Stands',],
            imageUrl: './assets/8.jpeg',
        },
        {
            title: 'Speaker wire and cable',
            details: 'Pair your customers’ speakers with the essential accessories for a complete setup. From mounts to stands and speaker snaps, ADI has everything you need to get the job done. ',
            sections: [
                {
                    title: 'Residential audio cables',
                    links: ['Shop Commercial RCA Connectors', 'Shop Commercial XLR Connector'],
                },
                {
                    title: 'Commercial audio cables',
                    links: ['Shop Speaker Mounts', 'Shop Speaker Stands', 'Shop Speaker Stands',],
                },
            ],
            imageUrl: './assets/8.jpeg',
        }
    ]

    var speakersDiv = document.getElementById('speakers');
    speakerItems.forEach(function (item) {
        speakersDiv.appendChild(createCard(item));
    });


    var amplifiersDiv = document.getElementById('amplifiers');
    amplifierItems.forEach(function (item) {
        amplifiersDiv.appendChild(createCardWithSections(item));
    });


    var specsDiv = document.getElementById('specs');
    speakerSpecsItems.forEach(function (item) {
        specsDiv.appendChild(createSmallCard(item));
    });


    var accessoriesDiv = document.getElementById('accessories');
    speakerAccessoriesItems.forEach(function (item) {
        accessoriesDiv.appendChild(createCardWithSections(item));
    });
});
