import { useState } from 'react';

function EmployeeSearch({ employee }) {

    const [name, setName] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = (event) => {
        event.preventDefault();

        const foundEmployee = employee.find(
            (emp) => emp.name.toLowerCase() === name.toLowerCase()
        );

        setResult(foundEmployee);
    };

    return (
        <div className="design">

            <h1>Employee Management App</h1>
            <h2>Employee Search</h2>

            <form className="basic-form" onSubmit={handleSearch}>

                <label>Employee Name</label>

                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <button type="submit">Search</button>

            </form>

            {result && (
                <div className="search-result">
                    <h3>Employee Details</h3>

                    <p><b>Name:</b> {result.name}</p>
                    <p><b>Age:</b> {result.age}</p>
                    <p><b>Email:</b> {result.email}</p>
                </div>
            )}

            {!result && name && (
                <p>Employee not found</p>
            )}

        </div>
    );
}

export default EmployeeSearch;
