/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    var result = 0
    for(let i = low;i <= high;i++){
        if(i % 2 != 0){
            result += 1
        }
    }
    return result
};

var alt_countOdds = function(low, high) {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};



console.log(countOdds(1,100))