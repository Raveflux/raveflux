// src/Employees.jsx
import React from 'react';
import Employee from './Employee';

const Employees = () => {
    const employees = [
        { name: 'Mike', position: 'Manager', salary: 15000, status: 'Active' },
        { name: 'Francis', position: 'Developer', salary: 14500, status: 'Active' },
        { name: 'Leo', position: 'Designer', salary: 14000, status: 'Active' },
        { name: 'Rafayla', position: 'Developer', salary: 14300, status: 'Active' },
        { name: 'Borsyo', position: 'Manager', salary: 15500, status: 'Active' },
        { name: 'Aaron', position: 'Designer', salary: 14100, status: 'Active' },
        { name: 'Arthur', position: 'Developer', salary: 14600, status: 'Active' },
        { name: 'Xavier', position: 'Manager', salary: 15300, status: 'Active' },
        { name: 'Wilmar', position: 'Designer', salary: 0, status: 'Not Active' },
        { name: 'Frank', position: 'Developer', salary: 0, status: 'Not Active' },
    ];

    return (
        <div>
            <h1>Employee Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <Employee key={index} employee={employee} index={index + 1} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employees;