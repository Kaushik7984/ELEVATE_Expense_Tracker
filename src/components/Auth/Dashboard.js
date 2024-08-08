import React, { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expenses/Expense";
import "./Dashboard.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
import toast from "react-hot-toast";

const initialExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 7, 28),
  },
  {
    id: "e2",
    title: "Refrigerator",
    amount: 940.12,
    date: new Date(2021, 5, 14),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 3, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 2, 7),
  },
  {
    id: "e5",
    title: "Repairs charges",
    amount: 450,
    date: new Date(2021, 10, 1),
  },
];

const Dashboard = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    setIsFormVisible(false); // Hide the form after adding the expense
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  const editExpenseHandler = (expenseId, updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === expenseId ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");

    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    toast("Logout Successfully!");
  };

  return (
    <div className="dashboard">
      {/* <ExpenseForm /> */}
      <div className="header">
        <div className="headername"><h1>Welcome to</h1><h1 className="name"> Expense Tracker</h1></div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <button
        className="toggle-form-button"
        onClick={() => setIsFormVisible((prev) => !prev)}
      >
        {isFormVisible ? "Cancel" : "Add Expense"}
      </button>
      {isFormVisible && <NewExpense onAddExpense={addExpenseHandler} />}
      <Expenses
        items={expenses}
        onDelete={deleteExpenseHandler}
        onEdit={editExpenseHandler}
      />
    </div>
  );
};

export default Dashboard;
