package com.springrest.springrest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entity.Course;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao courseDao;

    @Override
    public List<Course> getCourses() {

        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long id) {
        return courseDao.findById(id).orElse(null);
    }

    @Override
    public Course addCourse(Course course) {
        return courseDao.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        Course existingCourse = courseDao.findById(course.getId()).orElse(null);
        if (existingCourse != null) {
            existingCourse.setTitle(course.getTitle());
            existingCourse.setDescription(course.getDescription());
            courseDao.save(existingCourse);
        }
        return existingCourse; // Return the updated course
    }

    @Override
    public void deleteCourse(long id) {
        Course existingCourse = courseDao.findById(id).orElse(null);
        if (existingCourse != null) {
            courseDao.delete(existingCourse);
        }
    }

    @Override
    public Course getCourseByTitle(String title) {
        return courseDao.findByTitle(title);
    }
}
