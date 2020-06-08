package com.school.management.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "sms_teachers")
public class Teacher extends UserVo {
	
	private String employeeId;

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
}
