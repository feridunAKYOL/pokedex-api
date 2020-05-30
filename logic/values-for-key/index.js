const isEqual = require('lodash').isEqual;

const valuesForKey = (pokeArray, key) => {
  let result = [];
  for (let arr_key of Object.entries(pokeArray)){
    if (arr_key[0] === key){
      let value = pokeArray[arr_key[1]];
      if ((!result.includes(value) && value !== undefined)) {
        result.push(value);
      }
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
