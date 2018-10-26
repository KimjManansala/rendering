//Renders the albums


function renderAlbums(albumsAbstraction) {
    let renderString = '' //Create the string to return
    for (let i = 0; i < albumsAbstraction.length; i++) {
        //addes the Artist
        renderString += `
        <h1> ${albumsAbstraction[i].artist}</h1>    
        <hr>
        `
        //Creates each album
        for (let j = 0; j < albumsAbstraction[i].albums.length; j++) {
            renderString += `
            <img href = ${albumsAbstraction[i].albums[j].albumCover}>
            <h3>${albumsAbstraction[i].albums[j].title}</h3>
            `
            //Creates songs and time
            for (let k = 0; k < albumsAbstraction[i].albums[j].songs.length; k++) {
                renderString += `
                <div class ="tracksContainer">
                    <div>${albumsAbstraction[i].albums[j].songs[k].title}</div>
                    <div>${albumsAbstraction[i].albums[j].songs[k].length}</div>
                </div>
                `
            }
        }
    }
    return renderString

}










function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [{
            artist: "Creed",
            albums: [{
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [{
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [{
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        },


    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}