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
let l2 = arrayToList([1, 3, 4]);

// Your function (just printing for now)
var mergeTwoLists = function (list1, list2) {
  let new_node = new ListNode(-1); // dummy head
  let result = new_node;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      result.next = list2;
      list2 = list2.next;
    } else {
      result.next = list1;
      list1 = list1.next;
    }
    result = result.next; // move pointer
  }

  // Attach the remaining nodes
  if (list1) result.next = list1;
  if (list2) result.next = list2;

  return new_node.next; // skip dummy head
};


var prevList= function(list1){
  while(list1){
  list1 = list1.next
  console.log(list1.next)
  }
}


console.log(mergeTwoLists(l1, l2));
prevList(l1);
