// Arrays to store incomes and expenses
let income = [];
let expenses = [];


// Buttons
const incomeButton = document.getElementById("incomeBtn");
const expenseButton = document.getElementById("expenseBtn");


// Input and display fields
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("desc");
const balanceDisplay = document.getElementById("balance");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");


// Event listeners for buttons
incomeButton.addEventListener("click", addIncome);
expenseButton.addEventListener("click", addExpense);


/**
 * Function to add income
 * Validates input
 * Calls updateBalance and displayIncome functions
 */
function addIncome(){
    const inputDesc = descriptionInput.value;
    const inputAmount = parseFloat(amountInput.value);
    if(isNaN(inputAmount) || inputAmount < 0){
        alert("Please enter a valid number for the amount.");
    } else {
        income.push({description: inputDesc, amount: inputAmount, type: "income"});
        updateBalance();
        displayIncome();
    };
};


/**
 * Function to add expense
 * Validates input
 * Calls updateBalance and displayExpense functions 
 */
function addExpense(){
    const inputDesc = descriptionInput.value;
    const inputAmount = parseFloat(amountInput.value);
    if(isNaN(inputAmount) || inputAmount < 0){
        alert("Please enter a valid number for the amount.");
    } else {
        expenses.push({description: inputDesc, amount: inputAmount, type: "expense"});
        updateBalance();
        displayExpenses();
    }
    
};


/**
 * Subtracts total expenses from total income
 * Updates the balance display
 * Calls clearFields function
 */
function updateBalance(){
    let totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
    let totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    let balance = totalIncome - totalExpenses;
    balanceDisplay.innerText = balance.toFixed(2);
    clearFields()
};


/**
 * Clears the input fields
 */
function clearFields(){
    amountInput.value = "";
    descriptionInput.value = "";
};


/**
 * Displays the income transactions
 */
function displayIncome(){
    incomeList.innerHTML = "";
    income.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.description}: ${item.amount.toFixed(2)}`;
        li.classList.add("income");
        incomeList.appendChild(li);
    })
};


/**
 * Displays the expense transactions
 */
function displayExpenses(){
    expenseList.innerHTML = "";
    expenses.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.description}: ${item.amount.toFixed(2)}`;
        li.classList.add("expense");
        expenseList.appendChild(li);
    })
};