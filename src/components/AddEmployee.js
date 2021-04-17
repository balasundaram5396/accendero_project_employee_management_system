import React, { useState } from "react";
import EmployeeDataService from "../services/EmployeeService";

const AddEmployee = () => {
  const initialEmployeeState = {
    id: null,
    name: "",
    email: "",
    phone: null,
    dept: "",
    age: null,

  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    var data = {
      id: employee.id,
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      dept: employee.dept,
      age: employee.age
    };

    EmployeeDataService.create(data)
      .then(response => {
        setEmployee({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          dept: response.data.dept,
          age: response.data.age
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
    {submitted ? (
      <div>
        <h4>Registered successfully!</h4>
        <button className="btn btn-success" onClick={newEmployee}>
          Add
        </button>
      </div>
    ) : (
      <div>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            required
            value={employee.id}
            onChange={handleInputChange}
            name="employeeId"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            required
            value={employee.name}
            onChange={handleInputChange}
            name="description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeEmail">Employee E-mail</label>
          <input
            type="text"
            className="form-control"
            id="employeeEmail"
            required
            value={employee.email}
            onChange={handleInputChange}
            name="employeeEmail"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeePhone">Employee Phone</label>
          <input
            type="text"
            className="form-control"
            id="employeePhone"
            required
            value={employee.phone}
            onChange={handleInputChange}
            name="employeePhone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeDepartment">Department</label>
          <input
            type="text"
            className="form-control"
            id="employeeDepartment"
            required
            value={employee.dept}
            onChange={handleInputChange}
            name="employeeDepartment"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeAge">Age</label>
          <input
            type="text"
            className="form-control"
            id="employeeAge"
            required
            value={employee.age}
            onChange={handleInputChange}
            name="employeeAge"
          />
        </div>

        <button onClick={saveEmployee} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>
  );
};

export default AddEmployee;