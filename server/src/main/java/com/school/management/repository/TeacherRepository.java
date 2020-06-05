package com.school.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.management.models.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
