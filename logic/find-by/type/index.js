const type = (pokeArray, type) => {
  const result =[];
  const pokemons = pokeArray.filter(poke => poke.type[0] === type);
  for (pokemon of pokemons){
    result.push({name:pokemon.name , num: pokemon.num})
  }
return result;
};

module.exports = type;
