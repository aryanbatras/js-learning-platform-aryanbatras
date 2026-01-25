// Test 1: Basic merge
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const result = mergeTwoLists(l1, l2);
console.log('Merged list:', result);