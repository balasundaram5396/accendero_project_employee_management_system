package com.app.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.app.ems.entity.EmployeeInfo;
import com.app.ems.service.EmployeeService;


@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(method=RequestMethod.GET,value="/employees")
	public List<EmployeeInfo> getAllEmployees() {
		return employeeService.getAllEmployees();
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/employees/{id}")
	public EmployeeInfo getEmployee(@PathVariable Long id) {
		return employeeService.getEmployee(id);
	}
	@ResponseStatus(value = HttpStatus.CREATED)
	@RequestMapping(method=RequestMethod.POST,value="/employees")
	public void addEmployee(@RequestBody EmployeeInfo data){
		employeeService.addEmployee(data);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/employees/{id}")
	public void updateEmployee(@RequestBody EmployeeInfo data,@PathVariable Long id) {
		employeeService.updateEmployee(data,id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/employees/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/employees")
	public void deleteAllEmployees() {
		employeeService.deleteAll();
	}
	
	
}
