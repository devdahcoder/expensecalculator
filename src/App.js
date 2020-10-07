import React, {useState, useEffect} from 'react';
import './App.css';
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseCalculator from "./ExpenseCalculator";
import { v4 as uuid } from "uuid";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];




function App() {

  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);


  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        })
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
      }
      
      setCharge("");
      setAmount("");
    } else {
      alert("not happening")
    }
    
  }

  const clearItems = () => {
    setExpenses([]);
  }

  const handleDelete = (id) => {
    const tempExpenses = expenses.filter(item => id !== item.id )
    setExpenses(tempExpenses);
  }

  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  return (
    <div className="App">
      <h1>Budget App</h1>
      <main>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>

      <ExpenseCalculator expenses={expenses}/>
    </div>
  );
}

export default App;
