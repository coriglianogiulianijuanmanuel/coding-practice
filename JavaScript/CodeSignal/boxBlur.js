/*
Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.
*/

function solution(image) {
  let result = [];

  for (let i = 1; i < image.length; i++) {

    let centers = [];

    if (i === image.length - 1) continue;

    let iPrev = i - 1;
    let iNext = i + 1;

    for (let j = 1; j < image[i].length; j++) {

      if (j === image[i].length - 1) continue;

      let jPrev = j - 1;
      let jNext = j + 1;

      centers.push(Math.floor((image[iPrev][jPrev] + image[iPrev][j] + image[iPrev][jNext] + image[i][jPrev] + image[i][j] + image[i][jNext] + image[iNext][jPrev] + image[iNext][j] + image[iNext][jNext]) / 9));
    }

    result.push(centers);
  }

  return result;
}

console.log(solution([[1, 1, 1], [1, 7, 1], [1, 1, 1]])); // [[1]]
console.log(solution([[7, 4, 0, 1], [5, 6, 2, 2], [6, 10, 7, 8], [1, 4, 2, 0]])); // [[5, 4], [4, 4]]

