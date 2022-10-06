/* 
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
*/

function solution(n, firstNumber) {
  let result = n / 2 + firstNumber;

  if (result >= n) return result - n;
  return result;
}

console.log(solution(10, 2)); // 7
console.log(solution(10, 7)); // 2
console.log(solution(4, 1)); // 3
console.log(solution(6, 3)); // 0
console.log(solution(18, 6)); // 15
console.log(solution(12, 10)); // 4
console.log(solution(18, 5)); // 14
