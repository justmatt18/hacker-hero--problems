// * Problem 28 - Two Dimensional Array

// ? Objectives
/*
Create a function that returns a two dimensional array containing bunch
 of zeros. For example twoDimensional(2,5) should return a following
 array:

[

[ 0, 0, 0, 0, 0],

[ 0, 0, 0, 0, 0 ]

]

One way to visualize this two dimensional array is think of above as a 2
row, 5 column matrix.

You could also write above array to be as follows: [ [0,0,0,0,0], [0,0,0,0,0] ].
Whenever you're dealing with two dimensional arrays, be extra cautious on every single character.
A simple typo or forgetting to add a comma or a square bracket can ruin the whole program.
*/

const twoDimensional = (column, row) => {
  let array = [];
  for (let i = 0; i < row; i++) {
    array.push([]);
    for (let j = 0; j < column; j++) {
      array[i].push(0);
    }
  }
  console.log(array);
  return array;
};

twoDimensional(3, 4);
/*
? Test Cases
twoDimensional(2,5) to return [[0,0,0,0,0],[0,0,0,0,0]]
twoDimensional(3,4) to return [[0,0,0,0],[0,0,0,0],[0,0,0,0]]
twoDimensional(1,5) to return [[0,0,0,0,0]]
*/
