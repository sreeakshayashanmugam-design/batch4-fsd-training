import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
    function Addemployee({addEmployee}){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email,setEmail] = useState("");

    const navigate = useNavigate();

        const handleSubmit = (event) => {
        event.preventDefault();

        const newEmployee = {
            id: Math.random(),
            name: name,
            age: age,
            email: email
        };

        addEmployee(newEmployee);

        navigate("/");
    };

        return(
            <div className="form-container">
                <h1> Employee Management App</h1>
                <h2> Add Employee</h2>
                <form class="basic-form" onSubmit={handleSubmit}>
                    <label> Employee Name</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                    <br/>
                    <label> Employee Age</label>
                    <input type="number" value={age} onChange={(event) => setAge(event.target.value)}/>
                    <br/>
                    <label> Employee Email</label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <br/>
                    <button >Add EmployeeList </button>

                </form>
        </div>
        )

    }
    export default Addemployee;