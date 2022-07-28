package com.example.StudentBackend.controller;

import com.example.StudentBackend.exception.ResourceNotFoundException;
import com.example.StudentBackend.entity.Student;
import com.example.StudentBackend.repo.StudentRepository;
import com.example.StudentBackend.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents()
    {

        return studentRepository.findAll();
    }
    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student)
    {
        return studentRepository.save(student);
    }
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
        return ResponseEntity.ok(student);
    }

    // update employee rest api

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails){
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));

        student.setName(studentDetails.getName());
        student.setEr(studentDetails.getEr());
        student.setUser_Story1(studentDetails.getUser_Story1());
        student.setUser_Story2(studentDetails.getUser_Story2());
        student.setUser_Story3(studentDetails.getUser_Story3());

        Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }



}
