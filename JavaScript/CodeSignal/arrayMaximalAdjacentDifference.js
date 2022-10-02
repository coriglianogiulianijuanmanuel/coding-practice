/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
*/

function solution(inputArray) {
  let maxDifference = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let difference1 = inputArray[i] - inputArray[i + 1];
    let difference2 = inputArray[i + 1] - inputArray[i];

    if (difference1 > maxDifference) maxDifference = difference1;
    if (difference2 > maxDifference) maxDifference = difference2;
  };

  return maxDifference;
}

console.log(solution([2, 4, 1, 0])); // 3
console.log(solution([10, 11, 13])) // 2

