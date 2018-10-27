
function renderRestaurants(restaurants) {
    let rendered = ''
    rendered += `<div style = "display: flex; flex-direction: row">`
    for(let i = 0; i < restaurants.length; i++){
        rendered += `
            <div>
                <h1>${restaurants[i].name}</h1>
                <h2>${restaurants[i].type}</h2>
            `
                for(let j = 0; j < restaurants[i].priceRating; j++){
                    rendered += `<div class='dollarRating' style = "display: inLine;"> $ </div>`
                }
        rendered += `</div>
        </div>
        `
    }
    console.log(rendered)
    return rendered
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}