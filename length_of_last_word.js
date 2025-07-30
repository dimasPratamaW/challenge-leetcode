var lengthOfLastWord = function (s) {
  // 1. i think i can just make length as the base then
  // 2. using for loop with --
  // 3. if the loop found the space it will break and return the length of the word
  const length_input = s.length;
  var first_word = false;
  var last_word = "";
  for (let i = length_input-1; i >= 0; i--) {
    if (first_word === false) {
      if (s[i] !== " ") {
        last_word += s[i];
        first_word = true;
      }
    } 
    
    else {
      if (s[i] === " ") {
        break;
      }
      last_word += s[i];
    }
  }

  return last_word.length;
};

var lengthOfLastWord2 = function (s) {
//   so for this method because is obvious when the loop met the space it will just ignore it
// 1. i just using count to counting the word i met first time
// 2. using for loop with --
// 3. if the loop found the space it will break and return the length of the word
  const length_input = s.length;
  var count = 0
  for (let i = length_input-1; i >= 0; i--) {
    if (s[i]!== " "){
        count ++
    }
    else if(count >0){
        break
    }
  }

  return count;
};





console.log(lengthOfLastWord("addd   as"));
console.log(lengthOfLastWord2("addd   as"));