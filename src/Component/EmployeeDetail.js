import React from 'react';


function EmployeeDetail({employees}) {

    return (
        <table>
         <thead>
            <tr>
                <th>First Name:</th>
                <th>Last Name:</th>
                <th>Phone:</th>
                <th>Address:</th>
                <th>Email:</th>
                <th>Title:</th>
                <th>Department:</th>
            </tr> 
        </thead>
        <tbody>
            {employees.map((employee, index) => (
                <tr key={index}>
                    <td>{employee.fname}</td>
                    <td>{employee.lname}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.address}</td>
                    <td>{employee.email}</td>
                    <td>{employee.title}</td>
                    <td>{employee.department}</td>
                </tr>
            ))}
        </tbody>
        </table>
    );
}

export default EmployeeDetail;

