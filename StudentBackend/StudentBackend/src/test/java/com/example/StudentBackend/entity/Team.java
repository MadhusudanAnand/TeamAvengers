package com.example.StudentBackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

@Entity
@Transactional
@Table(name = "Team")
public class Team {
    @Id
    @Column(name = "teamid")
    private  long team;
    @Column(name = "score")
    private  long score;

    public Team()
    {

    }
    public Team(long score) {
        super();
        this.score = score;
    }

    public long getTeam() {
        return team;
    }

    public void setTeam(long team) {
        this.team = team;
    }

    public long getScore() {
        return score;
    }

    public void setScore(long score) {
        this.score = score;
    }
}
