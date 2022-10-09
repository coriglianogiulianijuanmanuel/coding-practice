/* 
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!
*/

function solution(inputArray) {}

console.log(solution(["aba", "bbb", "bab"]) === false);
console.log(solution(["ab", "bb", "aa"]) === true);
console.log(solution(["q", "q"]) === false);
console.log(solution(["zzzzab", "zzzzbb", "zzzzaa"]) === true);
console.log(solution(["ab", "ad", "ef", "eg"]) === false);
console.log(solution(["abc", "bef", "bcc", "bec", "bbc", "bdc"]) === true);
console.log(solution(["abc", "abx", "axx", "abc"]) === false);
console.log(solution(["abc", "abx", "axx", "abx", "abc"]) === true);
console.log(solution(["f", "g", "a", "h"]) === true);
console.log(solution(["ff", "gf", "af", "ar", "hf"]) === true);
console.log(solution(["a", "b", "c"]) === true);
