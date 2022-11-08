function checkIsProperInput(v) {
  given_input = v;
  //console.log(given_input);
  //console.log(typeof given_input);
  empty = NaN;

  if (!given_input instanceof Array) {
    throw "The input is not valid please input, please use an array";
  }
  if (given_input == undefined || given_input.length < 0) {
    throw "The input is invalid, please use an array with proper elements";
  }
  if (typeof given_input == "string") {
    throw "The input is a string, please use an array with proper elements";
  }
  return (valid_input = given_input);
}

/*
  
  
  
  
  
  
  
  
  
  
  */
function maxElement(value) {
  given_value = value;
  checkIsProperInput(given_value);
  if (toString.call(value) !== "[object Array]") throw "Invalid input";
  answers_max = Math.max.apply(null, value);
  if (isNaN(answers_max) === true) {
    throw "Invalid_input";
  }
  return answers_max;
}

/*
  
  
  */

function mean(input) {
  checkIsProperInput(input);
  var sum = valid_input.reduce(function (a, b) {
    return a + b;
  }, 0);
  var length_of_array = valid_input.length;
  var average = sum / length_of_array;
  if (isNaN(average) === true) {
    throw "Invalid input, please use valid input";
  }
  if (typeof average == "number") {
    return average;
  }
}

function medianSquared(arr) {
  var given_arr = arr;
  checkIsProperInput(given_arr);

  given_arr = given_arr.sort(function (j, k) {
    return j - k;
  });

  //console.log(given_arr);
  var length = given_arr.length;

  if (length % 2 == 1) {
    var m1 = given_arr[length / 2 - 0.5];
    if (isNaN(m1) === true) {
      throw "Invalid input, please use valid input";
    }
    return m1 * m1;
  } else {
    var m2 = (given_arr[length / 2] + given_arr[length / 2 - 1]) / 2;
    if (isNaN(m2) === true) {
      throw "Invalid input, please use valid input";
    }
    return m2 * m2;
  }
}

function fill(end, values) {
  var make_array = [];
  e_ = end;
  j = value;
  for (var i = 0; i <= j; i++) {
    make_array.push(i);
  }
  return make_array;
}

let countRepeating = (arr) => {
  result = {};
  if (arr != null && arr instanceof Array) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in result) {
        result[arr[i]] = result[arr[i]] + 1;
      } else {
        result[arr[i]] = 1;
      }
    }
    return result;
  } else {
    throw "Invalid Input";
  }
};

let isEqual = (arrayOne, arrayTwo) => {
  isEqual = true;
  if (arrayOne instanceof Array && arrayTwo instanceof Array) {
    // console
    if (arrayOne.length == arrayTwo.length) {
      for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
          isEqual = false;
          break;
        }
      }
    } else {
      isEqual = false;
    }
    return isEqual;
  } else {
    throw "Invalid Input";
  }
};

module.exports = {
  mean,
  medianSquared,
  maxElement,
  fill,
  countRepeating,
  isEqual,
};
//console.log(maxElement([1, 2, 3]));
//console.log(medianSquared([]));
//console.log(checkIsProperInput(medianSquared("banana")));
//console.log(medianSquared(["guitar", -2, 3, "apple"]));
//console.log(checkIsProperInput(medianSquared()));
