const romanNumsToNums = function(roman){
  const romanKeys = {
  "I":1, 
  "V":5,
  "X":10,
  "L":50,
  "C":100,
  "D":500,
  "M":1000 
  };

  let arrOfChar = roman.split('');

  if (arrOfChar.length === 0){
      return "not a valid input";
    }

  // thank you Jacob for the guidance and help. 
  const mapOver = arrOfChar.map(char => romanKeys[char])
   
  if (mapOver.length === 1){
       return mapOver[0];
    }

  return mapOver.reduce( (accumulator,element,index,array) => {
    if (element >= array[index + 1] || !array[index + 1]){
      return accumulator += element 
    } else if ( element < array[index + 1]){
      return accumulator -= element
    }
  }, 0);
}

const rom = 'DCCC';
romanNumsToNums(rom);