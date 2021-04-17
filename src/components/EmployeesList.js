import React, { useState, useEffect } from "react";
import EmployeeDataService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [currentPos, setCurrentPos] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveEmployees();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveEmployees = () => {
    EmployeeDataService.getAll()
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEmployees();
    setCurrentEmployee(null);
    setCurrentPos(-1);
  };

  const setActiveEmployee = (employee, pos) => {
    setCurrentEmployee(employee);
    setCurrentPos(pos);
  };

  const removeAllEmployees = () => {
    EmployeeDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    EmployeeDataService.findByName(searchName)
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
    <div className="col-md-8">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Employee Name"
          value={searchName}
          onChange={onChangeSearchName}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByName}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <h4>Employees List</h4>

      <ul className="list-group">
        {employees &&
          employees.map((employee, index) => (
            <li
              className={
                "list-group-item " + (index === currentPos ? "active" : "")
              }
              onClick={() => setActiveEmployee(employee, index)}
              key={index}
            >
              {employee.name}
            </li>
          ))}
      </ul>

      <button
        className="m-3 btn btn-sm btn-danger"
        onClick={removeAllEmployees}
      >
        Remove All
      </button>
    </div>
    <div className="col-md-6">
      {currentEmployee ? (
        <div>
          <h4>Employee</h4>

          <div>
            <label>
              <strong>Employee ID:</strong>
            </label>{" "}
            {currentEmployee.id}
          </div>

          <div>
            <label>
              <strong>Name:</strong>
            </label>{" "}
            {currentEmployee.name}
          </div>

          <div>
            <label>
              <strong>Email:</strong>
            </label>{" "}
            {currentEmployee.email}
          </div>

          <div>
            <label>
              <strong>Phone:</strong>
            </label>{" "}
            {currentEmployee.phone}
          </div>

          <div>
            <label>
              <strong>Department:</strong>
            </label>{" "}
            {currentEmployee.dept}
          </div>

          <div>
            <label>
              <strong>Age:</strong>
            </label>{" "}
            {currentEmployee.age}
          </div>

          <div>
            <label>
              <strong>Status:</strong>
            </label>{" "}
            {currentEmployee.published ? "Registered" : "Pending"}
          </div>

          <Link
            to={"/employees/" + currentEmployee.id}
            className="badge badge-warning"
          >
            Edit info
          </Link>
        </div>
      ) : (
        <div>
          <br />
          <p>Select an Employee</p>
        </div>
      )}
    </div>
  </div>
  );
};

export default EmployeesList;