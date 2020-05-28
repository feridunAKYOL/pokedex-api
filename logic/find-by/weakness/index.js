const weakness = (pokeArray, type) => {
  let pokes = pokeArray.filter (pokemon => {
    const weak =pokemon.weaknesses;
    return weak.includes(type)

  });
  if (pokes.length === 0){
    return null
  }
pokes = pokes.map(el =>({name:el.name , num: el.num}));
return pokes;
};

module.exports = weakness;
