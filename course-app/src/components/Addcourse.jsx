import React from 'react'
import { Fragment } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../api/BootApi';
import { toast } from 'react-toastify';

const Addcourse = () => {

    useEffect(() => { }, []);

    const [course, setCourse] = useState({
        title: '',
        description: ''
    });

    const handleForm = (e) => {
        e.preventDefault(); // prevent default form behavior first
        if (course.title.trim() === '' || course.description.trim() === '') {
            toast.error("Title and Description cannot be empty!", {
                position: "bottom-center",
                autoClose: 3000,
            });
            return;
        }

        postData(course);
    };

    // Function to post data
    const postData = (course) => {
        // Check if course with same title exists
        axios.get(`${base_url}/course/${course.title}`).then(
            (response) => {
                // If course exists
                toast.warning("A course with this title already exists!", {
                    position: "bottom-center",
                    autoClose: 3000,
                });
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    // No existing course, proceed to add
                    axios.post(`${base_url}/course`, course).then(
                        (response) => {
                            console.log(response.data);
                            toast.success("Course added successfully!", {
                                position: "bottom-center",
                                autoClose: 3000,
                            });
                            setCourse({ title: '', description: '' }); // Reset
                        },
                        (error) => {
                            console.error("Error adding course:", error);
                            toast.error("Failed to add course! Please try again.", {
                                position: "bottom-center",
                                autoClose: 3000,
                            });
                        }
                    );
                } else {
                    // Other error (like server error)
                    toast.error("Something went wrong while checking duplicates.", {
                        position: "bottom-center",
                        autoClose: 3000,
                    });
                }
            });
    };


    return (
        <Fragment>
            <div className='w-2/3 my-8 mx-auto flex flex-col bg-gray-300 shadow-2xl rounded-lg items-center justify-center p-4'>
                <form onSubmit={handleForm} className='w-2/3 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-bold mb-4'>Add New Course</h1>

                    <div className='mb-4 w-full'>
                        <label htmlFor="title" className='block text-gray-600 font-semibold'>Course Title:</label>
                        <input
                            id="title"
                            type='text'
                            value={course.title}
                            onChange={(e) => setCourse({ ...course, title: e.target.value })}
                            className='w-full p-2 border text-white bg-gray-500 rounded'
                            placeholder='Enter course title'
                        />
                    </div>

                    <div className='mb-4 w-full'>
                        <label htmlFor="description" className='block text-gray-600 font-semibold'>Description:</label>
                        <textarea
                            id="description"
                            value={course.description}
                            onChange={(e) => setCourse({ ...course, description: e.target.value })}
                            className='w-full p-2 border text-white bg-gray-500 border-gray-500 rounded'
                            placeholder='Enter course description'
                        />
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-all'>Add Course</button>
                        <button
                            type='reset'
                            onClick={() => setCourse({ title: '', description: '' })}
                            className='ml-4 px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600 transition-all'
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Addcourse
