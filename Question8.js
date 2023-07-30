// // Q8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
// // (function() {
// //     console.log(1); 
// //     setTimeout(function(){console.log(2)}, 1000); 
// //     setTimeout(function(){console.log(3)}, 0); 
// //     console.log(4);
// // })();
// When the code is executed, the numbers 1, 4, 3, and 2 will be logged to the console in that order.
// console.log(1);: This is a synchronous call, so it will be executed first. It logs 1 to the console.
// setTimeout(function(){console.log(2)}, 1000);: This is an asynchronous call to setTimeout with a delay of 1000 milliseconds (1 second). It means the function inside setTimeout will be executed after a 1-second delay. So, it will not be executed immediately, and the code will continue.
// setTimeout(function(){console.log(3)}, 0);: This is also an asynchronous call to setTimeout, but with a delay of 0 milliseconds. Despite the delay being 0, it doesn't mean the function will be executed instantly. JavaScript has a minimum delay before executing any function passed to setTimeout, and this minimum delay is usually around 4 milliseconds. Therefore, this function will be placed in the event queue but will still be executed after other synchronous code
// console.log(4);: This is another synchronous call, so it will be executed immediately after the previous synchronous code. It logs 4 to the console.
// Now let's see how the asynchronous functions are executed:
// After step 3, the event loop will start processing the functions in the event queue:
// console.log(3) will be executed, logging 3 to the console.
// Next, after 1 second (1000 milliseconds) from step 2:
// console.log(2) will be executed, logging 2 to the console.
// So, the final order of numbers logged to the console will be: 1, 4, 3, 2.




