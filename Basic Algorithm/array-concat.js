//* Problem 18 - Array: Concat

//! Replicate Javascript's concat()

//* My easiest approach is using the spread operator :)
const arrayConcat = (arr1, arr2) => {
  let concatenatedArr = [...arr1, ...arr2];
  console.log(concatenatedArr);
  return concatenatedArr;
};

// ? Test Cases
arrayConcat([1, 2], [3, 4]); //to return [1,2,3,4]
arrayConcat([1, 2], [3, 4, 5]); //to return [1,2,3,4,5]
arrayConcat([1, 2, 3], [3, 4, 5, 6]); //to return [1,2,3,3,4,5,6]
arrayConcat([-1], [-5, 3]); // to return [-1,-5,3]
