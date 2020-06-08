package com.school.management.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.school.management.services.StudentService;

import com.school.management.models.Student;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/students")
public class StudentController {

	@Autowired
	StudentService service;

	@GetMapping("getAllStudents")
	public List<Student> getAllUsers() {
		return service.getAllUsers();
	}

	@PostMapping("/createNewStudent")
	public ResponseEntity<Student> createUser(@RequestBody Student user) {

		Student _user = service.createUser(user);
		return new ResponseEntity<>(_user, HttpStatus.CREATED);
	}

	@GetMapping("/findUserById/{id}")
	public ResponseEntity<Student> findUserById(@PathVariable("id") long id) {
		Student _user = service.findUserById(id);
		return new ResponseEntity<>(_user, HttpStatus.OK);
	}

	@PostMapping("/updateUser")
	public ResponseEntity<Student> updateUser(@RequestBody Student user) {
		Student _user = service.updateUser(user);
		return new ResponseEntity<>(_user, HttpStatus.CREATED);
	}
}
