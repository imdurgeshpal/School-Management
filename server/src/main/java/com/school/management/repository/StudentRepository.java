package com.school.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.management.models.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
	Student findByUsername(String username);

}
