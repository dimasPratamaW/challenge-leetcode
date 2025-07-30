
var isAnagram = function(s, t) {

    var status = false
    // 0. check the length of the word if its more or less than the compare word, it becames false as default
    // 1.1 make the list of unique letter got in s
    // 1.2 make a array for the key and the value got stored
    // 2. determine all the letters as the key to array
    // 3. count every letter from the source
    // 4. compare the number to another word if one letter less the anagram will not work

    if (s.length != t.length){
        return status
    }
    
    var key_stored = [];

    for (let i = 0; i < s.length; i++) {
        let found = key_stored.find(obj => obj.letter === s[i]);
        if (found) {
            found.total_s += 1;
        } else {
            key_stored.push({ letter: s[i], total_s: 1, total_t:0, total_diff:0 });
        }
    }

    // for(let i = 0;i<key_stored.length;i++){
    //     filter_s = array_of_s.filter(key_stored[i].letter)
    // }
    for (let i = 0; i < s.length; i++) {
        let found = key_stored.find(obj => obj.letter === t[i]);
        if (found) {
            found.total_t += 1;
        }
    }

    
    for (let i = 0; i < key_stored.length; i++) {
        key_stored[i].total_diff = key_stored[i].total_s-key_stored[i].total_t 
    }

    if(key_stored.total_diff != 0){
        return status
    }



    console.log(key_stored)

    return status = true

};

// faster method -----------------------
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;

//     const count = {};

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         count[char] = (count[char] || 0) + 1;
//     }

//     for (let i = 0; i < t.length; i++) {
//         const char = t[i];
//         if (!count[char]) {
//             return false;
//         }
//         count[char] -= 1;
//     }

//     return true;
// };





isAnagram("adddbc","addscb")