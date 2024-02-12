const pid = document.getElementById("pokemon-id");
const pname = document.getElementById("pokemon-name");
const ptypes = document.getElementById("types");
const pheight = document.getElementById("height");
const pweight = document.getElementById("weight");
const php = document.getElementById("hp");
const pattack = document.getElementById("attack");
const pdefense = document.getElementById("defense");
const pspecialAttack = document.getElementById("special-attack");
const pspecialDefense = document.getElementById("special-defense");
const pspeed = document.getElementById("speed");
const searchInput = document.getElementById("search-input");
const searchbutton = document.getElementById("search-button");
window.onload = () => {
  searchbutton.addEventListener("click", getpokemon);
};

const getpokemon = async () => {
  ptypes.innerHTML = "";
  try {
    const poke = searchInput.value.toLowerCase();
    const responce = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${poke}`
    );
    const data = await responce.json();
    console.log(data);
    pid.innerHTML = `${data.id}</br> <img id="sprite" src="${data.sprites.front_default}"></img>`;
    pname.innerHTML = `${data.name.toLowerCase()} `;
    pheight.innerHTML = `${data.height}`;
    pweight.innerHTML = `${data.weight}`;
    php.innerHTML = `${data.stats[0].base_stat}`;
    pattack.innerHTML = `${data.stats[1].base_stat}`;
    pdefense.innerHTML = `${data.stats[2].base_stat}`;
    pspecialAttack.innerHTML = `${data.stats[3].base_stat}`;
    pspecialDefense.innerHTML = `${data.stats[4].base_stat}`;
    pspeed.innerHTML = `${data.stats[5].base_stat}`;
    data.types.forEach(({ slot, type }, index) => {
      ptypes.innerHTML += `<div> ${type.name}<div/>`;
    });
  } catch (error) {
    alert("Pokémon not found");
  }
};
