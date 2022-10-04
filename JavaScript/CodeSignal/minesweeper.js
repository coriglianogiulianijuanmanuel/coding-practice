/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
*/

function solution(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {

    let row = [];

    let iPrev = i - 1;
    let iNext = i + 1;

    for (let j = 0; j < matrix[i].length; j++) {

      let minesCount = 0;

      let jPrev = j - 1;
      let jNext = j + 1;

      if (i !== 0 && j !== 0 && matrix[iPrev][jPrev]) minesCount++;
      if (i !== 0 && matrix[iPrev][j]) minesCount++;
      if (i !== 0 && j !== matrix[i].length - 1 && matrix[iPrev][jNext]) minesCount++;
      if (j !== 0 && matrix[i][jPrev]) minesCount++;
      if (j !== matrix[i].length - 1 && matrix[i][jNext]) minesCount++;
      if (i !== matrix.length - 1 && j !== 0 && matrix[iNext][jPrev]) minesCount++;
      if (i !== matrix.length - 1 && matrix[iNext][j]) minesCount++;
      if (i !== matrix.length - 1 && j !== matrix[i].length - 1 && matrix[iNext][jNext]) minesCount++;

      row.push(minesCount);
    }

    result.push(row);
  }

  return result;
}

console.log(solution([[true, false, false], [false, true, false], [false, false, false]])); // [[1,2,1], [2,1,1], [1,1,1]]
console.log(solution([[false, false, false], [false, false, false]])); // [[0,0,0], [0,0,0]]
console.log(solution([[true, false, false, true], [false, false, true, false], [true, true, false, true]])); // [[0,2,2,1], [3,4,3,3], [1,2,3,1]]
console.log(solution([[true, true, true], [true, true, true], [true, true, true]])); // [[3,5,3], [5,8,5], [3,5,3]]
console.log(solution([[false, true, true, false], [true, true, false, true], [false, false, true, false]])); // [[3,3,3,2], [2,4,5,2], [2,3,2,2]]
console.log(solution([[true, false], [true, false], [false, true], [false, false], [false, false]])); // [[1,2], [2,3], [2,1], [1,1], [0,0]]

