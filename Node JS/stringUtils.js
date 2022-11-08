function camelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function replaceChar(str, searchChar, replaceChar) {
  let substrings = str.split(searchChar);
  return substrings.join(replaceChar);
}

console.log(replaceChar("da$$y"));

function mashUp(string1, string2, char) {
  if (string1.length > string2.length)
    string2 = string2.padEnd(string1.length, char);
  if (string2.length > string1.length)
    string1 = string1.padEnd(string2.length, char);

  var a = string1.split("").filter(Boolean);

  var b = string2.split("");

  var mergedString = "";

  for (var i = 0; i < a.length || i < b.length; i++) {
    if (i < a.length) mergedString += a[i];
    if (i < b.length) mergedString += b[i];
  }

  return mergedString;
}
//console.log(mashUp("patrick", "hill"));

module.exports = {
  camelCase,
  replaceChar,
  mashUp,
};
