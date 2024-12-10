import React, { Component } from 'react';
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
        <h1>New Employee</h1>
        <form className="EmployeeForm" onSubmit={this.handleSubmit}>
            <div className="container-flexlible">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="fname"> First Name: </label>
                    <input type="text" className="form-control" id="fname" name ="fname" placeholder="First name" onChange={this.handleChange} />    
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="lname"> Last Name: </label>
                    <input type="text" className="form-control" id="lname" name ="lname"placeholder="Last name" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="address"> Address: </label>
                <input type="text" className="form-control" id="address" name ="address"placeholder="Address" onChange={this.handleChange} />
            </div>
            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="phone"> Phone: </label>
                <input type="text" className="form-control" id="phone" name ="phone"placeholder="Phone" onChange={this.handleChange} />    
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="email"> Email: </label>
                <input type="text" className="form-control" id="email" name ="email" placeholder="Email" onChange={this.handleChange} />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="title"> Title: </label>
                <input type="text" className="form-control" id="title" name ="title" placeholder="Title" onChange={this.handleChange} />    
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="department"> Department: </label>
                <input type="text" className="form-control" id="department" name ="department" placeholder="Department" onChange={this.handleChange} />
            </div>
            </div>
            <div className="row"> 
                <div className="col-4">
                <button type="submit" className="btn btn-primary"> Add </button> 
                </div>
            </div>
            </div>          
        </form>
    </div>
    );

 }
}

export default EmployeeForm;