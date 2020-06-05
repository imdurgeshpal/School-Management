package com.school.management.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.management.models.Teacher;
import com.school.management.repository.TeacherRepository;

@Service
public class TeacherService {

	@Autowired
	TeacherRepository repository;

	public List<Teacher> getAllTeachers() {
		return repository.findAll();
	}

}
