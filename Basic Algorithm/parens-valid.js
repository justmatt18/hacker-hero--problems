//* Problem 25 - Parens Valid

//? Objectives
/*
Create a function that, given an input string str,
returns a boolean whether parentheses in str are valid.
Valid sets of parentheses always open before they close,
for example. For "Y(3(p)p(3)r)s", return true.
Given "N(0(p)3", return false: not every parenthesis is closed.
Given "N(0)t )0(k", return false, because the underlined ")"
is premature: there is nothing open for it to close.
*/

const parensValid = (str) => {
  let arrayOfString = str.split("");
  let stack = [];
  arrayOfString.forEach((value, index) => {
    let char = stack[stack.length - 1];
    if (value == "(") {
      stack.push(value);
    } else if (char == "(" && value == ")") {
      stack.pop();
    } else return false;
  });
  let isValid = stack.length ? false : true;
  console.log(isValid);
  return isValid;
};

//? Test Cases
parensValid("Y(3(p)p(3)r)s"); //to return true
parensValid("N(0)t )0(k"); //to return false
parensValid("N(0)t (0(k))"); //to return true
parensValid("(N(0)t (0(k))"); //to return false
parensValid("()(N(0)t (0(k)))"); //to return true

//! Reference: https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2
