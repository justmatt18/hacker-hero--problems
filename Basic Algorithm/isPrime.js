// * Problem 14 - IsPrime

/*
  ! Test CASES
  isPrime(3) to return true
  isPrime(4) to return false
  isPrime(13) to return true
  isPrime(65) to return false
  isPrime(17) to return true
*/

//* begginer friendly solution
function isPrime(num) {
  // Enter code below
  let isPrime = false;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    isPrime = true;
  }

  return isPrime;
}

//* arrow function =>
const isPrime = (num) => {
  let isPrimeNum = false;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    num % i === 0 && (count += 1);
  }
  count === 2 && (isPrimeNum = !isPrimeNum);

  return isPrimeNum;
};
