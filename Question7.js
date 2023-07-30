// Q7. Use Array.reduce() method to reverse the following given array
// const arr = [1, 2, 3, 4, 5]
// To reverse the given array using the Array.reduce() method, you can start with an empty array and iteratively prepend the elements from the original array to the new array in reverse order. Here's how you can do it:
// const arr = [1, 2, 3, 4, 5];
// const reversedArray = arr.reduce((accumulator, currentValue) => {
//   return [currentValue, ...accumulator];
// }, []);
// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
// In the reduce() method, the callback function takes two arguments: accumulator and currentValue. The accumulator starts as an empty array [], and for each iteration, we prepend the currentValue to the accumulator using the spread operator .... This way, the elements are accumulated in reverse order, resulting in the reversed array.

