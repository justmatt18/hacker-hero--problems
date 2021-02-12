// * Problem 27 - Multiple Table

//? Objectives
/*
Create a function that prints a multiplication table such as follows:

multiTable(2,2) should print

1 2

2 4

multiTable(3,3) should print

1 2 3

2 4 6

3 6 9

multiTable(4,4) should print

1 2 3 4

2 4 6 8

3 6 9 12

4 8 12 16

multiTable(2,4) should print

1 2

2 4

3 6

4 8

For this challenge, it could print/log all of these numbers in a single row or as many rows as you want.  As long as it displays the numbers in the right sequence, it will pass the test cases.

*/

const mutilpleTable = (x, y) => {
  for (let i = 1; i <= y; i++) {
    for (let j = 1; j <= x; j++) {
      let value = j * i;
      console.log(value);
    }
  }
};
mutilpleTable(5, 8);
// ? Test Cases:
/*
multiTable(2,2) to log 1 2 2 4
multiTable(3,3) to log 1 2 3 2 4 6 3 6 9
multiTable(2,4) to log 1 2 2 4 3 6 4 8
multiTable(5,8) to log 1 2 3 4 5 2 4 6 8 10 3 6 9 12 15 4 8 12 16 20 5 10 15 20 25 6 12 18 24 30 7 14 21 28 35 8 16 24 32 40
*/
