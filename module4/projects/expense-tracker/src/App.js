import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Summary from "./component/summary";
import Expense from "./component/expense";
import ExpenseList from "./component/expenselist";

function App() {

    const [expense, setExpense] = useState([
        { id:1, Product: "Groceires", Price: "$-50" },
        { id:2, Product: "Salary", Price: "+$20000" }
    ]);

    const addExpense = (newExpense) => {
        setExpense([...expense, newExpense]);
    };
    const deleteExpense = (id) => {
  const updated = expense.filter(expense => expense.id !== id);
  setExpense(updated);
    };
    return (
        <div>
          <center>
            <h1>Expense Tracker</h1>
          </center>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Summary />} />

                    <Route
                        path="/expense"
                        element={<Expense addExpense={addExpense} />}
                    />

                    <Route
                        path="/expense-list"
                        element={<ExpenseList expense={expense} deleteExpense={deleteExpense} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
