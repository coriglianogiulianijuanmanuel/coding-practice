/* 
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
*/

function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((element) => {
    if (element === elemToReplace) return substitutionElem;
    return element;
  });
}

console.log(solution([1, 2, 1], 1, 3)); // [3, 2, 3]
console.log(solution([1, 2, 3, 4, 5], 3, 0)); // [1, 2, 0, 4, 5]
console.log(solution([1, 1, 1], 1, 10)); // [10, 10, 10]
