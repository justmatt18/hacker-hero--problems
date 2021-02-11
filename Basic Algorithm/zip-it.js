//* Problem 24 - Zip It

//? Objectives
/* Create a standalone function that accepts two arrays and combines
their values sequentially into a new array, at alternating indices
starting with first array. Extra values from either array should be
included afterward. Given [1,2] and [10,20,30,40], return new array
*/
/*
1 ,2
10 20 30 40


1 2 3 4

5 6

1 5 2 6
*/

const zipIt = (arr1, arr2) => {
  let length = Math.max(arr1.length, arr2.length);
  let result = [];
  for (let i = 0; i < length; i++) {
    // check if index reached the last element of array 1
    if (i > arr1.length - 1) {
      //  push only the arr2 vlaue
      result.push(arr2[i]);
      // check if index reached the last element of array 2
    } else if (i > arr2.length - 1) {
      // push only the arr1 value
      result.push(arr1[i]);
    } else {
      result.push(arr1[i]);
      result.push(arr2[i]);
    }
  }
  console.log(result);
  return result;
};

//? Test Cases
zipIt([1, 2], [10, 20, 30, 40]); //to return [1,10,2,20,30,40]
zipIt([1, 2, 3, 4], [10, 20]); //to return [1,10,2,20,3,4]
zipIt([1, 2, 3, 4], [10, 20, 30, 40]); //to return [1,10,2,20,3,30,4,40]
zipIt([1], [10, 20]); //to return [1,10,20]
zipIt([1, 2, 3], [10]); //to return [1,10,2,3]
