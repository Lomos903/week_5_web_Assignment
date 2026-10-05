```javascript
// ==========================================
// SpendWise JavaScript Foundation
// ==========================================

// 1. Store application data

let monthlyBudget = 50000;
let currentExpenses = 15000;

const currency = "KSh";


// 2. Create a function to calculate the
// remaining balance

function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// 3. Calculate the current balance

let remainingBalance = calculateBalance(
    monthlyBudget,
    currentExpenses
);


// 4. Display the initial results
// in the browser console

console.log("===== SpendWise Budget Report =====");
console.log("Monthly Budget: " + currency + " " + monthlyBudget);
console.log("Current Expenses: " + currency + " " + currentExpenses);
console.log("Remaining Balance: " + currency + " " + remainingBalance);


// 5. Collect user input using prompts

let userBudget = prompt(
    "Enter your monthly budget:"
);

let userExpenses = prompt(
    "Enter your total expenses:"
);


// 6. Convert the user input from strings
// into numbers

userBudget = Number(userBudget);
userExpenses = Number(userExpenses);


// 7. Calculate the user's remaining balance

let userBalance = calculateBalance(
    userBudget,
    userExpenses
);


// 8. Display the user's results
// in the browser console

console.log("===== Your SpendWise Results =====");
console.log("Your Budget: " + currency + " " + userBudget);
console.log("Your Expenses: " + currency + " " + userExpenses);
console.log("Your Remaining Balance: " + currency + " " + userBalance);


// 9. Display the result on the dashboard

document.getElementById("budgetDisplay").textContent =
    currency + " " + userBudget.toLocaleString();

document.getElementById("expenseDisplay").textContent =
    currency + " " + userExpenses.toLocaleString();

document.getElementById("balanceDisplay").textContent =
    currency + " " + userBalance.toLocaleString();


// 10. Show whether the user is within budget

if (userBalance >= 0) {
    console.log(
        "Status: You are within your budget."
    );
} else {
    console.log(
        "Status: You have exceeded your budget."
    );
}
```
