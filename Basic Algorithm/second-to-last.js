//* Problem 20 - Arry: Second-to-Last Element

/*
Return the second-to-last element of an array.
Given [42,true,4,"Kate",7], return "Kate".
If array is too short, return null.
*/

const secondToLast = (arr) => {
  if (arr.length < 2) return null;
  return arr[arr.length - 2];
};

//? Test Cases

secondToLast([42, true, 4, "Kate", 7]); //to return Kate

secondToLast([42, true, 4, "Kate", 7, 9]); //to return 7

secondToLast([42, true, 4, "Kate", 7, 9, "dojo", "awesome"]); //to return dojo

secondToLast([1]); //to return null
