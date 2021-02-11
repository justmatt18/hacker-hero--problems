//* Problem 22 - Array: Remove Range

/* ! Objectives
Given array, and indices start and end, remove vals in that index range,
working in-place (hence shortening the array).
Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
*/

const removeRange = (arr, start, end) => {
  let filteredArray = [];
  for (let index = 0; index < arr.length; index++) {
    start > index || end < index ? filteredArray.push(arr[index]) : "";
  }
  console.log(filteredArray);
  return filteredArray;
};
// 20 30 40 50 60 70
// 0  1  2  3  4  5

//* Using Splice Method

const removeRange2 = (arr, start, end) => {
  arr.splice(start, end);
  console.log(arr);
  return arr;
};

//? Test Cases

removeRange([20, 30, 40, 50, 60, 70], 2, 4); //to return [20,30,70]

removeRange([20, 30, 40, 50, 60, 70], 1, 3); //to return [20,60,70]

removeRange([20, 30, 40, 50, 60, 70], 1, 4); //to return [20,70]

removeRange([1, 2, 3, 4, 5, 6], 2, 5); //to return [1,2]
