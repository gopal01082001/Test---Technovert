// Q10. What will the following code's output be in sequence and explain why?
// function printNumber(num) {
//  console.log(num);
// }
// console.log(1);
// setTimeout(printNumber, 0, 2);
// setTimeout(printNumber, 100, 3);
// console.log(4);
// The output of the code will be:
// 1
// 4
// 2
// 3
// Here's the step-by-step explanation:
// console.log(1);: This is a synchronous call, so it will be executed first and log 1 to the console.
// setTimeout(printNumber, 0, 2);: This is an asynchronous call to setTimeout with a delay of 0 milliseconds. Despite the delay being 0, it doesn't mean the function will be executed instantly. JavaScript has a minimum delay before executing any function passed to setTimeout, and this minimum delay is usually around 4 milliseconds. So, the function will be placed in the event queue but will still be executed after other synchronous code.
// setTimeout(printNumber, 100, 3);: This is another asynchronous call to setTimeout with a delay of 100 milliseconds. The function will be executed after a 100-millisecond delay, but it will be placed in the event queue after the previous setTimeout call.
// console.log(4);: This is another synchronous call, so it will be executed after the first console.log statement and log 4 to the console.
// Now let's see how the asynchronous functions are executed:
// After step 1, the event loop will start processing the functions in the event queue:
// setTimeout(printNumber, 0, 2);: This will execute and log 2 to the console. Even though it was set with a delay of 0, it was still placed after the synchronous code in the event queue.
// After step 3 (100 milliseconds after step 1):
// setTimeout(printNumber, 100, 3);: This will execute and log 3 to the console. It was set with a delay of 100 milliseconds, so it will execute after the first setTimeout callback.
// So, the final order of numbers logged to the console will be: 1, 4, 2, 3.




