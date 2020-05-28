const isEqual = require('lodash').isEqual;

const valuesForKey = (pokeArray, key) => {
  let result = [];
  for (let pokemon of pokeArray){
    if ((!result.includes(pokemon[key]) && pokemon[key] !== undefined)){
      result.push(pokemon[key]);
    }
    
  }
  console.log('feridun',result);
  
  return result;
};

module.exports = valuesForKey;

/* https://lodash.com/docs/4.17.15#isEqual

  isEqual is a function to compare objects and arrays.

  it will come in handy on this challenge

*/
