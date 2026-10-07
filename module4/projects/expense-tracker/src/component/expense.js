import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Expense({ addExpense }) {
    const [Product, setProduct] = useState("");
    const [Price, setPrice] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const newExpense = {
            id: Math.random(),
            Product: Product,
            Price: Price
        };

        addExpense(newExpense);
        navigate("/expense-list");
    };

    const showExpenseList = () => {
        navigate("/expense-list");
    };
    const showSummary = () => {
        navigate("/");
    };

    return (
        <div>
            <center>
                <h1>Add New Transaction</h1>

                <form className="basic-form" onSubmit={handleSubmit}>
                    <label>Product</label>
                    <input type="text"value={Product} onChange={(event) => setProduct(event.target.value)}/>
                    <br />
                    <label>Price</label>
                    <input type="text"value={Price} onChange={(event) => setPrice(event.target.value)}/>
                    <br />                                        
                    <button type="submit">Add Expense</button>
                    
                </form>
                 <br/>
                 <button onClick={showSummary}>Summary</button>
                <button onClick={showExpenseList}>Expense List</button>
            </center>
        </div>
    );
}

export default Expense;