//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

//
//   @param {ListNode} l1
//   @param {ListNode} l2
//   @return {ListNode}
//  /

// 1. the first val in the linked list is the last number in that value
// 2. so the linked list {val:3 next{val:2 next:Null}} so this value is 23
// 3. i think we need
var addTwoNumbers = function (l1, l2) {
  var my_node = new ListNode(0);
  var dummy = my_node;

  var new_val1 = new Array(0),
    new_val2 = new Array(0);
  var temp_result = new Array(0);

  while (l1 !== null) {
    new_val1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    new_val2.push(l2.val);
    l2 = l2.next;
  }

  // console.log(new_val1, new_val2);

  var extra = 0;

  while (new_val1.length > 0 || new_val2.length > 0 || extra !== 0) {
    // checking if one of the value is undefined
    var val1 = new_val1.pop()?? 0;
    var val2 = new_val2.pop()?? 0;

    let sum = val1 + val2 + extra;

    extra = Math.floor(sum / 10);

    temp_result.unshift(sum % 10);
  }
  // console.log(temp_result)
  return arrayToList(temp_result);
};


// var l1 = arrayToList([9,9]);
// var l2 = arrayToList([9,9,9]);
// console.log(addTwoNumbers(l1, l2));
