import { useNavigate } from 'react-router-dom';

function EmployeeList({employee,deleteEmployee}){
     const navigate = useNavigate();

    const showAddEmployee = () =>{
        navigate("/addemployee");
    }

    const showAddEmployeeSearch = () =>{
        navigate("/employeesearch");
    }
    return(
        <div>
            <center>
            <h1> Employee Management App</h1>
            <h2> Employee List</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {employee.map((employee,index)=>(
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.email}</td>
                            <td><button onClick={() => deleteEmployee(employee.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-group">
            <button className="my-button" onClick={showAddEmployee} >Add Employee</button>
            <button className="my-button" onClick={showAddEmployeeSearch} >Search</button>
            </div>
            </center>
        </div>

    );

}
export default EmployeeList;