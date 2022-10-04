/* 
Check if all digits of the given integer are even.
*/

function solution(n) {
  nString = n.toString();

  for (let digit of nString) {
    if (+digit % 2 !== 0) return false;
  }

  return true;
}

console.log(solution(248622)); // true
console.log(solution(642386)); // false
console.log(solution(248842)); // true
console.log(solution(1)); // false
