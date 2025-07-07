import React from 'react'
import base_url from '../api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Course = ({ course }) => {

    const deleteCourde = (id) => {
        axios.delete(`${base_url}/course/${id}`).then(
            (response) => {
                console.log("Course deleted successfully:", response.data);
                window.location.reload();
                toast.success("Course deleted successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            })
            .catch((error) => {
                console.error("Error deleting course:", error);
                toast.error("Something went wrong while deleting the course.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            });
    }

    return (
        <div>
            <div className="m-2 flex flex-col items-center bg-gray-700 rounded-xl shadow-lg shadow-blue-300 hover:shadow-xl hover:shadow-blue-400 hover:-translate-y-1 transition-all duration-500">

                <div className="flex flex-col p-4">
                    <h1 className="text-4xl font-bold text-center mt-10 text-white">{course.title}</h1>
                    <p className="text-center mt-4 text-lg text-white">{course.description}</p>
                    <div className="flex justify-center items-center">
                        <button type='button' className="px-4 py-2 m-4 rounded-lg font-semibold text-gray-300 border-2 bg-blue-600 border-blue-500 hover:bg-blue-500 hover:text-white transition-all">Enroll Now</button>
                        <button type='button' onClick={() => {
                            deleteCourde(course.id);
                        }} className="px-4 py-2 m-4 rounded-lg font-semibold text-white border-2 border-blue-500 bg-gray-500 hover:bg-blue-500 hover:text-white transition-all">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
