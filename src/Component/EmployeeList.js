import React from 'react';


function EmployeeList(props) {
    return(
    <>
    <div>
        <h1>Employee List</h1>
    </div>
    <div className="EmployeeList">
         <ul>
            {props.employees.map((employee, index) => (
                <li key={index}>
                    <a href={"#" + index} > {employee.fname} - {employee.lname} - {employee.title} - {employee.department} </a>
                </li>
                    ))}
                </ul>
    </div>
    </>
    );
}

export default EmployeeList;