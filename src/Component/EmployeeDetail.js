import React from 'react';


function EmployeeDetail({employees}) {

    return (
        <div>
            <div className="row">
            <div className="col-12">
            <h1>Employee Details</h1>
            </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Title</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                    <tr key={index} id={index}>
                        <td>{employee.fname}</td>
                        <td>{employee.lname}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.title}</td>
                        <td>{employee.department}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
}

export default EmployeeDetail;

