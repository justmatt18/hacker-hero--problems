//* Problem 15 - Extract-o-matic
/*
! TEST CASES
extractDigit(1824, 2) to return 8
extractDigit(1824,0) to return 4
extractDigit(1234.56,-1) to return 5
extractDigit(199.35, 0) to return 9
extractDigit(199.35, -1) to return 3
extractDigit(199.35, -2) to return 5
*/

//* whole number or decimal

function extractDigit(num, digitNum) {
  let extractedDigit = 0;
  if (num % 1 === 0) {
    // whole number
    let digits = num.toString().split("").map(Number).reverse();
    if (digits.length < digitNum) return extractedDigit;
    extractedDigit = digits[digitNum];
    console.log(extractedDigit);
    return extractedDigit;
  } else {
    // if it is decimal number
    // split decimal number
    let splitNumArray = num.toString().split(".");
    if (digitNum > -1) {
      // split number and decimal
      let num = splitNumArray[0];
      let digits = num.toString().split("").map(Number).reverse();
      if (digits.length < digitNum) return extractedDigit;
      extractedDigit = digits[digitNum];
      console.log(extractedDigit);
      return extractedDigit;
    } else {
      let num = splitNumArray[1];
      let digits = num.toString().split("").map(Number);
      let index = Math.abs(digitNum) - 1;
      extractedDigit = digits[index];
      console.log(extractedDigit);
      return extractedDigit;
    }
  }
}

// arrow function
const extractDigit = (num, digitNum) => {
  let extractedDigit = 0;
  //* check first if it is a whole number or a decimal number

  if (num % 1 === 0) {
    // split the number and store it to array
    // reverse the number to easily track the one,tens,hundreds etc.
    let digits = num.toString().split("").map(Number).reverse();
    // to check if the digitNUm is greater than the length of the array
    if (digits.length > digitNum) {
      extractedDigit = digits[digitNum];
      console.log(`Extracted digit`, extractedDigit);
      return extractedDigit;
    } else {
      console.log(`Digit Number should be lesser than the length of num`);
    }
  } else {
    // Therefore the number is a decimal number
    /* split the number by decimal point
      * Ex. 123.45
      Store to array -> [123, 45]
      ? Check if the digitNum is positive or negative
      ? if digitNum greater than -1
      * Access index 0 which is the whole number part; else,
      * access index 1 for decimal
    */
    let splitNumArray = num.toString().split(".");
    if (digitNum > -1) {
      let num = splitNumArray[0];
      let digits = num.toString().split("").map(Number).reverse();
      if (digits.length < digitNum) return extractedDigit;
      extractedDigit = digits[digitNum];
      console.log(`Extracted digit`, extractedDigit);
      return extractedDigit;
    } else {
      let num = splitNumArray[1];
      let digits = num.toString().split("").map(Number);
      let index = Math.abs(digitNum) - 1;
      extractedDigit = digits[index];
      console.log(`Extracted digit`, extractedDigit);
      return extractedDigit;
    }
  }
};

// PS (Disclaimer) -> There's a lot of way to solve this using Math.floor() and Math.ceil()

extractDigit(1824, 2); // to return 8
extractDigit(1824, 0); // to return 4
extractDigit(1234.56, -1); //to return 5
extractDigit(199.35, 0); // to return 9
extractDigit(199.35, -1); // to return 3
extractDigit(199.35, -2); // to return 5
