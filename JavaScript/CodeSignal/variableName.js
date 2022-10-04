/* 
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.
*/

function solution(name) {
  if (isFinite(name[0])) return false;
  let nameReplaced = name.replaceAll(/[A-Za-z0-9_]/g, "");
  if (nameReplaced !== "") return false;
  return true;
}

console.log(solution("var_1__Int")); // true
console.log(solution("qq-q")); // false
console.log(solution("2w2")); // false
console.log(solution(" variable")); // false
console.log(solution("va[riable0")); // false
console.log(solution("variable0")); // true
console.log(solution("a")); // true
console.log(solution("_Aas_23")); // true
console.log(solution("a a_2")); // false
console.log(solution("0ss")); // false
