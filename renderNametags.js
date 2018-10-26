
function renderNametags(nametags) {
    let name =''
    for(let i =0; i < nametags.length; i++){
        name += `
        <div style="text-align:center;background-color:grey>
        <h1 style="text-align:center;">Hello, my name is:</h1>
        <div style="background-color:black;">
            <h2 style="text-align:center; color:white">${nametags[i]}</h2>
        </div>
        </div>
        `
    }
    return name
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}