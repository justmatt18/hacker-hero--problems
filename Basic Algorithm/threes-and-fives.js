/*
Create threesFives(n) that adds values from 1 and n (inclusive) 
if that value is not divisible by 3 or 5. Return the final sum.

For example, threesFives(10) returns 22 as it only returns the sum of 1, 2, 4, 7, and 8. 
On that example, it skips 3, 6, 9 as those are divisible by 3. 
It also skips 5, and 10 as it's divisible by 5.
*/

let anyNum = 10; // any number for test
let sum = 0;
function threesFives(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) sum += i;
  }
  return sum;
}

// using arrow function

const threesFives = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) sum += i;
  }
  return sum;
};
