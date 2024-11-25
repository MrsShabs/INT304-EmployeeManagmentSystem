import React, { Component, useState } from 'react';
import EmployeeForm from './Component/EmployeeForm.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

componentDidMount() {
  const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
  this.setState({ employees: savedEmployees });
}


saveData = () => {
  localStorage.setItem('employees', JSON.stringify(this.state.employees));
  };

addEmployee = (employee) => {
  this.setState(
    (prevState) => ({
      employees: [...prevState.employees, employee]
    }),
    this.saveData
  );
};

render() {
  return (
    <div className="EmployeeForm">
      <EmployeeForm addEmployee={this.addEmployee} />
      <h2>Employee List</h2>
            <ul>
          {this.state.employees.map((emp, index) => (
            <li key={index}>
              {emp.name} - {emp.email} - {emp.title} - {emp.department}
            </li>
          ))}
            </ul>
    </div>
  );
}
}
export default App;
