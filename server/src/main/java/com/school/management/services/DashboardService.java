package com.school.management.services;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.management.repository.StudentRepository;
import com.school.management.repository.TeacherRepository;

@Service
public class DashboardService {

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	TeacherRepository teacherRepository;

	public HashMap<String, Integer> getUsersCount() {
		HashMap<String, Integer> userCount = new HashMap<>();
		userCount.put("students_count", (int) studentRepository.count());
		userCount.put("teachers_count", (int) teacherRepository.count());
		return userCount;
	}

}
