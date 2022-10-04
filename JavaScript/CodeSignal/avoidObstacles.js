/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.
*/

function solution(inputArray) {
  let position = 0;
  let jumpLength = 1;
  let maxObstacle = Math.max(...inputArray);

  while (true) {
    if (position > maxObstacle) return jumpLength;
    position = position + jumpLength;
    if (inputArray.includes(position)) {
      position = 0;
      jumpLength++;
    }
  }
}

console.log(solution([5, 3, 6, 7, 9])); // 4
console.log(solution([2, 3])); // 4
console.log(solution([1, 4, 10, 6, 2])); // 7
console.log(solution([1000, 999])); // 6
console.log(solution([19, 32, 11, 23])); // 3
console.log(solution([5, 8, 9, 13, 14])); // 6
