import React from 'react';


function EmployeeList(props) {
    return(
        <div className="EmployeeList">
            <h1>Employee List</h1>
            <ul>
            {props.employees.map((employee, index) => (
            <li key={index}>
              {employee.fname} - {employee.lname} - {employee.title} - {employee.department}
            </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;