/* 
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.
*/

function solution(deposit, rate, threshold) {
  let balance = deposit;
  let i = 0;

  while(balance < threshold) {
    balance += (balance * rate) / 100;
    i++;
  }

  return i;
}

console.log(solution(100, 20, 170)); // 3
console.log(solution(100, 1, 101)); // 1
console.log(solution(1, 100, 64)); // 6
console.log(solution(20, 20, 50)); // 6
console.log(solution(50, 25, 100)); // 4
