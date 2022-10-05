/* 
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
*/

function solution(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    let charCode = inputString.codePointAt(i);
    if (charCode === 122) result += "a";
    else result += String.fromCodePoint(charCode + 1);
  }

  return result;
}

console.log(solution("crazy")); // "dsbaz"
console.log(solution("z")); // "a"
console.log(solution("aaaabbbccd")); // "bbbbcccdde"
console.log(solution("fuzzy")); // "gvaaz"
console.log(solution("codesignal")); // "dpeftjhobm"
