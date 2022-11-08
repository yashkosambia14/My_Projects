// Tests

const my_imoprt = require("./arrayUtils");
const my_import_2 = require("./stringUtils");
const my_import_3 = require("./objUtils");

try {
  // Should Pass
  const meanone = mean([2, 3, 4]);
  console.log("Mean Passed successfully");
} catch (e) {
  console.log("mean failed test case");
}

try {
  // Should Pass
  const meantwo = mean([1, 2, 3]);
  console.log("Mean Passed successfully");
} catch (e) {
  console.log("mean failed test case");
}

try {
  const medianSqu = my_imoprt.medianSquared([4, 1, 2]);
  console.log("Median passed");
} catch (e) {
  console.log("Mean Failed");
}

try {
  const medianSqu2 = my_imoprt.medianSquared("banana");
  console.log("Median passed");
} catch (e) {
  console.log("Median Failed");
}

try {
  const maxElement1 = my_imoprt.maxElement([1, 2, 3, 4, 5]);
  console.log("Median passed");
} catch (e) {
  console.log("Maxelement failed");
}

try {
  const maxElement1 = my_imoprt.maxElement([1, 2, 3, 4, 6, 7, 8]);
  console.log("Median passed");
} catch (e) {
  console.log("Maxelement failed");
}

try {
  const fill = my_imoprt.fill(1, 8);
  console.log("fill passed");
} catch (e) {
  console.log("fill failed");
}

try {
  const fill2 = my_imoprt.fill(1, 2);
  console.log("passed");
} catch (e) {
  console.log("fill failed");
}

try {
  const count_repeat = my_imoprt.countRepeating([
    1, 2, 2, 2, 3, 3, 3, 4, 4, 2, 3, 4, 6, 7, 8,
  ]);
  console.log("count passed");
} catch (e) {
  console.log(" failed");
}

try {
  const count_repeat2 = my_imoprt.countRepeating([
    1, 2, 2, 2, 3, 3, 3, 4, 4, 2, 3, 4, 6, 7, 7, 8, 9, 9, 9, 9, 8,
  ]);
  console.log("count passed");
} catch (e) {
  console.log(" failed");
}

try {
  const isEqual1 = my_imoprt.isEqual([1, 2, 3], [3, 2, 1]);
  console.log("isEqual  passed");
} catch (e) {
  console.log(" isEqualfailed");
}

try {
  const isEqual2 = my_imoprt.isEqual(
    ["Z", "R", "B", "C", "A"],
    ["R", "B", "C", "A", "Z"]
  );
  console.log("isEqual  passed");
} catch (e) {
  console.log(" isEqualfailed");
}

try {
  const camelCase1 = my_import_2.camelCase(
    "Hello, How are you? I hope you are well"
  );
  console.log(" passed");
} catch (e) {
  console.log(" failed");
}

try {
  const camelCase2 = my_import_2.camelCase("Daddy");
  console.log("  passed");
} catch (e) {
  console.log(" failed");
}

try {
  const replace1 = my_import_2.replaceChar("Daddy");
  console.log(" passed");
} catch (e) {
  console.log(" failed");
}

try {
  const replace2 = my_import_2.replaceChar("helloworld");
  console.log("passed");
} catch (e) {
  console.log(" failed");
}

try {
  const mash1 = my_import_2.mashUp("helloworld");
  console.log("passed");
} catch (e) {
  console.log(" failed");
}

try {
  const mash2 = my_import_2.mashUp("Patrick", "Hill");
  console.log("passed");
} catch (e) {
  console.log(" failed");
}

try {
  const make1 = my_import_3.makeArrays([first, second, third]);
  // [ ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]);
  console.log("passed");
} catch (e) {
  console.log(" failed");
}

try {
  const make2 = my_import_3.makeArrays([first, second, third]);
  // [ ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]);
  console.log("passed");
} catch (e) {
  console.log(" failed");
}

try {
  const make4 = my_import_3.isDeepEqual([first, second, third]);
  // [ ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]);
  console.log("passed");
} catch (e) {
  console.log(" failed");
}
try {
  const make5 = my_import_3.isDeepEqual([first, second, third]);
  // [ ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]);
  console.log("passed");
} catch (e) {
  console.log(" failed");
}
try {
  const make1 = my_import_3.computeObject([first, second, third]);
  // [ ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]);
  console.log("passed");
} catch (e) {
  console.log(" failed");
}
try {
  const make1 = my_import_3.computeObject({ a: 3, b: 7, c: 5 }, (n) => n * 2);
  // [ ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]);
  console.log("passed");
} catch (e) {
  console.log(" failed");
}
