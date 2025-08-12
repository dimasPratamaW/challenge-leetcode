// Linked list node definition (same as in LeetCode)
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// Helper to convert array → linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}


// Example linked lists
let l1 = arrayToList([1, 2, 4]);
// let l2 = arrayToList([1, 3, 4]);


var reverseList = function(head) {
    var temp_array = []

    while(head){
        temp_array.unshift(head.val)
        head = head.next
    }

    var result = arrayToList(temp_array)

    return result

};

console.log(reverseList(l1));
console.log(new ListNode(5,2))