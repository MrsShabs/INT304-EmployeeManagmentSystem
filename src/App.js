import React, { Component } from 'react';
import EmployeeForm from './Component/EmployeeForm.js';
import EmployeeList from './Component/EmployeeList.js';
import EmployeeDetail from './Component/EmployeeDetail.js';
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
      employees: [...prevState.employees, employee].sort((a,b) =>
        a.fname.localeCompare(b.fname))
    }),
    this.saveData
  );
};

render() {
  return (
    <>
    <div className="EmployeeForm">
      <EmployeeForm addEmployee={this.addEmployee} />
      <EmployeeList employees={this.state.employees}/>
      <EmployeeDetail employees={this.state.employees}/>
      </div>
    </>
  );
};
}
export default App;