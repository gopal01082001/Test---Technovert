// // Q2. Explain the output of the above-given code and explain why?
// // for (var i = 0; i < 5; i++) {
// //   setTimeout(() => console.log(i), 100)
// // }
// The output of the above code will be:
// 5
// 5
// 5
// 5
// 5
// Explanation:
// The code is a loop that runs five times. In each iteration, it schedules a function to be executed after a delay of 100 milliseconds using setTimeout. The function being scheduled is an arrow function that logs the value of the variable i to the console.
// However, there is a common JavaScript closure issue with this code. The variable i is declared using var, which has function scope, not block scope. As a result, there is only one i variable shared across all iterations of the loop. When the setTimeout function executes the arrow function, it captures the reference to the same variable i.
// The loop runs asynchronously, and the setTimeout functions are scheduled to execute after the loop has finished. At that time, the value of i is 5 because the loop has already completed, and the exit condition i < 5 is no longer true.
// So, when the scheduled functions finally execute, they all log the value of i, which is 5 in all cases, resulting in the output of 5 being logged five times.
// To achieve the expected behavior of logging 0, 1, 2, 3, and 4, you can use let instead of var to create block-scoped variables for each iteration of the loop. Here's how you can modify the code:
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// Using let creates a new variable i for each iteration, ensuring that the correct value of i is captured in the closure for each setTimeout function. This will log 0, 1, 2, 3, and 4 as expected.




