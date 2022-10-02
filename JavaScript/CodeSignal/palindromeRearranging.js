/*
Given a string, find out if its characters can be rearranged to form a palindrome.
*/

function solution(inputString) {
  let map = new Map();
  let oddCounter = 0;
  let evenCounter = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (!(map.has(inputString[i]))) {
      map.set(inputString[i], 1);
    } else {
      map.set(inputString[i], map.get(inputString[i]) + 1);
    }
  }

  for (let value of map.values()) {
    if (value % 2 === 0) evenCounter++;
    else oddCounter++;
  }

  return (evenCounter === map.size || (oddCounter === 1 && evenCounter === map.size - 1));
};

console.log(solution("aabb")); // true
console.log(solution("cbaabbaab")) // true

