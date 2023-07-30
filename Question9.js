// Q9. What will the code below output to the console and why?
// var arr1 = "john".split(''); 
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// The code will output the following to the console:
// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s
// Let's break down the code step by step to understand why:
// var arr1 = "john".split('');: This splits the string "john" into an array of characters, resulting in ["j", "o", "h", "n"], which is assigned to arr1.
// var arr2 = arr1.reverse();: The reverse() method is used to reverse the order of elements in arr1. The reverse() method also modifies the original array in place, so both arr1 and arr2 will now refer to the same reversed array ["n", "h", "o", "j"].
// var arr3 = "jones".split('');: This splits the string "jones" into an array of characters, resulting in ["j", "o", "n", "e", "s"], which is assigned to arr3.
// arr2.push(arr3);: The push() method is used to add arr3 as an element to the array arr2. Since arr2 and arr1 both refer to the same array, arr3 will be added as a single element at the end of the array, making arr2 an array of arrays: ["n", "h", "o", "j", ["j", "o", "n", "e", "s"]].
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));: This logs the length of arr1, which is 5, and the last element of arr1, which is "s". The last element is obtained using arr1.slice(-1), which gives the last element of the array, considering the array is now reversed.
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));: This logs the length of arr2, which is also 5, and the last element of arr2, which is the array ["j", "o", "n", "e", "s"].
// Remember that arr1 and arr2 are referencing the same array, so any modifications to one will affect the other. That's why arr2.push(arr3) affects both arrays.

