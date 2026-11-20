// =========================📝 JavaScript Loops Assignments=========================



// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.

// let fruits = ["apple", "banana", "cherry"]
// for(i = 0; i <= 2; i++){
//     console.log(fruits[i]);
    
// }

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.


// const para = document.querySelector("#output")

// let colors = ["red", "green", "blue"]
// for(i = 0 ; i < colors.length; i++){
//         para.innerHTML += colors[i] + "<br>";
// }

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.

// for(i = 1; i <= 10; i++){
//     console.log(i);
    
// }


// 4. Use a while loop to print numbers from 5 to 1 in the console.

// let i = 5

// while(i >= 1){
//     console.log(i);
//     i--
// }


// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.


// const div = document.querySelector("#names")
// let names =  ["Ali", "Sara", "Ahmed"];

// for(i = 0 ; i < names.length;i++){
//     div.innerHTML += names[i];

//     if (i < names.length - 1) {
//     div.innerHTML += ", ";
// }
// }


// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.

// const para = document.querySelector("#loading")

// para.innerHTML = "Loading...";


// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.

// const para = document.querySelector("#loading")

// let sum = [5, 10, 15]
// let total = 0

// for(i = 0 ; i < sum.length; i++){
//      total += sum[i]
// }
// para.innerHTML = total

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.

// const div = document.querySelector("#cities")

// let cities = ["Karachi", "Lahore", "Quetta"];

// let result = ""

// for(i = 0;i < cities.length;i++){
//     result += cities[i] + " ";

// }
// div.innerHTML = result


// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.

// for(i = 2;i <= 20; i+=2){
//     console.log(i);
    
// }

// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.


// const div = document.querySelector("#cities")

// let numbers = [45, 22, 89, 100];
// let largest = numbers[0]

// for(i = 0;i < numbers.length;i++){
//     if (numbers[i] > largest) {
//         largest = numbers[i]
//     }
// }
// div.innerHTML = largest


// 11. Use document.querySelector to select a div with ID result and change its text to "Task Complete".

// const div = document.querySelector("#cities")

// div.innerHTML = "Task Complete"


// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.

// const div = document.querySelector("#cities")

// let temperature = [30, 35, 32, 40];
// let total = 0;

// for(i = 0;i < temperature.length;i++){
//     total += temperature[i];

// }
// let average = total / temperature.length

// div.innerHTML = average


// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.

// const div = document.querySelector("#cities")

// let total = 0
// for(i = 1; i <= 100;i++){
//     total += i
// }
// div.innerHTML = total


// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.

// const div = document.querySelector("#cities")

// let animals = ["dog", "cat", "bird"];

// for(i = 0;i <= 2;i++){
//     div.innerHTML += animals[i] + "<br>"
// }


// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!"./

// const div = document.querySelector("#cities")

// div.innerHTML = "Welcome to JavaScript!"


// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.

// for(i = 1;i <= 50;i++){
//     if (i % 5 === 0) {
//         console.log(i);
        
//     }
// }


// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.

// const div = document.querySelector("#cities")

// let scores = [80, 60, 90, 70];
// let count = 0;

// for(i = 0;i < scores.length;i++){
//     if (scores[i] > 75) {
//         count++
//     }
// }
// div.innerHTML = count


// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector./

// const div = document.querySelector("#cities")

// div.innerHTML = "Updated successfully"


// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.
// const div = document.querySelector("#cities")

// let subjects = ["Math", "Science", "English"];
// for(i = 0; i < subjects.length;i++){
//     div.innerHTML += subjects[i] + "<br>"
// }


// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.

// const div = document.querySelector("#cities");

// // Part 1
// for(let i = 10; i >= 1; i--){
//     div.innerHTML += i + "<br>";
// }

// // Part 2
// let numbers = [5, 10, 15, 20];
// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// div.innerHTML += "<br>Sum: " + sum;

// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

// let number = [45, 67, 12, 89, 34];
// let largest = number[0]
// for(i = 0; i < number.length;i++){
//     if (number[i] > largest) {
//         largest = number[i]
//     }
// }
// console.log(largest);


// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.


// const div = document.querySelector("#cities");

// let numbers = [3, 8, 6, 1, 9, 2];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] % 2 === 0) {
//         count++;
//     }

// }

// div.innerHTML = "Total even numbers: " + count;


// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].

// const div = document.querySelector("#cities");

// let numbers = [20, 30, 40, 50];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }

// let average = total / numbers.length;

// div.innerHTML = "Average: " + average;


// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.
// const div = document.querySelector("#result");

// let numbers = [2, 4, 6, 8, 10];
// let newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//     newArray.push(numbers[i] * 3);
// }

// div.innerHTML = newArray;

// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.

//  const div = document.querySelector("#result");
//  let numbers = [1, 3, 5, 7, 9];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 4) {
//         count++;
//     }
// }

// div.innerHTML = count;

// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.

// const div = document.querySelector("#result");

// let numbers = [10, 15, 20, 25, 30];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 === 0) {
//         total += numbers[i];
//     }
// }

// div.innerHTML = total;


// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].

// const div = document.querySelector("#result");

// let numbers = [10, 20, 30, 40, 25];
// let found = false;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 25) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     div.innerHTML = "25 exists in the array";
// } else {
//     div.innerHTML = "25 does not exist in the array";
// }


// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.

// const div = document.querySelector("#result");

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr3.push(arr1[i] + arr2[i]);
// }


// div.innerHTML = arr3;


// 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].

// const div = document.querySelector("#result");

// let numbers = [10, 99, 23, 87, 56];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         secondLargest = largest;
//         largest = numbers[i];
//     } else if (numbers[i] > secondLargest && numbers[i] < largest) {
//         secondLargest = numbers[i];
//     }
// }

// div.innerHTML = secondLargest;


// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// .reverse()).

// const div = document.querySelector("#result");

// let numbers = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     reversed.push(numbers[i]);
// }

// div.innerHTML = reversed;


// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.

// const div = document.querySelector("#result");

// let primes = [];

// for (let i = 2; i <= 50; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         primes.push(i);
//     }
// }

// div.innerHTML = primes;

// 32. Create a loop that finds the difference between the largest and smallest numbers in an
// array [11, 4, 99, 2, 47].

// const div = document.querySelector("#result");

// let numbers = [11, 4, 99, 2, 47];

// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }

//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }

// let difference = largest - smallest;

// div.innerHTML = difference;


// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.

// const div = document.querySelector("#result");

// let numbers = [0, -1, -5, 6, 8, -3];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         count++;
//     }
// }

// div.innerHTML = count;


// 34. Loop through an array of numbers and create a new array that only contains odd
// numbers.
// const div = document.querySelector("#result");


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i]);
//     }
// }

// div.innerHTML = oddNumbers;


// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.

// const div = document.querySelector("#result");

// let numbers = [0, 1, 0, 3, 0, 5];
// let newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== 0) {
//         newArray.push(numbers[i]);
//     }
// }

// div.innerHTML = newArray;


// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.

// const div = document.querySelector("#result");

// let numbers = [1, 2, 3, 4, 5];

// let temp = numbers[0];

// numbers[0] = numbers[numbers.length - 1];

// numbers[numbers.length - 1] = temp;

// div.innerHTML = numbers;


// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.

// const div = document.querySelector("#result");

// let numbers = [2, 4, 6, 8];
// let allEven = true;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         allEven = false;
//         break;
//     }
// }

// if (allEven) {
//     div.innerHTML = "All numbers are even";
// } else {
//     div.innerHTML = "Not all numbers are even";
// }


// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// equal to the average of the array.

// const div = document.querySelector("#result");

// let numbers = [5, 10, 15, 20, 25];

// let total = 0;
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }

// let average = total / numbers.length;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= average) {
//         count++;
//     }
// }

// div.innerHTML = "Average: " + average + " | Count: " + count;


// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.

// const div = document.querySelector("#result");

// let numbers = [2, 2, 2, 2, 2];
// let equal = true;

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] !== numbers[0]) {
//         equal = false;
//         break;
//     }
// }

// if (equal) {
//     div.innerHTML = "All elements are equal";
// } else {
//     div.innerHTML = "Elements are not equal";
// }




// =========================📝 JavaScript Loops Assignments finished=========================
 