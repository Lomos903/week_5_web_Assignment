````markdown
# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a personal budgeting dashboard that helps users keep track of their monthly budget, expenses, and remaining balance.

In Week 6, JavaScript was added to the SpendWise dashboard. The application can now collect budget information from the user, perform calculations, and display the results in the browser console and dashboard.

## Project Files

### index.html

Contains the structure of the SpendWise dashboard, including the sidebar, navigation, header, financial summary, and expense categories.

### style.css

Contains the styling for the SpendWise dashboard, including colors, layout, CSS Grid, Flexbox, responsive design, and card styling.

### script.js

Contains the JavaScript code used to store data, collect user input, perform calculations, create reusable functions, and display results.

### README.md

Provides information about the project and explains the JavaScript concepts used.

## JavaScript Concepts Implemented

### Variables

Variables are used to store budgeting and expense information.

Example:

```javascript
let monthlyBudget = 50000;
let totalExpenses = 15000;
````

A constant is also used to store the currency:

```javascript
const currency = "KSh";
```

The variables make it possible for the program to work with different financial values.

## Data Types

The project uses different JavaScript data types.

Numbers are used for financial calculations:

```javascript
let monthlyBudget = 50000;
let totalExpenses = 15000;
```

A string is used for the currency:

```javascript
const currency = "KSh";
```

## User Input

The `prompt()` function is used to collect information from the user.

```javascript
let userBudget = prompt(
    "Enter your monthly budget:"
);

let userExpenses = prompt(
    "Enter your total expenses:"
);
```

The user enters their budget and expenses through the browser prompts.

Because prompt input is returned as text, the `Number()` function is used to convert the values into numbers.

```javascript
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);
```

## Budget Calculations

SpendWise calculates the remaining balance by subtracting expenses from the budget.

The calculation is:

```text
Remaining Balance = Budget - Expenses
```

For example:

```text
Budget = KSh 50,000
Expenses = KSh 15,000

Remaining Balance = KSh 35,000
```

## Functions

A reusable function called `calculateBalance()` is used to calculate the remaining balance.

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The function is called using:

```javascript
let userBalance = calculateBalance(
    userBudget,
    userExpenses
);
```

Functions help organize the program by placing related instructions together. They also allow the same calculation to be reused without writing the calculation repeatedly.

## Console Output

The application uses `console.log()` to display clearly labelled results.

Example:

```javascript
console.log("Your Budget: " + userBudget);
console.log("Your Expenses: " + userExpenses);
console.log("Your Remaining Balance: " + userBalance);
```

The browser console displays the user's budget, expenses, remaining balance, and budget status.

## Budget Status

The application also checks whether the user is within their budget.

If the remaining balance is zero or greater, the program displays:

```text
Status: You are within your budget.
```

If the remaining balance is negative, it displays:

```text
Status: You have exceeded your budget.
```

## Testing

The application was tested using different budget and expense values.

### Test 1

Budget:

```text
50000
```

Expenses:

```text
15000
```

Expected result:

```text
Remaining Balance: 35000
```

### Test 2

Budget:

```text
30000
```

Expenses:

```text
20000
```

Expected result:

```text
Remaining Balance: 10000
```

### Test 3

Budget:

```text
20000
```

Expenses:

```text
25000
```

Expected result:

```text
Remaining Balance: -5000
```

The console should also show that the budget has been exceeded.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* CSS Flexbox

## Author

SpendWise Week 6 Project

```
```
