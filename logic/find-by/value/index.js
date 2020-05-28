// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {
 
  let pokes = pokeArray.filter (pokemon => {
    const myValues = Object.values(pokemon);
    for (let key of myValues) {
      if (String(key) === value) {
        return true;
      }
    }

  });
  if (pokes.length === 0){
    return null
  }
pokes = pokes.map(el =>({name:el.name , num: el.num}));
return pokes;
}
module.exports = value;
