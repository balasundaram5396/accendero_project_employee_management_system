import React, { useState } from "react";
import EmployeeDataService from "../services/EmployeeService";

const AddEmployee = () => {
  const initialEmployeeState = {
    empName: null,
    empEmail: null,
    empPhone: null,
    empDept: null,
    empAge: null,
  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    var data = {
      empName: employee.empName,
      empEmail: employee.empEmail,
      empPhone: employee.empPhone,
      empDept: employee.empDept,
      empAge: employee.empAge,
    };

    EmployeeDataService.create(data)
      .then((response) => {
        setEmployee({
          empName: response.data.empName,
          empEmail: response.data.empEmail,
          empPhone: response.data.empPhone,
          empDept: response.data.empDept,
          empAge: response.data.empAge,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
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
            <label htmlFor="empName">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="empName"
              required
              value={employee.empName}
              onChange={handleInputChange}
              name="empName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="empEmail">Employee E-mail</label>
            <input
              type="text"
              className="form-control"
              id="empEmail"
              required
              value={employee.empEmail}
              onChange={handleInputChange}
              name="empEmail"
            />
          </div>

          <div className="form-group">
            <label htmlFor="empPhone">Employee Phone</label>
            <input
              type="text"
              className="form-control"
              id="empPhone"
              required
              value={employee.empPhone}
              onChange={handleInputChange}
              name="empPhone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="empDept">Department</label>
            <input
              type="text"
              className="form-control"
              id="empDept"
              required
              value={employee.empDept}
              onChange={handleInputChange}
              name="empDept"
            />
          </div>

          <div className="form-group">
            <label htmlFor="empAge">Age</label>
            <input
              type="text"
              className="form-control"
              id="empAge"
              required
              value={employee.empAge}
              onChange={handleInputChange}
              name="empAge"
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
