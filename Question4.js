// Q4. What is promise chaining? Explain with an example.
// Promise chaining is a technique used in JavaScript to handle asynchronous operations sequentially and cleanly by chaining multiple promises together. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow you to attach callbacks to be executed once the operation is completed.
// With promise chaining, you can avoid deeply nested callback functions, also known as "callback hell," and write more readable and maintainable asynchronous code.
// Here's how promise chaining works with an example:
// Let's say we have three asynchronous functions: getDataFromServer1, getDataFromServer2, and getDataFromServer3. Each function returns a promise that resolves with some data once the corresponding data is fetched from the server.
// // Sample asynchronous functions returning promises
// function getDataFromServer1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data from server 1");
//     }, 1000);
//   });
// }
// function getDataFromServer2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data from server 2");
//     }, 1500);
//   });
// }
// function getDataFromServer3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data from server 3");
//     }, 500);
//   });
// }
// Now, let's use promise chaining to call these functions sequentially and process the data once all three promises are resolved:
// // Promise chaining example
// getDataFromServer1()
//   .then((dataFromServer1) => {
//     console.log(dataFromServer1);
//     return getDataFromServer2(); // Return the next promise to chain
//   })
//   .then((dataFromServer2) => {
//     console.log(dataFromServer2);
//     return getDataFromServer3(); // Return the next promise to chain
//   })
//   .then((dataFromServer3) => {
//     console.log(dataFromServer3);
//     console.log("All data fetched successfully!");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });
// In this example, we chain the promises using the .then() method. Each .then() block receives the data resolved by the previous promise and returns the next promise in the chain. This way, when the promises are resolved sequentially, each .then() block processes the data from the corresponding server.
// If any promise in the chain is rejected (i.e., an error occurs), the control jumps directly to the .catch() block, where you can handle the error.
// Promise chaining allows us to perform a series of asynchronous operations in a more structured and readable manner, making the code easier to understand and maintain.




