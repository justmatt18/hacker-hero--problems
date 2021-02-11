//* Problem 21 - Array: Nth-to-Last

/*
! Obejctives
Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3),
 return 4. If the array is too short, return null.
*/

const nToLast = (arr, index) => {
  if (index > arr.length) return null;
  console.log(arr[arr.length - index]);
  return arr[arr.length - index];
};

//? Test cases:

nToLast([5, 2, 3, 6, 4, 9, 7], 3); //to return 4

nToLast([1, 2], 3); //to return null

nToLast([5, 2, 3, 6, 4, 9, 7], 4); //to return 6

nToLast([5, 2, 3, 6, 4, 9, 7], 5); //to return 3

nToLast([1, 2, 3, 5, 5, 7, 10], 1); //to return 10
