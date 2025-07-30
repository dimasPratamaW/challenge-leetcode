var findTheDifference = function(s, t) {
    var result = Array.from(t) ;

    for (let i = 0; i <s.length;i++){
        index_occur = result.indexOf(s[i])
        result.splice(index_occur,1)
    }

    return result
};


console.log(findTheDifference("sds","sdsssi"))