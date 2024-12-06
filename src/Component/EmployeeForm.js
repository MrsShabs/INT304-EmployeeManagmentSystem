import React, { useState, Component } from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends Component{
    constructor(props) {
      super(props); 
      this.state = {fname:'', lname:'', phone:'', address:'', email: '', title:'', department:''};
      }
    
// methods for handling input and form submission
handleSubmit= (e)=>{
    e.preventDefault();
    console.log(this.state);
    this.props.addEmployee(this.state);
    this.setState({
        fname:'', lname:'', phone:'', address:'', email: '', title:'', department:''
    });
};

handleChange= (e)=>{
    const {name,value} = e.target;
    this.setState({
        [name]: value
    });
};
 
render(){
    return (
    <div>
        <form className="EmployeeForm" onSubmit={this.handleSubmit}>
            <h1>New Employee</h1>
            <div>
                <label htmlFor="fname"> First Name: </label>
                <input type= "text" name= "fname" id= "fname" onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="lname"> Last Name: </label>
                <input type= "text" name= "lname" id= "lname" onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="phone"> Phone: </label>
                <input type= "text" name= "phone" id= "phone" onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="address"> Address: </label>
                <input type= "text" name= "address" id= "address" onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="email"> Email: </label>
                <input type= "text" name= "email" id= "email" onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="title" id="lbltitle"> Title: </label>
                <input type= "text" name= "title" id= "title" onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="department"> Department: </label>
                <input type= "text" name= "department" id= "department" onChange={this.handleChange}/>
            </div>
            <button type= "submit">Add</button>
        </form>
        </div>
    );

 }
}

export default EmployeeForm;
