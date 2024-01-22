class Solution:
    def isValid(self, s: str) -> bool:
        stack = [] # []
        matches = {'(' : ')', "{" : "}", "[": "]"}

        for bracket in s:
            if bracket == "(" or bracket == "{" or bracket == "[":
                stack.append(matches[bracket])
            else:
                curr_bracket = stack.pop()
                if curr_bracket == bracket:
                    continue
                else: 
                    return False

        return len(stack) == 0

        '''
        I: "([{(})])"
        O: True

        [ "(", "[", "{", "(" ]
        '''