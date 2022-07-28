package com.example.StudentBackend.entity;


import javax.persistence.*;
import javax.transaction.Transactional;

@Entity
@Transactional
@Table(name = "Students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name="Team_id")
    private long Team_id;
    @Column(name="Name")
    private String Name;

    public long getId() {
        return id;
    }
    public  Student()
    {

    }

    public Student(long team_id, String name, long er, long user_Story1, long user_Story2, long user_Story3) {
        super();
        Team_id = team_id;
        Name = name;
        Er = er;
        User_Story1 = user_Story1;
        User_Story2 = user_Story2;
        User_Story3 = user_Story3;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getTeam_id() {
        return Team_id;
    }

    public void setTeam_id(long team_id) {
        Team_id = team_id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public long getEr() {
        return Er;
    }

    public void setEr(long er) {
        Er = er;
    }

    public long getUser_Story1() {
        return User_Story1;
    }

    public void setUser_Story1(long user_Story1) {
        User_Story1 = user_Story1;
    }

    public long getUser_Story2() {
        return User_Story2;
    }

    public void setUser_Story2(long user_Story2) {
        User_Story2 = user_Story2;
    }

    public long getUser_Story3() {
        return User_Story3;
    }

    public void setUser_Story3(long user_Story3) {
        User_Story3 = user_Story3;
    }

    @Column(name="Er")
    private long Er;
    @Column(name="User_Story1")
    private long User_Story1;
    @Column(name="User_Story2")
    private long User_Story2;
    @Column(name="User_Story3")
    private long User_Story3;





}
