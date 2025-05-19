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

function addIncome(){
    console.log("Adding income");
    const inputDesc = descriptionInput.value;
    const inputAmount = parseFloat(amountInput.value);
    income.push({description: inputDesc, amount: inputAmount, type: "income"});
    console.log(income);
    updateBalance();
    displayIncome();
};

function addExpense(){
    console.log("Adding expense");
    const inputDesc = descriptionInput.value;
    const inputAmount = parseFloat(amountInput.value);
    expenses.push({description: inputDesc, amount: inputAmount, type: "expense"});
    console.log(expenses);
    updateBalance();
    displayExpenses();
};

function updateBalance(){
    console.log("updating balance");
    let totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
    let totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    let balance = totalIncome - totalExpenses;
    balanceDisplay.innerText = balance.toFixed(2);
    clearFields()
};

function clearFields(){
    console.log("clearing fields");
    amountInput.value = "";
    descriptionInput.value = "";
};

function displayIncome(){
    console.log("displaying income");
    incomeList.innerHTML = "";
    income.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.description}: ${item.amount.toFixed(2)}`;
        incomeList.appendChild(li);
    })
};

function displayExpenses(){
    console.log("displaying expenses");
    expenseList.innerHTML = "";
    expenses.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.description}: ${item.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    })
};