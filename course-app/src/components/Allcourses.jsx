import { useState, useEffect } from 'react';
import Course from './Course';
import base_url from '../api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourses = () => {



  const getALlCourses = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {

        toast.success("Courses fetched successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        setCourses(response.data);
        console.log(response.data);
      },
      (error) => {
        console.error("Error fetching courses:", error);

        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 3000,
        });

        // setCourses([]);
      }
    )
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses";
    getALlCourses();
  }, []);

  return (
    <div className="px-6 py-8 mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our curated list of available courses:
      </p>

      {courses.length > 0 ? (
        <div className="mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((item) => (
            <Course key={item.id} course={item} />
          ))}
        </div>
      ) : (
        <p className="text-red-500 font-medium text-center">No courses available.</p>
      )}
    </div>
  );
};

export default Allcourses;
