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

