// 11. Check the below given code, if there are any issues, fix them and explain the output
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.evens.push(num);
//   } else {
//     acc.odds.push(num);
//   }
//   return acc;
// });
// console.log(result);
// The given code has a couple of issues. The reduce() method is being used to categorize the numbers into even and odd, but the initial value for the accumulator is not provided. Additionally, the accumulator is being accessed as acc.evens and acc.odds, but it is not initialized as an object with those properties. Let's fix these issues and explain the output:
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.evens.push(num);
//   } else {
//     acc.odds.push(num);
//   }
//   return acc;
// }, { evens: [], odds: [] }); // Initialize the accumulator as an object with 'evens' and 'odds' properties
// console.log(result);
// After fixing the code, the reduce() method will iterate through the numbers array, and for each number, it will check if it is even or odd and push it into the corresponding array in the accumulator object.
// The result will be an object with two properties: evens and odds. Each property will hold an array containing the respective even and odd numbers from the original numbers array.
// For the given numbers array [1, 2, 3, 4, 5], the output will be:
// {
//   evens: [2, 4],
//   odds: [1, 3, 5]
// }
// The even numbers [2, 4] are grouped under the evens property, and the odd numbers [1, 3, 5] are grouped under the odds property in the result object.


