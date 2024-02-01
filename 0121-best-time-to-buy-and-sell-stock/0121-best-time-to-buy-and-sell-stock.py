#O(n) time and O(n) space
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        min_buy_amount = float("inf")

        for price in prices: 
            if price < min_buy_amount:
                min_buy_amount = price
            elif price - min_buy_amount > max_profit:
                max_profit = price - min_buy_amount

        return max_profit