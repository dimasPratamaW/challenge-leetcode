var lengthAfterTransformations = function(s, t) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ab"];

    let word = s.split("");

    for (let step = 0; step < t; step++) {
        let newWord = [];

        for (let i = 0; i < word.length; i++) {
            let current = word[i];

            if (current === "ab") {
                // Replace 'ab' with 'c' and 'd'
                newWord.push("c", "d");
            } else {
                let idx = alphabet.indexOf(current);
                if (idx !== -1) {
                    let nextChar = alphabet[idx + 1] || current; // stay same if last
                    newWord.push(nextChar);
                } else {
                    // Invalid character — keep as is
                    newWord.push(current);
                }
            }
        }

        word = newWord;
        console.log(`After step ${step + 1}:`, word.join(""));
    }

    return word.join("");
};

// Example
console.log("Final Result:", lengthAfterTransformations("abcyy", 6));
