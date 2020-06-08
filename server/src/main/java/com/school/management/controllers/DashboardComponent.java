package com.school.management.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;

import com.school.management.models.Student;
import com.school.management.services.DashboardService;

@RestController
@CrossOrigin
@RequestMapping("/dashboard")
public class DashboardComponent {
	
	@Autowired
	DashboardService dashboardService;

	
	@GetMapping("/getUsersCount")
	public ResponseEntity<HashMap<String, Integer>> getUsersCount() {
		HashMap<String, Integer> _count = dashboardService.getUsersCount();
		return new ResponseEntity<>(_count, HttpStatus.OK);
	}
	

}
