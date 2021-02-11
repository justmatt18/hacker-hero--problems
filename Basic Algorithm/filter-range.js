//* Problem 17 - Filter Range

/*

Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
*/

/* Test Cases
  filterRange([1,3,5,7,10], 4, 8) to return [5,7]
  filterRange([1,3,5,7,10], -1, 4) to return [1,3]
  filterRange([2,4,3,5], 2, 6) to return [4,3,5]
  filterRange([2,4,3,5], 0, 4) to return [2,3]
  filterRange([6,2,-3,5,7], 3, 8) to return [6,5,7]
*/

//? Using For Loop
// const filterRange = (arr, min, max) => {
//   let filteredArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max && arr[i] > min) filteredArray.push(arr[i]);
//   }
//   // console.log(filteredArray);
//   return filteredArray;
// };

//? Using map function
const filterRange = (arr, min, max) => {
  let fitleredArr = [];
  arr.map((value) => {
    value > min && value < max && fitleredArr.push(value);
  });
  console.log(fitleredArr);
  return fitleredArr;
};

filterRange([1, 3, 5, 7, 10], 4, 8); // to return [5,7]
filterRange([1, 3, 5, 7, 10], -1, 4); // to return [1,3]
filterRange([2, 4, 3, 5], 2, 6); // to return [4,3,5]
filterRange([2, 4, 3, 5], 0, 4); // to return [2,3]
filterRange([6, 2, -3, 5, 7], 3, 8); // to return [6,5,7]
