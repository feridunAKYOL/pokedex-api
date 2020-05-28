// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
  result = [];
  const pokemon = pokeArray.filter(p => p[key] == value)
  if(pokemon.length === 0){
    return null;
  }else{
    for (el of pokemon){
    result.push({name:el.name , num:el.num})
  }
  return result;
  }
  

};


module.exports = keyValue;
