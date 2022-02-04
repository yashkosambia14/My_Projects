/* 

Javascript Practice Project

*/

// FIRST FUNCTION - TAKES INPUT AS ARRAY
// RETURNS SUM OF SQUARES OF ARRAY - IN 2 STEPS USING SIMPLE APPROCH OF SQUARING AND THEN TAKING THE SUM
const questionOne = function questionOne(arr) {
  if (!arr) {
    return null;
  } else {
    var squared_array = arr.map((x) => x ** 2);
    //console.log(squared_array);
    let sum_of_squared_array = squared_array.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum_of_squared_array;
  }
};

// SECOND FUNCTION - TAKES INPUT AS NUMBER
// USING THE RECURSIVE APPROCH Fn-1 + Fn-2
const questionTwo = function questionTwo(num) {
  if (num == 0) {
    return num;
  } else if (num == 1) {
    return num;
  } else {
    return questionTwo(num - 1) + questionTwo(num - 2);
  }
};

// FUNCTION 3 - TAKES INPUT AS STRING
// RETURNS THE NUMBER OF VOWELS FOUND IN A GIVEN TEXT
// .match() - avoids bugs with case of alphabet
const questionThree = function questionThree(text) {
  given_str = text;
  if (!given_str) {
    return null;
  } else {
    number_of_vowels = text.match(/[aeiou]/gi).length;
    return number_of_vowels;
  }
};

// FUNCTION 4 - TAKES INPUT AS NUMBER
// RETURNS FACTORIAL OF A NUMBER
const questionFour = function questionFour(num) {
  var number_given = num;
  if (!number_given) {
    return null;
  } else if (number_given == -1) {
    return NaN;
  } else {
    var counter = 1,
      j;
    for (j = 2; j <= number_given; j++) counter *= j;
    return counter;
  }
};

module.exports = {
  firstName: "YASH",
  lastName: "KOSAMBIA",
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};
