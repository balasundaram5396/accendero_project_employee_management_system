import React, { useState, useEffect } from "react";
import EmployeeDataService from "../services/EmployeeService";


const Employee = props => {
  const initialEmployeeState = {
    id: null,
    name: "",
    email: "",
    phone: null,
    dept: "",
    age: null,

  };
  const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);
  const [message, setMessage] = useState("");

  const getEmployee = id => {
    EmployeeDataService.get(id)
      .then(response => {
        setCurrentEmployee(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentEmployee.id,
      name: currentEmployee.name,
      email: currentEmployee.email,
      phone: currentEmployee.phone,
      dept: currentEmployee.dept,
      age: currentEmployee.age
    };

    EmployeeDataService.update(currentEmployee.id, data)
      .then(response => {
        setCurrentEmployee({ ...currentEmployee, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateEmployee = () => {
    EmployeeDataService.update(currentEmployee.id, currentEmployee)
      .then(response => {
        console.log(response.data);
        setMessage("Employee details updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteEmployee = () => {
    EmployeeDataService.remove(currentEmployee.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/employees");
      })
      .catch(e => {
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
            <label htmlFor="title">Employee ID</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={currentEmployee.id}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={currentEmployee.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={currentEmployee.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={currentEmployee.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Department</label>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={currentEmployee.department}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              value={currentEmployee.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>
              <strong>Status:</strong>
            </label>
            {currentEmployee.published ? "Registered" : "Pending"}
          </div>
        </form>

        {currentEmployee.published ? (
          <button
            className="badge badge-primary mr-2"
            onClick={() => updatePublished(false)}
          >
            UnPublish
          </button>
        ) : (
          <button
            className="badge badge-primary mr-2"
            onClick={() => updatePublished(true)}
          >
            Publish
          </button>
        )}

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