var repeatedSubstringPattern = function(s) {
    const len = s.length;
    
    for (let i = 1; i <= Math.floor(len / 2); i++) {
        if (len % i === 0) {
            const pattern = s.slice(0, i);
            console.log("pattern :",pattern)
            console.log("len/i :",len/i)
            console.log("pattern len/i :",pattern.repeat(len/i))
            if (pattern.repeat(len / i) === s) {
                return true;
            }
        }
    }

    return false;
};

repeatedSubstringPattern("abbabb")
