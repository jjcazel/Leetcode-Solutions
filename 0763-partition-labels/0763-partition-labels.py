class Solution:
  
  # O(n) time and O(1) space where n is the length of the input string
  def partitionLabels(self, s: str) -> List[int]:
    lastIndexes = {}

    for i, char in enumerate(s):
        lastIndexes[char] = i

    currSize = 0
    currLastIndex = 0
    output = []

    for i, char in enumerate(s):
      currSize += 1 
      currLastIndex = max(lastIndexes[char], currLastIndex)
      if i == currLastIndex:
        output.append(currSize)
        currSize = 0

    return output
