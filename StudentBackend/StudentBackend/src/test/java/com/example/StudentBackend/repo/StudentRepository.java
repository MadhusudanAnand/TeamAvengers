package com.example.StudentBackend.repo;

import com.example.StudentBackend.entity.Student;
import com.example.StudentBackend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository  extends JpaRepository<Student,Long> {

}
