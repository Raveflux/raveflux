// src/Employee.js
import React from 'react';

const Employee = ({ employee, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.status === 'Active' ? employee.salary : 'N/A'}</td>
            <td>{employee.status}</td>
        </tr>
    );
};

export default Employee;
