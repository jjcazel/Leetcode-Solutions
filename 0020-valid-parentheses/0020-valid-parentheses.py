class Solution:
    def isValid(self, s: str) -> bool:
        stack = [] # []
        matches = {
            '(': ')', 
            '{': '}', 
            '[': ']' 
        } 

        for bracket in s:
            if bracket in matches:
                stack.append(bracket)
            elif len(stack) == 0 or bracket != matches[stack.pop()]:
                return False

        return len(stack) == 0

        '''
        I: "([{(})])"
        O: True

        [ "(", "[", "{", "(" ]
        '''