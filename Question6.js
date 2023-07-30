// // Q6. What is callback hell? Explain different ways to solve callback hell with examples each.
// Callback hell, also known as "pyramid of doom" or "callback spaghetti," is a term used to describe a situation in asynchronous programming where multiple nested callbacks make the code difficult to read, understand, and maintain. It occurs when multiple asynchronous operations are dependent on each other, leading to deeply nested callback functions, which can quickly become a mess, making the code hard to follow.
// In JavaScript, callback hell might look like this:
// asyncOperation1(function (result1) {
//   asyncOperation2(result1, function (result2) {
//     asyncOperation3(result2, function (result3) {
//       // More nested callbacks...
//     });
//   });
// });
// Solving callback hell can be achieved through various techniques, some of which include:
// Using named functions: Instead of using anonymous functions as callbacks, define named functions. This approach improves code readability and separates the logic, making it easier to understand the flow of the program.
// function onResult1(result1) {
//   asyncOperation2(result1, onResult2);
// }
// function onResult2(result2) {
//   asyncOperation3(result2, onResult3);
// }
// asyncOperation1(onResult1);
// Using Promises: Promises are a built-in feature in modern JavaScript that allows you to handle asynchronous operations in a more structured way, avoiding the deeply nested callbacks.
// asyncOperation1()
//   .then(function (result1) {
//     return asyncOperation2(result1);
//   })
//   .then(function (result2) {
//     return asyncOperation3(result2);
//   })
//   .then(function (result3) {
//     // Handle the final result
//   })
//   .catch(function (error) {
//     // Handle errors
//   });
// Using async/await: With the introduction of async/await in JavaScript, handling asynchronous operations became even more elegant and easier to read.
// async function doAsyncOperations() {
//   try {
//     const result1 = await asyncOperation1();
//     const result2 = await asyncOperation2(result1);
//     const result3 = await asyncOperation3(result2);
//     // Handle the final result
//   } catch (error) {
//     // Handle errors
//   }
// }
// doAsyncOperations();
// Using libraries like Async.js: Libraries like Async.js provide utilities to manage asynchronous flow control and handle callback hell effectively.
// javascript
// Copy code
// async.series(
//   [
//     function (callback) {
//       asyncOperation1(callback);
//     },
//     function (callback) {
//       asyncOperation2(result1, callback);
//     },
//     function (callback) {
//       asyncOperation3(result2, callback);
//     },
//   ],
//   function (err, results) {
//     // Handle the final result
//   }
// );
// In summary, callback hell occurs when multiple asynchronous operations are nested in callbacks, making the code difficult to manage. Techniques like using named functions, Promises, async/await, or specialized libraries can help avoid callback hell and make the code more readable and maintainable.




