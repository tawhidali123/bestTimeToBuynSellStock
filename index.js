// Say you have an array for which the i'th element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// GAMEPLAN
// one pointer to determine day of buy, another to determine day of sale 
// return maximum profit

function buyAndSell (arr){

  let maxPairs = [] //pair of arr[i] arr [j]
  let max = 0
 
  for(i = 0; i < arr.length; i++){
    for(j = arr.length; j > i; j--){
      let profit = arr[j] - arr[i]
      if(profit > max){
        maxPairs[0] = arr[j]
        maxPairs[1] = arr[i]
        max = profit
      }
    }
  }

  if(max <= 0){
    return `there is no profit`
  } else {
    return `maximum profit ${max}, maximum Pairs: buy: ${maxPairs[1]}, sell: ${maxPairs[0]} `
  }

}

buyAndSell([7,1,5,3,6,4])
// buyAndSell([7,6,4,3,1])