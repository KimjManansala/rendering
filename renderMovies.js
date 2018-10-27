function renderMovies(movies) {
    let rendering = '';

    for (let i = 0; i < movies.length; i++) {
        rendering += `
        <div class="movie-container">
            <img src= "${movies[i].poster}">
            <div class="movie-info">
                <div class="movie-title-info">
                    <h1>${movies[i].title}</h1>
                    <h6>${movies[i].year}</h6>
                </div>
                <div class="movie-rating">
                    <h1>IMDB:</h1>
                    <h6>${movies[i].imdbRating}</h6>
                </div>
                <div class="movie-rating">
                    <h1>Rotten Tomatoes:</h1>
                    <h6>${movies[i].rottenTomatoesRating}</h6>
                </div>
            </div>
    </div>
    `
        
    }
    console.log(rendering)
    return rendering;
}




function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [{
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}
