import React, { useState, useEffect } from "react";
import EmployeeDataService from "../services/EmployeeService";

const Employee = (props) => {
  const initialEmployeeState = {
    empId: null,
    empName: "",
    empEmail: "",
    empPhone: null,
    empDept: "",
    empAge: null,
  };
  const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);
  const [message, setMessage] = useState("");

  const getEmployee = (empId) => {
    EmployeeDataService.get(empId)
      .then((response) => {
        setCurrentEmployee(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const updatePublished = (status) => {
    var data = {
      empId: currentEmployee.empId,
      empName: currentEmployee.empName,
      empEmail: currentEmployee.empEmail,
      empPhone: currentEmployee.empPhone,
      empDept: currentEmployee.empDept,
      empAge: currentEmployee.empAge,
    };

    EmployeeDataService.update(currentEmployee.empId, data)
      .then((response) => {
        setCurrentEmployee({ ...currentEmployee, published: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateEmployee = () => {
    console.log("update id is " + currentEmployee.empId);
    EmployeeDataService.update(currentEmployee.empId, currentEmployee)
      .then((response) => {
        console.log(response.data);
        setMessage("Employee details updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEmployee = () => {
    EmployeeDataService.remove(currentEmployee.empId)
      .then((response) => {
        console.log(response.data);
        props.history.push("/employees");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEmployee ? (
        <div className="edit-form">
          <h4>Employee</h4>
          <form>
            <div className="form-group">
              <label htmlFor="description">Name</label>
              <input
                type="text"
                className="form-control"
                id="empName"
                name="empName"
                value={currentEmployee.empName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Email</label>
              <input
                type="text"
                className="form-control"
                id="empEmail"
                name="empEmail"
                value={currentEmployee.empEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Phone</label>
              <input
                type="text"
                className="form-control"
                id="empPhone"
                name="empPhone"
                value={currentEmployee.empPhone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Department</label>
              <input
                type="text"
                className="form-control"
                id="empDept"
                name="empDept"
                value={currentEmployee.empDept}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Age</label>
              <input
                type="text"
                className="form-control"
                id="empAge"
                name="empAge"
                value={currentEmployee.empAge}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteEmployee}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateEmployee}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Select an employee</p>
        </div>
      )}
    </div>
  );
};

export default Employee;
