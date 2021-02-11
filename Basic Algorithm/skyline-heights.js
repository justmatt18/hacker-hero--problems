//* Problem 19 - Skyline Heights
/*
Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say
 you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings:
 first is actually out of view below street level, behind it is second at 7
 stories high, third is 3 stories high (hidden behind the 7-story). You are
 situated at street level. Return array containing heights of buildings you can
 see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As
 always with challenges, do not use built-in array functions such as unshift().
*/

const heights = (arr) => {
  let tallestBldg = 0;
  let bldgs = [];
  arr.map((value, index) => {
    if (tallestBldg < value) {
      tallestBldg = value;
      bldgs.push(value);
    }
  });
  // console.log(bldgs);
  return bldgs;
};

//? Test Cases

heights([-1, 1, 1, 7, 3]); // to return [1,7]
heights([0, 4]); // to return [4]
heights([-1, 1, 1, 7, 3, 5, 9]); // to return [1,7,9]
heights([-1, 1, 1, 7, 3, 5, 9, -3, 3, 15]); // to return [1,7,9,15]
