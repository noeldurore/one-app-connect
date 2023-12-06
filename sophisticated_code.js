/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code calculates various statistics for a given set 
 * of numbers and provides additional functionalities like sorting, filtering, 
 * and finding the prime numbers within the set.
 *
 * Note: This code includes helper functions and verbose comments for better
 * understanding.
 *
 * Author: [Your Name]
 */

// Generate a set of random numbers
const numbers = [];
const size = 1000; // Number of elements in the set

for (let i = 0; i < size; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
}

// Function to calculate the sum of all numbers in the set
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Calculate the sum of the given numbers
const sum = calculateSum(numbers);

// Function to calculate the mean (average) of the given numbers
function calculateMean(numbers) {
  return calculateSum(numbers) / numbers.length;
}

// Calculate the mean of the given numbers
const mean = calculateMean(numbers);

// Function to calculate the variance of the given numbers
function calculateVariance(numbers) {
  const mean = calculateMean(numbers);
  let variance = 0;
  for (let i = 0; i < numbers.length; i++) {
    variance += Math.pow(numbers[i] - mean, 2);
  }
  return variance / numbers.length;
}

// Calculate the variance of the given numbers
const variance = calculateVariance(numbers);

// Function to calculate the standard deviation of the given numbers
function calculateStandardDeviation(numbers) {
  return Math.sqrt(calculateVariance(numbers));
}

// Calculate the standard deviation of the given numbers
const standardDeviation = calculateStandardDeviation(numbers);

// Function to sort the given numbers in ascending order
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Sort the given numbers in ascending order
const sortedNumbers = sortNumbers(numbers);

// Function to filter the numbers based on a given condition (e.g., even numbers)
function filterNumbers(numbers, condition) {
  return numbers.filter(condition);
}

// Filter the even numbers from the set
const evenNumbers = filterNumbers(numbers, (num) => num % 2 === 0);

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to find all prime numbers within a given range
function findPrimeNumbers(start, end) {
  const primeNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

// Find prime numbers within the range 1 to 100
const primeNumbers = findPrimeNumbers(1, 100);

// Output the calculated statistics
console.log("Sum:", sum);
console.log("Mean:", mean);
console.log("Variance:", variance);
console.log("Standard Deviation:", standardDeviation);
console.log("Sorted Numbers:", sortedNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Prime Numbers:", primeNumbers);

// Additional complex functionalities can be added based on requirements

// ... More complex code ...

// End of code