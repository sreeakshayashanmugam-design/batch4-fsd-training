import './App.css';
import EmployeeList from './component/employeelist';
import Addemployee from './component/addemployee';
import EmployeeSearch from './component/employeesearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {

    const [employee, setEmployee] = useState([
        { id: 1, name: "Arun", age: "28", email: "exmple@gmail.com" },
        { id: 2, name: "Aravid", age: "26", email: "exmple@gmail.com" },
        { id: 3, name: "Ashok", age: "30", email: "exmple@gmail.com" },
    ]);

    const addEmployee = (newEmployee) => {
        setEmployee([...employee, newEmployee]);
    };

    const deleteEmployee = (id) => {
        const updated = employee.filter(employee => employee.id !== id);
        setEmployee(updated);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EmployeeList employee={employee}deleteEmployee={deleteEmployee}/>} />
                    <Route path="/addemployee" element={<Addemployee addEmployee={addEmployee}/>}/>
                    <Route path="/employeesearch" element={<EmployeeSearch employee={employee}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
