//* Problem 26 - Bubble Sort

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
};

//? Test Cases

bubbleSort([5, 3, 1, 2]); // to return [1,2,3,5]

bubbleSort([5, 4, 3, 2, 1]); // to return [1,2,3,4,5]

bubbleSort([5, 3, 1, -1, -3]); // to return [-3,-1,1,3,5]

bubbleSort([5, 3, 1]); // to return [1,3,5]
