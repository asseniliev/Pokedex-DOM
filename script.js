// Insert your code here
// Insert your code here
let pokemonCurrentNumber = 0;
let startOfCycle = 0;
let endOfCycle = 0;

function completeHTML(data) {
    const name = data.name[0].toUpperCase() + data.name.substring(1);
    const imageSrc = data.sprites.front_default;
    const pokemonType = data.types[0].type.name;

    document.querySelector('#pokemonContainer').innerHTML += `
        <div class="pokemon ${pokemonType}">
            <div class="imgContainer">
                <img src="${imageSrc}" alt="${name}" />
            </div>
            <div class="info">
                <h3 class="name">${name}</h3>
                <span class="type">Type: <span>${pokemonType}</span></span>
            </div>
        </div>
    `;
}


function getPokemons() {
    startOfCycle = pokemonCurrentNumber + 1;
    endOfCycle = pokemonCurrentNumber + 15;
    for (let i = pokemonCurrentNumber + 1; i <= endOfCycle; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url).then(response => response.json())
            .then(data => { completeHTML(data) });
    }
    pokemonCurrentNumber = endOfCycle;
}

getPokemons();
document.querySelector('#next').addEventListener('click', getPokemons);