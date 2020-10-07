import React from 'react'

const ExpenseItem = ({
    expense, 
    handleEdit, 
    handleDelete
}) => {

    
    const { id, charge, amount } = expense
    return (
        <div>
            <li key={id}>
                <span>{charge}</span>
                <span>$ {amount}</span>
            </li>

            <div>
                <button onClick={() => handleEdit(id)}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default ExpenseItem
