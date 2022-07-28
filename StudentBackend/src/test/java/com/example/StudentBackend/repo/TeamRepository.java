package com.example.StudentBackend.repo;

import com.example.StudentBackend.entity.Team;
import com.example.StudentBackend.entity.Student;
import com.example.StudentBackend.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team,Long> {
}
