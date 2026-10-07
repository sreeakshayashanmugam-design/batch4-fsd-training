import { useNavigate } from "react-router-dom";

function Summary() 
{
    const navigate = useNavigate();

    const showExpense = () => {
        navigate("/expense");
    }
    const showExpenseList =() => {
        navigate("/expense-list");
    }
    return (
        <div>
            <center>
                <h2>Your Balance</h2>
                <h3>SUMMARY</h3>
                <table>
                    <thead>
                        <th>Income</th>
                        <th>Expense</th>                        
                    </thead>
                    <tbody>
                        <td>$250000</td>
                        <td>$100000</td>
                    </tbody>
                </table>
        <button onClick={showExpense}>Add Expense</button><br/>
        <button onClick={showExpenseList}>Expense List</button>
        </center>
        </div>
    );
}
export default Summary;