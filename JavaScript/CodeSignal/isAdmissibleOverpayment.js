/* 
After recently joining Instacart's beta testing developer group, you decide to experiment with their new API. You know that the API returns item-specific display-ready strings like 10.0% higher than in-store or 5.0% lower than in-store that inform users when the price of an item is different from the one in-store. But you want to extend this functionality by giving people a better sense of how much more they will be paying for their entire shopping cart.

Your app lets a user decide the total amount x they are willing to pay via Instacart over in-store prices. This you call their price sensitivity.

Your job is to determine whether a given customer will be willing to pay for the given items in their cart based on their stated price sensitivity x.
*/

function solution(prices, notes, x) {
  let overpay = 0;

  for (let i = 0; i < prices.length; i++) {
    if (notes[i].includes("higher")) {
      overpay += prices[i] - (100 * prices[i]) / (parseFloat(notes[i]) + 100);
    } else if (notes[i].includes("lower")) {
      overpay -= (100 * prices[i]) / (100 - parseFloat(notes[i])) - prices[i];
    }
  }

  if (overpay > x) return false;
  return true;
}

console.log(
  solution(
    [110, 95, 70],
    [
      "10.0% higher than in-store",
      "5.0% lower than in-store",
      "Same as in-store",
    ],
    5
  ) === true
);
console.log(
  solution(
    [48, 165],
    ["20.00% lower than in-store", "10.00% higher than in-store"],
    2
  ) === false
);
console.log(
  solution(
    [24.42, 24.42, 24.2424, 85.23],
    [
      "13.157% higher than in-store",
      "13.157% lower than in-store",
      "Same as in-store",
      "19.24% higher than in-store",
    ],
    24.24
  ) === true
);
console.log(solution([220], ["120.0000% higher than in-store"], 120) === true);
console.log(
  solution(
    [40, 40, 40, 40],
    [
      "10.0% higher than in-store",
      "10.0% lower than in-store",
      "10.0% higher than in-store",
      "10.0% lower than in-store",
    ],
    0
  ) === true
);
console.log(
  solution(
    [40, 40, 40, 40],
    [
      "0.001% higher than in-store",
      "0.0% lower than in-store",
      "0.0% higher than in-store",
      "0.0% lower than in-store",
    ],
    0
  ) === false
);
console.log(
  solution(
    [110, 110, 110, 110, 110, 110, 110, 110, 110, 160],
    [
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "10.0% higher than in-store",
      "60.0% higher than in-store",
    ],
    150
  ) === true
);
console.log(solution([20], ["100.0% higher than in-store"], 9) === false);
console.log(
  solution(
    [35000, 35000],
    ["35000.0% higher than in-store", "10000.0% lower than in-store"],
    150
  ) === false
);
console.log(
  solution(
    [20, 20],
    ["20.0% higher than in-store", "20.0% lower than in-store"],
    0
  ) === true
);
