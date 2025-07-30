var largestPerimeter = function(nums) {
    nums = nums.sort((a,b)=>{return b-a});
    var result = 0
    
      for(let i = 0;i<nums.length-2;i++){
        // console.log(nums)
            // console.log(nums[i],nums[j],nums[k])
                let a = nums[i]
                let b = nums[i+1]
                let c = nums[i+2]    
                if(b+c>a){
                    if(result < a+b+c){
                        result = a+b+c
                    }
                }
      }

      return result

};

console.log(largestPerimeter([2,2,1]))