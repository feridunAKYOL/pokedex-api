const typeStats = (pokeArray, type) => {
  let typeCount = 0 ;
  let weaknessCount = 0;
  let pokemons = pokeArray.filter(poke => poke.weaknesses.includes(type) || poke.type.includes(type));
  for (pokemon of pokemons){
    if (pokemon.weaknesses.includes(type)){
      weaknessCount++
    }
    if (pokemon.type.includes(type)){
      typeCount++
    }
  }
  return ({typeCount:typeCount, typeName: type , weaknessCount:weaknessCount});
};

module.exports = typeStats;
