/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
*/

let isValid = function(s) {
  while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
    s = s.replaceAll('()', '');
    s = s.replaceAll('{}', '');
    s = s.replaceAll('[]', '');
  }

  return (s === '' ? true : false);
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid('{()}'));

