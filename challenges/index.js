// longest word of a string
// Solution word
function longestWord(sen) {
  //   created filleted array
  const wordArr = sen.ToLowerCase().match(/[a-z0-9]+/g);

  //   to sort the array
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });
}
