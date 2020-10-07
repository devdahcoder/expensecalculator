import React from 'react'
import ExpenseItem from "./ExpenseItem"
const ExpenseList = ({
    expenses, 
    clearItems, 
    handleEdit, 
    handleDelete
}) => {
    return (
        <div>
            <ul>
                {expenses.map(expense => {
                    return <ExpenseItem 
                        key={expense.id} 
                        expense={expense} 
                        handleEdit={handleEdit} 
                        handleDelete={handleDelete}
                    />
                })}

                {expenses.length > 0 && <button onClick={clearItems}>Clear Expenses</button>}
            </ul>
        </div>
    )
}

export default ExpenseList
