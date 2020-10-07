import React from 'react';


const ExpenseCalculator = ({expenses}) => {

    return(
        <div>
            <h1>
                Total spending:{" "}
                <span>
                ${" "}
                {expenses.reduce((acc, curr) => {
                    return (acc += parseInt(curr.amount));
                }, 0)}
                </span>
            </h1>
        </div>
    )
}
export default ExpenseCalculator