package com.school.management.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.school.management.repository.StudentRepository;

import com.school.management.models.Student;

@Service
public class StudentService {

	@Autowired
	StudentRepository repository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	public List<Student> getAllUsers() {
		List<Student> userList = repository.findAll();

		if (userList.size() > 0) {
			return userList;
		} else {
			return new ArrayList<Student>();
		}
	}

	public Student createUser(Student student) {
		Student _student = student;
		_student.setPassword(bcryptEncoder.encode(student.getPassword()));
		
		return repository.save(_student);
	}

	public Student findUserById(Long id) {
		return repository.findById(id).get();
	}

	public Student updateUser(Student user) {
		return repository.save(user);
	}
}
