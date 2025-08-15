// Linked list node definition (same as in LeetCode)
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
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



/**
 * @param {ListNode} l1 
 * @param {ListNode} l2
 * @return {ListNode}
 */
// console.log(l1)
var addTwoNumbers = function(l1, l2) {
    var first = new Array();
    var second = new Array();

    while(l1){// convert first linked list into array
      first.push(l1.val)
      l1= l1.next
    }

    while(l2){
      second.push(l2.val)
      l2 = l2.next 
    }
    
    if(first.length === 1 && first[0] === 0){
      return arrayToList(second)
    }
    else if(second.length === 1 && second[0] === 0){
      return arrayToList(first)
    }
    else if(first.length > second.length){
      second = second.concat(new Array(first.length-second.length).fill(0))
    }
    else if(second.length > first.length){
      first = first.concat(new Array(second.length-first.length).fill(0))
    }

    first = first.reverse().join("")
    second = second.reverse().join("")
    result = BigInt(first) + BigInt(second)

  return arrayToList(result.toString().split("").reverse().map(Number))    
    
};

var l1 = arrayToList([2,4,3])
var l2 = arrayToList([2,4,3]) 
// console.log(addTwoNumbers(l1,l2))


var alternate_add_linked_list = function (l1,l2){
  var new_node = new ListNode(0);
  var result = new_node;
  var extra = 0;

  while(l1 !== null || l2!== null||extra !== 0){
    let val1 = l1? l1.val : 0;
    let val2 = l2? l2.val : 0;


    let sum = val1 + val2 +extra ;

    extra = Math.floor(sum/10);

    result.next = new ListNode(sum%10);
    result = result.next; 


    if(l1){// this step with go to next node if the value isn't null
      l1 = l1.next
    }
    if(l2){
      l2 = l2.next
    }

  }

  return new_node.next

}


console.log(alternate_add_linked_list(l1,l2))