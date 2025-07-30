var mergeAlternately = function (word1, word2) {
    let define_max_len = (word1, word2) => {
      if (word1.length > word2.length) {
        return word1.length;  // Ensure you return the value
      } else {
        return word2.length;
      }
    };
  
    let max_len = define_max_len(word1, word2); // Now this will get the length correctly
    let mergeWord = "";
  
    for (let i = 0; i < max_len; i++) {
      if (word1[i]) {
        mergeWord += word1[i];
      }
      if (word2[i]) {
        mergeWord += word2[i];
      }
    }
  
    return mergeWord;
  };
  
  let word1 = "abc";
  let word2 = "bcdssa";
  
  console.log(mergeAlternately(word1, word2));  // Output: "abbccdssa"
  