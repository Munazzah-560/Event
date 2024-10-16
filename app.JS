// Chapter 38 to 42
// Question 1

// function power(a, b) {
//     if (b < 0) {
//         return 1 / power(a, -b);
//     }
    
//     if (b === 0) {
//         return 1;
//     }

//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
    
//     return result;
// }

// console.log(power(2, 3)); 
// console.log(power(5, -2)); 
// console.log(power(3, 0)); 

// Question 2

// function isLeapYear(year) {
    
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; 
//     } else {
//         return false;
//     }
// }

// const year = parseInt(prompt("Enter a year:"));
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// question 3

// function calculateTriangleArea(a, b, c) {
//     const S = (a + b + c) / 2;

//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     return area;
// }

// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const area = calculateTriangleArea(sideA, sideB, sideC);
// console.log(`The area of the triangle is: ${area}`);

//Question 4

// // Function to calculate average
// function calculateAverage(marks) {
//     const total = marks.reduce((acc, mark) => acc + mark, 0);
//     return total / marks.length;
// }

// // Function to calculate percentage
// function calculatePercentage(marks) {
//     const totalMarks = marks.length * 100; // Assuming each subject is out of 100
//     const obtainedMarks = marks.reduce((acc, mark) => acc + mark, 0);
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     const marks = [];

//     for (let i = 1; i <= 3; i++) {
//         const mark = parseFloat(prompt(`Enter marks for subject ${i}:`));
//         marks.push(mark);
//     }

//     const average = calculateAverage(marks);
//     const percentage = calculatePercentage(marks);

//     console.log(`Average: ${average}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
// }

// mainFunction();

// Question 5

// function customIndexOf(str, char) {
//     if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
//         return -1; 
//     }
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
    
//     return -1; 
// }

// const myString = "Hello, World!";
// const searchChar = "o";
// const index = customIndexOf(myString, searchChar);

// console.log(`The index of '${searchChar}' in "${myString}" is: ${index}`);

//Question 6

// function removeVowels(sentence) {
//     if (sentence.length > 25) {
//         return "The sentence should not exceed 25 characters.";
//     }
    
//     const vowelsPattern = /[aeiouAEIOU]/g;
    
//     const result = sentence.replace(vowelsPattern, '');

//     return result;
// }

// const inputSentence = "This is an example sentence.";
// const result = removeVowels(inputSentence);

// console.log(`Original sentence: "${inputSentence}"`);
// console.log(`Sentence without vowels: "${result}"`);

// Question 7

// function countDoubleVowels(sentence) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     const lowerSentence = sentence.toLowerCase();

//     for (let i = 0; i < lowerSentence.length - 1; i++) {
//         const currentChar = lowerSentence[i];
//         const nextChar = lowerSentence[i + 1];

//         if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//             count++;
//         }
//     }

//     return count;
// }

// const inputSentence = "Pleases read this application and give me gratuity";
// const result = countDoubleVowels(inputSentence);

// console.log(`The number of occurrences of two vowels in succession is: ${result}`);

// Question 8

// Question 9

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;
    
//     // Check if hours worked is less than or equal to regular hours
//     if (hoursWorked <= regularHours) {
//         return 0; // No overtime pay
//     }
    
//     // Calculate overtime hours
//     const overtimeHours = hoursWorked - regularHours;
    
//     // Calculate total overtime pay
//     const overtimePay = overtimeHours * overtimeRate;
    
//     return overtimePay;
// }

// function mainFunction() {
//     const hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));

//     if (isNaN(hoursWorked) || hoursWorked < 0) {
//         console.log("Please enter a valid non-negative number for hours worked.");
//         return;
//     }

//     const overtimePay = calculateOvertimePay(hoursWorked);
    
//     if (overtimePay > 0) {
//         console.log(`Overtime pay for ${hoursWorked} hours worked is: Rs. ${overtimePay.toFixed(2)}`);
//     } else {
//         console.log("No overtime pay for the hours worked.");
//     }
// }

// mainFunction();

// Chapter 43 to 48

// Question 1

// function showAlert() {
//     alert("Link clicked!");
// }

// Question 2

// function showAlert(imageName) {
//     alert(`You clicked on: ${imageName}`);
// }

// Question 3

// function deleteRow(button) {
//     const row = button.parentElement.parentElement;
//     row.parentElement.removeChild(row);
// }

// Question 4

// function changeImage(image) {
//     image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCsMBOAM9hWmfSpH3atS75RcKdnIozOahVQ&s'; // Second image
// }

// function resetImage(image) {
//     image.src = 'https://cdn.pixabay.com/photo/2024/02/19/08/49/hibiscus-8582876_640.jpg'; 
// }

// Question 5

// var count = 0;

//         function updateCounter() {
//             document.getElementById('counter').innerText = count;
//         }

//         function increaseCounter() {
//             count++;
//             updateCounter();
//         }

//         function decreaseCounter() {
//             count--;
//             updateCounter();
//         }


