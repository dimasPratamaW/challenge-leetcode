var plusOne = function(digits) {
    var new_number = digits.join("");
    var convert_number = BigInt(new_number) + 1n; // Fix here: use new_number and add `n` to 1
    var new_string = convert_number.toString();
    var result = new_string.split("");

    console.log(new_number)
    console.log(convert_number)
    console.log(typeof convert_number)

    console.log(new_string)
    console.log(typeof new_string)
    console.log(result)
    
    return result.map(Number)
};

console.log(plusOne([1,1,2]))
