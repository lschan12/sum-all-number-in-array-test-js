
const sumItems = function(array) {
  // Sum all the numbers in the array
  let result = 0;
  array.forEach((x) => {
    if (Array.isArray(x)) {
      result += sumItems(x);
    } else {
      result += x;
    }
  });
  return result;
};

console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
console.log(sumItems([[[[[[[1]]]]]]]));

module.exports = sumItems;