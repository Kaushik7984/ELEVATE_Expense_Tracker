import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  const handleEdit = () => {
    const updatedExpense = prompt("Enter new title and amount (comma separated):");
    if (updatedExpense) {
      const [newTitle, newAmount] = updatedExpense.split(",");
      props.onEdit({
        title: newTitle.trim(),
        amount: parseFloat(newAmount.trim())
      });
    }
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div className="expense-item__actions">
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
}
