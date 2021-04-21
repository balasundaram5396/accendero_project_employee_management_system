package com.app.ems.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EmployeeInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long empId=1L;
	private String empName;
	private String empEmail;
	private Long empPhone;
	private String empDept;
	private Integer empAge;
	
	public Long getEmpId() {
		return empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpEmail() {
		return empEmail;
	}
	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}
	public Long getEmpPhone() {
		return empPhone;
	}
	public void setEmpPhone(Long empPhone) {
		this.empPhone = empPhone;
	}
	public String getEmpDept() {
		return empDept;
	}
	public void setEmpDept(String empDept) {
		this.empDept = empDept;
	}
	public Integer getEmpAge() {
		return empAge;
	}
	public void setEmpAge(Integer empAge) {
		this.empAge = empAge;
	}
	
	
}
