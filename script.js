const url = "https://pokeapi.com/api/v2/pokemon";
const card = document.getElementById('card');
const btn = document.getElementById('btn');
const typeColor = {

}

let getPokeData = () => {
    let id = Math.floor(Math.random*150)+1;
    const finalUrl = url + id;
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCArd(data);
        });
}

let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
}

const themeColor = typeColor[data.types[0].type.name];
console.log(themeColor);
card.innerHTML = `
    <p class="hp">
        <span>HP</span>
        ${hp}
    </p>
    <img src=${imgSrc} />
    <h2 class="poke-name">${pokeName}</h2>
    <div class="types">
           
    </div>
    `