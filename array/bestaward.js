/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let currentpay = 0
  let buy = false
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    if (!buy) {
      if (prices[i] < prices[i + 1]) {
        buy = true
        currentpay = prices[i]
        if (prices[i + 1] > prices[i + 2]) {
          profit += prices[i + 1] - currentpay
          buy = false
        } 
      }
    } else {
      if (i === prices.length -1) {
        profit += prices[i] - currentpay
      } else if(prices[i+1] > prices[i+2]) {
        profit += prices[i + 1] - currentpay
        buy = false
      }
    }
  }
  return profit
}

console.log(maxProfit([2,1,4,5,2,9,7]))