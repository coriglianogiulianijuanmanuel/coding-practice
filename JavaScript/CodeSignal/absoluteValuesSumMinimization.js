/* 
Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

(where abs denotes the absolute value)

If there are several possible answers, output the smallest one.
*/

function solution(a) {
  let lowestValue;
  let closestElement;

  for (let i = 0; i < a.length; i++) {
    let sum = 0;

    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[j] - a[i]);
    }

    if (i === 0 || lowestValue > sum) {
      lowestValue = sum;
      closestElement = a[i];
    }
  }

  return closestElement;
}

console.log(solution([2, 4, 7])); // 4
console.log(solution([2, 3])); // 2
console.log(solution([1, 1, 3, 4])); // 1
console.log(solution([23])); // 23
console.log(
  solution([
    -10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0,
    0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ])
); // 15
console.log(solution([-4, -1])); // -4
console.log(solution([0, 7, 9])); // 7
console.log(
  solution([
    -1000000, -10000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000,
    100000, 1000000,
  ])
); // 0
