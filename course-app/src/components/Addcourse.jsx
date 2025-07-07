import React from 'react'
import { Fragment } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../api/BootApi';
import { toast } from 'react-toastify';

const Addcourse = () => {

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({
        title: '',
        description: ''
    });

    const handleForm = (e) => {
        postData(course);
        e.preventDefault();
    }

    //function to post data to the server
    const postData = (course) => {
        axios.post(`${base_url}/course`, course).then(
            (response) => {
                console.log(response.data);
                toast.success("Course added successfully!", {
                    position: "bottom-center",
                    autoClose: 3000,
                });
            },
            (error) => {
                console.error("Error adding course:", error);
                toast.error("Failed to add course! Please try again.", {
                    position: "bottom-center",
                    autoClose: 3000,
                });
            }
        );
    };

    return (
        <Fragment>
            <div className='w-2/3 my-8 mx-auto flex flex-col bg-gray-600/60 rounded-lg items-center justify-center p-4'>
                <form onSubmit={handleForm}>
                    <h1 className='text-2xl font-bold mb-4'>Add New Course</h1>
                    <div className='mb-4'>
                        <label htmlFor="title" className='block text-gray-700'>Course Title:</label>
                        <input id="title" type='text' value={course.title} onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }} className='w-full p-2 border border-gray-300 rounded' placeholder='Enter course title' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="description" className='block text-gray-700'>Description:</label>
                        <textarea id="description" value={course.description} onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }} className='w-full p-2 border border-gray-300 rounded' placeholder='Enter course description'></textarea>
                    </div>
                    <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500'>Add Course</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Addcourse
