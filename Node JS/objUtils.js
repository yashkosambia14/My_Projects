// Objects

function makeArrays(arr) {
  if (arr === undefined || arr === null) {
    throw "Invalid input please check";
  }
  if (!Array.isArray(arr)) {
    throw "Invalid input please check";
  }
  if (!arr.length) {
    throw "Invalid input please check";
  }
  if (arr.length === 1) {
    throw "Invalid input please check";
  }

  const arr_n = [];
  arr.forEach((obj) => {
    if (typeof obj !== "object" || Array.isArray(obj)) {
      throw "Invalid input please check";
    }
    const objKeys = Object.keys(obj);
    if (!objKeys.length) {
      throw "Invalid input please check";
    }
    objKeys.forEach((key) => {
      arr_n.push([key, obj[key]]);
    });
  });

  return arr_n;
}
//const first = { x: 2, y: 3 };
//const second = { a: 70, x: 4, z: 5 };
//const third = { x: 0, y: 9, q: 10 };

//console.log(makeArrays(first, second, third));

let flag = 0;
function isDeepEqual(obj1, obj2) {
  if (!flag) {
    if (!obj1 || !obj2) throw Error("Invalid data");
    if (Array.isArray(obj1) || Array.isArray(obj2)) throw Error("Invalid data");
    if (typeof obj1 === "string" || typeof obj2 === "string")
      throw Error("Invalid data");
  }

  flag = 1;

  if (obj1 === obj2) return true;

  if (
    typeof obj1 != "object" ||
    typeof obj2 != "object" ||
    obj1 == null ||
    obj2 == null
  )
    return false;

  let keysA = Object.keys(obj1),
    keysB = Object.keys(obj2);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    if (typeof obj1[key] === "function" || typeof obj2[key] === "function") {
      if (obj1[key].toString() != obj2[key].toString()) return false;
    } else {
      if (!isDeepEqual(obj1[key], obj2[key])) return false;
    }
  }
  return true;
}

function computeObject(obj, func) {
  // object validation
  if (typeof obj !== "object") {
    throw "Invalid input please check";
  }
  // function validation
  if (typeof func !== "function") {
    throw "Invalid input please check";
  }

  let newObj;
  if (Array.isArray(obj)) {
    newObj = obj.map((val) => {
      // number validation
      if (typeof val !== "number") {
        throw "Invalid input please check";
      }
      return func(val);
    });
  } else {
    newObj = {};
    const objKeys = Object.keys(obj);
    objKeys.forEach((key) => {
      const val = obj[key];
      // number validation
      if (typeof val !== "number") {
        throw "Invalid input please check";
      }
      newObj[key] = func(val);
    });
  }

  return newObj;
}

//console.log(computeObject({ a: 3, b: 7, c: 5 }, (n) => n * 2));

module.exports = {
  makeArrays,
  isDeepEqual,
  computeObject,
};
