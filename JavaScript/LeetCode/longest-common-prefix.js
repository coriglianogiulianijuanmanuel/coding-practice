/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

let longestCommonPrefix = function(strs) {
  let prefix = "";

  let minLength = strs[0].length;
  for (let item of strs) {
    if (item.length < minLength) minLength = item.length;
  }

  for (let i = 0; i < minLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return prefix;
    }

    prefix += strs[0][i];
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["aa", "ab"]));

