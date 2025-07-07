import React from 'react'
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Coursify";
    }, []);
    return (
        <div className="text-center bg-blue-300 p-2">
            <h1 className="text-4xl font-bold">Welcome to Coursify</h1>
            <p className="text-center mt-4 text-lg">Access the courses to Boost your career.</p>
            <button type='button' className="px-4 py-2 m-4 font-semibold text-blue-600 text-xl shadow-lg rounded-lg border-2 bg-blue-200 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out">Get Started</button>
        </div>
    )
}

export default Home
