//* Problem 13 - Clock Hand Angles

//* Test Cases:
// clockHandAngles(3600) to return [30,0,0]
// clockHandAngles(10800) to return [90,0,0]
// clockHandAngles(5000) to return [42,140,120]
// clockHandAngles(8000) to return [67,80,120]
// clockHandAngles(50000) to return [57,320,120]

//TODO: will refactor this code
const clockHandAngles = (seconds) => {
  // Enter code below
  let scaling = [30, 6, 6];
  let counts = [0, 0, 0];
  let denominations = [3600, 60, 1];
  let handAngles = [];
  for (let i = 0; i < 3; i++) {
    counts[i] = ((counts[3] / denominations[i]) * scaling[i]) % 360;
    counts[3] -= Math.floor(counts[i] / scaling[i]) * denominations[i];
  }
  handAngles[0] = Math.round(counts[0]);
  handAngles[1] = counts[1];
  handAngles[2] = counts[2];
  return handAngles;
};
