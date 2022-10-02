/*
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.
*/

function solution(inputString) {
  let dotCounter = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === ' ' || inputString[i].match(/^[a-zA-Z]+$/)) return false;
    if (inputString[i] === '.') dotCounter++;
  }

  if (dotCounter != 3) return false;

  let inputArray = inputString.split('.');

  for (let item of inputArray) {
    if (item === '' || item[0] === '0' && item[1] || item < 0 || item > 255) return false;
  }

  return true;
}

console.log(solution("a.255.255.255")) // false
console.log(solution("255.255.255")); // false
console.log(solution("172.16.254.1")); // true
console.log(solution("172.316.254.1")); // false
console.log(solution(".254.255.0")); // false
console.log(solution(" .254.255.0")); // false
console.log(solution("64.233.161.00")) // false

