import React from 'react'

const ExpenseForm = ({
    charge, 
    amount, 
    handleCharge, 
    handleAmount, 
    handleSubmit,
    edit
}) => {
    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            name="charge"
            id="charge"
            value={charge}
            onChange={handleCharge}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
          />
          <button type="submit">{edit ? "Edit" : "Submit"}</button>
        </form>
      </div>
    );
}

export default ExpenseForm
