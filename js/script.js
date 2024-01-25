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
            imageUrl: './assets/5.jpeg',
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

    const serviceItems = [
        {
            title: 'Outdoor Speakers Features ',
            details: 'Learn about the different types of all-weather speakers and what to consider when installing them in backyards and outdoor spaces.',
            imageUrl: './assets/1.jpeg',
            subtitle: null,
            links: ['Read More ']
        },
        {
            title: 'Multi-Room Audio Systems ',
            details: 'Customers are increasingly interested in having multi-room audio in their homes. Read about what multi-room audio is and how these systems work. ',
            imageUrl: './assets/2.jpeg',
            subtitle: null,
            links: ['Read More ']
        },
        {
            title: 'Herman Integration Services ',
            details: 'Herman Integration Services  Subcontract your AV labor to take on more projects and grow your business with Herman Integration Services. Herman’s technicians and support staff and install your next projector project, provide pre- and post-sales support, program devices and troubleshoot. Learn More',
            imageUrl: './assets/3.jpeg',
            subtitle: null,
            links: ['Read More ']

        },
        {
            title: 'Project Registration ',
            details: 'Register your project with ADI for free and offer your customers the best price for top-performing products and solutions. Get in touch with our Project Registration team today by filling out a short form. ',
            imageUrl: './assets/4.jpeg',
            subtitle: null,
            links: ['Read More ']
        }
    ];

    var speakersDiv = document.getElementById('speakers');
    speakerItems.forEach(function (item) {
        speakersDiv.appendChild(createTypeSpeakersCard(item));
    });


    var amplifiersDiv = document.getElementById('amplifiers');
    amplifierItems.forEach(function (item) {
        amplifiersDiv.appendChild(createReceiversAndAmplifiersCard(item));
    });


    var specsDiv = document.getElementById('specs');
    speakerSpecsItems.forEach(function (item) {
        specsDiv.appendChild(createImportantSpeakerSpectsCard(item));
    });


    var accessoriesDiv = document.getElementById('accessories');
    speakerAccessoriesItems.forEach(function (item) {
        accessoriesDiv.appendChild(createReceiversAndAmplifiersCard(item));
    });

    var servicesDiv = document.getElementById('services');
    serviceItems.forEach(function (item, index) {
        let card = createServicesAndSupportCard(item);
        if (index % 2 === 0) {
            card.classList.add('grey');
        } else {
            card.classList.add('white');
        }
        servicesDiv.appendChild(card);
    });
});
