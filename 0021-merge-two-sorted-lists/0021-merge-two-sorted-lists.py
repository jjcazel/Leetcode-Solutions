# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        merged_head = dummy
        while list1 and list2: # merged_head = {val: 1, next: {val: 3, next: {...}}}
            if list1.val <= list2.val:
                merged_head.next = list1
                list1 = list1.next
            else:
                merged_head.next = list2
                list2 = list2.next

            merged_head = merged_head.next
           
        if list1:
            merged_head.next = list1
        if list2:
            merged_head.next = list2

        return dummy.next