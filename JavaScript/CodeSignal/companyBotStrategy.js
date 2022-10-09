/* 
Each CodeSignal Company Bot is trained by engineers from that specific company. The way it works is that a representative group of engineers from each company is identified as trainers before the bot goes live, and they CodeFight against the bot during a training phase. The current training algorithm is definitely more complex, but let's assume it works this way:

For each trainer we collect two pieces of information per task [answerTime, correctness], where correctness is 1 if the answer was correct, -1 if the answer was wrong, and 0 if no answer was given. In this case, the bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly. Given all of the training information for a specific task, calculate the bot's answer time.
*/

function solution(trainingData) {
  let answerTimes = 0;
  let correctnessCount = 0;

  for (let i = 0; i < trainingData.length; i++) {
    if (trainingData[i][1] === 1) {
      answerTimes += trainingData[i][0];
      correctnessCount++;
    }
  }

  if (correctnessCount === 0) return 0;
  return answerTimes / correctnessCount;
}

console.log(
  solution([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ]) === 4.5
);
console.log(
  solution([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ]) === 5
);
console.log(
  solution([
    [4, -1],
    [0, 0],
    [5, -1],
  ]) === 0
);
console.log(
  solution([
    [3, 1],
    [6, 1],
    [4, -1],
    [5, 1],
  ]) === 4.666666666666667
);
