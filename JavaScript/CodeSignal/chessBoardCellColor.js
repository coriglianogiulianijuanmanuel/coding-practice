/* 
Given two cells on the standard chess board, determine whether they have the same color or not.
*/

function solution(cell1, cell2) {
  let cell1LetterCode = cell1.codePointAt(0);
  let cell2LetterCode = cell2.codePointAt(0);
  let codeDiffEven;

  if (cell1LetterCode > cell2LetterCode) {
    codeDiffEven = (cell1LetterCode - cell2LetterCode) % 2 === 0;
  } else {
    codeDiffEven = (cell2LetterCode - cell1LetterCode) % 2 === 0;
  }

  let cell1NumberEven = +cell1[1] % 2 === 0;
  let cell2NumberEven = +cell2[1] % 2 === 0;

  return (
    (codeDiffEven && cell1NumberEven === cell2NumberEven) ||
    (!codeDiffEven && cell1NumberEven !== cell2NumberEven)
  );
}

console.log(solution("A1", "C3")); // true
console.log(solution("A1", "H3")); // false
console.log(solution("A1", "A2")); // false
console.log(solution("A1", "B2")); // true
console.log(solution("B3", "H8")); // false
