package com.app.ems.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ems.entity.EmployeeInfo;
import com.app.ems.exceptions.MyResourceNotFoundException;
import com.app.ems.exceptions.MyResourceRequestInvalid;
import com.app.ems.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public List<EmployeeInfo> getAllEmployees(){
		List<EmployeeInfo> data = new ArrayList<>();
		employeeRepository.findAll().forEach(data::add);
		return data;
	}	
	
	public EmployeeInfo getEmployee(Long id) {
		Optional<EmployeeInfo> employee=employeeRepository.findById(id);
		if (!employee.isPresent()) {
	        throw new MyResourceNotFoundException("Event with id: "+id+" does not exist");
	    }
		return employee.get();
	}
	
	public void addEmployee(EmployeeInfo data) {
		if(data.getEmpAge()==null || data.getEmpDept()==null || data.getEmpEmail()==null || data.getEmpId()==null || data.getEmpName()==null || data.getEmpPhone()==null) {
	        throw new MyResourceRequestInvalid("Invalid Request");
		}
		else {
			employeeRepository.save(data);
		}
	}
	
	public void updateEmployee(EmployeeInfo data, Long id) {
		Optional<EmployeeInfo> sc=employeeRepository.findById(id);
		if (!sc.isPresent()) {
	        throw new MyResourceNotFoundException("Event with id: "+id+" does not exist");
	    }
		employeeRepository.save(data);
	}
	public void deleteEmployee(Long id) {
		Optional<EmployeeInfo> data=employeeRepository.findById(id);
		if (!data.isPresent()) {
	        throw new MyResourceNotFoundException("Event with id: "+id+" does not exist");
	    }
		employeeRepository.deleteById(id);
	}
	
	public void deleteAll() {
		employeeRepository.deleteAll();
	}
	
	
	
}
