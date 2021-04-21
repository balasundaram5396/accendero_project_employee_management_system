package com.app.ems.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.app.ems.entity.EmployeeInfo;

public interface EmployeeRepository extends CrudRepository<EmployeeInfo,Long> {

}
