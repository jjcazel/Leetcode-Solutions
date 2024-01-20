class Solution:
    def isValid(self, s: str) -> bool:
        stack = [] # []

        for char in s:
            if char == "(" or char == "{" or char == "[":
                stack.append(char)
            elif len(stack) > 0:
                curr_paren = stack.pop()
                if curr_paren == "(" and char != ")":
                    return False
                elif curr_paren == "{" and char != "}":
                    return False
                elif curr_paren == "[" and char != "]":
                    return False
            elif char == "}" or char == ")" or char == "]" and len(stack) == 0:
                return False

        return len(stack) == 0

        '''
        I: "([{(})])"
        O: True

        [ "(", "[", "{", "(" ]
        '''