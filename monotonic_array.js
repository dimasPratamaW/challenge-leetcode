/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  const length_nums = nums.length;
  var initial_state = 0;
  var got_crement = false;
  for (let i = 1; i < length_nums; i++) {
    let pattern = Math.sign(nums[i-1] - nums[i]);
    if ((got_crement === false)) {
      if (pattern === 0) {
        continue;
      } else {
        initial_state = pattern;
        got_crement = true;
      }
    } else {
      if (pattern === 0) {
        continue;
      }

      else if (initial_state != pattern) {
        console.log("result",false)
        return false;
      }
    }
  }
  console.log("result",true)
  return true;
};

console.log(isMonotonic([1, 1, 3, 3, 3]));
