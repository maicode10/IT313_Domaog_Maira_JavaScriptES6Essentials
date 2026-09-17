# IT313 Enrollment Eligibility Checker

## Problem
The registrar provided a raw list of enrollee records, each with prelim, midterm, and final grades. This program calculates each enrollee's average and reports whether they are PASSING (average of 75 or higher) or on PROBATION, along with the overall class average and passing count.

## Approach
- `gradeUtils.js` exports two functions: a named export `computeAverage(prelim, midterm, final)` that calculates the average of the three grades, and a default export `isPassing(average)` that checks if the average meets the 75 passing standard.
- `index.js` imports both functions and simulates fetching enrollee data from a "registrar API" using a Promise wrapped around `setTimeout`.
- An `async` function awaits this simulated fetch inside a `try/catch` block, so a failed fetch is caught and reported instead of crashing the program.
- Each enrollee record is destructured to pull out `name`, `prelim`, `midterm`, and `final`.
- `.map()` builds a new array of `{ name, average, status }` objects using the imported functions.
- `.filter()` separates passing enrollees from those on probation.
- `.reduce()` calculates the class average across all enrollees.
- Template literals format and print the final report.

## How to Run
1. Make sure Node.js is installed.
2. In the project folder, run:
   npm install
3. Run the program:
   node index.js
4. The formatted eligibility report will print to the console after a short simulated delay.

## Files
- `gradeUtils.js` — exports `computeAverage` (named) and `isPassing` (default)
- `index.js` — main script: fetches data, processes it, and prints the report

