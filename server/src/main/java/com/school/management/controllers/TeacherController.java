package com.school.management.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.school.management.models.Teacher;
import com.school.management.services.TeacherService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/teacher")
public class TeacherController {

	@Autowired
	TeacherService teacherService;

	@GetMapping("getAllTeachers")
	public List<Teacher> getAllTeachers() {
		return teacherService.getAllTeachers();
	}
	
	@PostMapping("createNewTeacher")
	public Teacher createNewTeacher(@RequestBody Teacher teacher) {
		return teacherService.createNewTeacher(teacher);
	}

}
