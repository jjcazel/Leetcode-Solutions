#O(n) time and O(n) space
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0 # 2
        min_buy_amount = float('Inf') # 1

        for i in range(len(prices)): # i = 2
            if prices[i] < min_buy_amount:
                min_buy_amount = prices[i]
            elif prices[i] - min_buy_amount > max_profit:
                max_profit = prices[i] - min_buy_amount

        return max_profit