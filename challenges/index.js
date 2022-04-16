// longest word of a string
// Solution word
function longestWord(sen) {
  //   created filleted array
  const wordArr = sen.ToLowerCase().match(/[a-z0-9]+/g);

  //   to sort the array
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });

  //   if multiple words put in an array
  const longestWordArr = sorted.filter(function (word) {
    return word.length === sorted[0].length;
  });
}
