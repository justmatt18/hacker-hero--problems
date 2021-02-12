// * Problem 29 - Two Dimensional Array

/*
? OBjectives


Create a function twoDimensional(row, column) that returns a two dimensional array
containing bunch of zeros but where the outer values are filled with ones.
For example twoDimensional(5,5) should return the following array:

[

[ 1, 1, 1, 1, 1 ],

[ 1, 0, 0, 0, 1 ],

[ 1, 0, 0, 0, 1 ],

[ 1, 0, 0, 0, 1 ],

[ 1, 1, 1, 1, 1 ]

]

Assume that both row and column are greater than 2.

*/

/*
? pseudo-code
1. check if rows is only 2
2. if True -> push 1 to all
3. if False ->
3.1 push 1 if row index is equal to 1st and last row
4. iF column index = first and last -> push 1
4.1 Else push 0
*/

//TODO: refactor solution
const twoDimensional = (row, column) => {
  let array = [];
  for (let i = 0; i < row; i++) {
    array.push([]);
    for (let j = 0; j < column; j++) {
      if (row <= 2) {
        array[i].push(1);
      } else if (i == 0 || i == row - 1) {
        array[i].push(1);
      } else if (j == 0 || j == column - 1) {
        array[i].push(1);
      } else array[i].push(0);
    }
  }
  console.table(array);
  return array;
};

twoDimensional(8, 8);

/*
? Test Cases
twoDimensional(2,5) to return [
  [1,1,1,1,1],
  [1,1,1,1,1]
]
twoDimensional(5,5) to return [
  [1,1,1,1,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,1,1,1,1]
]
twoDimensional(8,8) to return [
  [1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1]]

*/
