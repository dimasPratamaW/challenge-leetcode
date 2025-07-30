var arraySign = function(nums) {
    var product = 1

    function signFunc(prod){
        if(prod > 0){
            return 1
        }
        if(prod < 0){
            return -1
        }
        if(prod === 0){
            return 0
        }
    }

    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 0){
            product = 0
            break
        }
        if(nums[i]>0){
            product =product * 1
        }
        
        if(nums[i]<0){
            product =product * -1
        }

    }


    return signFunc(product)
    
};


console.log(arraySign([1,2,-1]))