//* Problem 16 - Array: Reverse
//! Avoid using array built-in functions

/* Test Cases:
  reverse([1,3,5]) to return [5,3,1]
  reverse([-1, 3, -5]) to return [-5,3,-1]
  reverse([1, 2, 3, 4, 5]) to return [5,4,3,2,1]
  reverse([2, 10, 13, 15]) to return [15,13,10,2]
*/

const reverse = (arr) => {
  let reverseArr = [];
  while (arr.length) {
    reverseArr.push(arr.pop());
  }
  //* console.log(reverseArr);
  return reverseArr;
};

let arr = [1, 2, 3, 4, 5];
reverse(arr);
