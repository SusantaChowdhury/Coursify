package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entity.Course;
import com.springrest.springrest.service.CourseService;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class MyController {
    @Autowired
    CourseService courseService;

    @GetMapping("/home")
    public String home() {
        return "this is home";
    }

    // To get all the courses
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return courseService.getCourses();
    }

    // To get a specific course by ID
    @GetMapping("/courses/{id}")
    public Course getCourses(@PathVariable String id) {
        return courseService.getCourse(Long.parseLong(id));
    }

    // To add a course
    @PostMapping(path = "/course", consumes = "application/json")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    // To update a course
    @PutMapping("/course")
    public Course updateCourse(@RequestBody Course course) {

        return courseService.updateCourse(course);
    }

    // To delete a course
    @DeleteMapping("/course/{id}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String id) {
        try {
            if (id == null || id.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            courseService.deleteCourse(Long.parseLong(id));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
