import React, { Component } from 'react';
import EmployeeForm from './Component/EmployeeForm.js';
import EmployeeList from './Component/EmployeeList.js';
import EmployeeDetail from './Component/EmployeeDetail.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
          {fname:'Katie', lname:'Shab', phone:'123-123-1234', address:'1 Main st Boston, Ma 12345', email:'katie@gmail.com', title:'Tech', department:'Pharmacy'},
          {fname:'John', lname:'Brown', phone:'343-123-5555', address:'1 South st Boston, Ma 12345', email:'john@gmail.com', title:'Tech', department:'Pharmacy'},
          {fname:'Teddy', lname:'Foust', phone:'413-123-3234', address:'1 Front st Boston, Ma 12345', email:'teddy@gmail.com', title:'Pharmacist', department:'Pharmacy'},
          {fname:'Zack', lname:'Gelevoyda', phone:'814-333-7234', address:'1 Fall st Boston, Ma 12345', email:'zack@gmail.com', title:'Tech', department:'Pharmacy'},
          {fname:'Bruce', lname:'Karpenkova', phone:'678-123-3434', address:'1 East st Boston, Ma 12345', email:'bruce@gmail.com', title:'Tech', department:'Pharmacy'},
          {fname:'Oliver', lname:'Smith', phone:'321-123-1212', address:'23 School st Boston, Ma 12345', email:'oliver@gmail.com', title:'Pharmacist', department:'Pharmacy'},
          {fname:'Doug', lname:'Gresh', phone:'413-123-1234', address:'34 West st Boston, Ma 12345', email:'doug@gmail.com', title:'Tech', department:'Pharmacy'},
          {fname:'Sasha', lname:'Ace', phone:'413-123-4434', address:'459 Main st Boston, Ma 12345', email:'sasha@gmail.com', title:'Pharmacist', department:'Pharmacy'},
          {fname:'Serg', lname:'Williams', phone:'413-123-4444', address:'100 Brown st Boston, Ma 12345', email:'serg@gmail.com', title:'Tech', department:'Pharmacy'},
          {fname:'Natalie', lname:'Smith', phone:'413-433-3434', address:'2300 Valley View st Boston, Ma 12345', email:'natalie@gmail.com', title:'Pharmacist', department:'Pharmacy'},
    ]
  };
  }

componentDidMount() {
  const savedEmployees = JSON.parse(localStorage.getItem('employees')) || this.state.employees;
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
      <br></br>
      <EmployeeList employees={this.state.employees}/>
      <br></br>
      <EmployeeDetail employees={this.state.employees}/>
      </div>
    </>
  );
};
}
export default App;