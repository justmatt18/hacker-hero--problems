//* Problem 23 - Credit Card Validation

/*
? Objectives
The Luhn formula is sometimes used to validate credit card numbers. Create the
 function isCreditCardValid(digitArr) that accepts an digitArr of digits on the
  card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:


1) Set aside the last digit; do not include it in these calculations (until step 5);


2) Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;


3) If any results are larger than 9, subtract 9 from them;


4) Add all numbers (not just our odds) together;


5) Now add the last digit back in – the sum should be a multiple of 10.


For example, when given digit digitArr [5,2,2,8,2],
after step 1) it becomes [5,2,2,8], then after
step 2) it is [5,4,2,16]. Post step 3),
we have [5,4,2,7], then following 4) it becomes 18.
After step 5) our value is 20, so ultimately we return true.
If the final digit were any non-multiple of 10, we would instead
return false.

*/

//TODO: Need to refactor
const isCreditCardValid = (digitArr) => {
  // #1
  let lastDigit = digitArr.pop();
  console.log(`last digt ${lastDigit}`);
  // #2
  for (let index = 0; index < digitArr.length; index += 2) {
    digitArr[digitArr.length - 1 - index] *= 2;
    console.log(digitArr);
  }
  // #3
  digitArr.map((value, index) => {
    value > 9 && (digitArr[index] -= 9);
  });
  console.log(`Subtracted Values: ${digitArr}`);

  // #4
  let sum = 0;
  digitArr.map((value) => (sum += value));
  console.log(sum);

  // #5
  sum += lastDigit;
  console.log(`new sum ${sum}`);

  // #6
  let isValid = false;
  let num = sum % 10;
  console.log(num);
  num === 0 && (isValid = true);
  console.log(isValid);
};

//? Test Cases
// isCreditCardValid([5, 2, 2, 8, 2]); //to return true
//isCreditCardValid([5, 2, 3, 8, 2]); //to return false
//isCreditCardValid([4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]); //to return true
//isCreditCardValid([4, 0, 1, 2, 8, 8, 8, 2, 5, 6, 8, 8, 1, 8, 9, 1]); // to return false
