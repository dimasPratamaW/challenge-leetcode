var romanToInt = function(s) { 
  const dictionary = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  const length_value = s.length
  var output = 0
  for(let i = 0;i<length_value;i++){
    if(dictionary[s[i+1]]>dictionary[s[i]]){
      output -= dictionary[s[i]]
    }  
    else{
    output += dictionary[s[i]]
    }
  }

  return output

};

console.log(romanToInt("CMXII"))