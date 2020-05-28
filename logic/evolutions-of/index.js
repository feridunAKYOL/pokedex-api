const evolutionOf = (pokeArray, name) => {
  result = [];
  const pokemon = pokeArray.find(p => p.name === name);
  if (!pokemon){
    return null;
  }
  
  if (Array.isArray(pokemon.prev_evolution)){
    result.push(...pokemon.prev_evolution)
  }
  result.push({name:pokemon.name , num:pokemon.num })
  
  if (Array.isArray(pokemon.next_evolution)){
    result.push(...pokemon.next_evolution)
  }
  
  return result;

};

module.exports = evolutionOf;


/*
  return an array with all evolutions of a pokemon, including itself:

    [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]

  if a pokemon does not exist in the pokeArray, return null

    null

  read the ./spec.js file & study the data samples for a better understanding
*/
