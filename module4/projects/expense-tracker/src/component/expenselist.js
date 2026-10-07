import { useNavigate } from "react-router-dom";

function ExpenseList({expense,deleteExpense}) {
    const navigate = useNavigate();

    const showSummary = () => {
        navigate("/");
    };

    return (
        <center>
            <h3>History</h3>
            <table>
                <thead>
                  <th>Product</th> 
                  <th>Price</th>
                  <th>Delete</th> 
                </thead>
                <tbody>
                    {expense.map((expense,index)=>(
                        <tr key={index}>
                            <td>{expense.Product}</td>
                            <td>{expense.Price}</td>
                            <td><button onClick={() => deleteExpense(expense.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        <button onClick={showSummary}>Summary</button>
        </center>
    );
}

export default ExpenseList;