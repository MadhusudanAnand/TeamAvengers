package com.example.StudentBackend.controller;

import com.example.StudentBackend.entity.Team;
import com.example.StudentBackend.repo.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class TeamController {
    @Autowired
    private TeamRepository teamRepository;

    @GetMapping("/teams")
    public List<Team> getAllTeams()
    {

        return teamRepository.findAll();
    }
}
