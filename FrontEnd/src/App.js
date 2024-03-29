import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import EmployeesList from "./components/EmployeesList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <h2 className="navbar-brand">EMPLOYEE MANAGEMENT SYSTEM</h2>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/employees"} className="nav-link">
              EMPLOYEES
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              REGISTER
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/employees"]} component={EmployeesList} />
          <Route exact path="/add" component={AddEmployee} />
          <Route path="/employees/:id" component={Employee} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
