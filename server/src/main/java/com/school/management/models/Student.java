package com.school.management.models;

import java.util.HashMap;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "sms_students")
public class Student extends UserVo {
	

	@OneToMany(mappedBy="student", cascade = CascadeType.ALL)
	private List<Gaurdian> gaurdian;

	/**
	 * @return the gaurdian
	 */
	public List<Gaurdian> getGaurdian() {
		return gaurdian;
	}

	/**
	 * @param gaurdian the gaurdian to set
	 */
	public void setGaurdian(List<Gaurdian> gaurdian) {
		this.gaurdian = gaurdian;
	}
}
