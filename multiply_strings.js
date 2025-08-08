/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0"){
        return "0"
    }
    

    var result = new Array(num1.length+num2.length).fill(0)

    // actually u can use * 
    // the concept is u need to get the index u want to get
    // use shift to erase the leading zero in result array

    
    for(let i =num1.length - 1 ;i >= 0 ; i--){
        for(let j = num2.length - 1; j >= 0 ; j--){
            var index_1 = i + j
            var index_2 = i + j + 1
            
            let first_iteration = num1[i]*num2[j]

            let second_iteration = first_iteration + result[index_2];

            result[index_2] = second_iteration % 10;
            result[index_1] += Math.floor(second_iteration/10)

            console.log("i :",i,"|| j :",j)
            console.log(first_iteration);
            console.log(second_iteration)
            console.log(result[index_2])


        }
    }

    while(result[0]===0 && result.length > 0){
        result.shift()
    }

    result = result.join("")

    // console.log(typeof(result))
    return result
    
};

console.log(multiply("123","456"))