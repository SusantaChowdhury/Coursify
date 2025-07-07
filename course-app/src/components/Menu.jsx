import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='py-1 text-gray-800'>
            <p className="text-xl font-semibold p-2">Menu</p>

            <ul className="m-2">
                <Link to="/"><li className="p-2 m-2 text-white rounded border bg-gray-600 shadow-lg hover:text-yellow-500">Home</li></Link>
                <Link to="/add-course"><li className="p-2 m-2 text-white rounded border bg-gray-600 shadow-lg hover:text-yellow-500">Add Course</li></Link>
                <Link to="/view-courses"><li className="p-2 m-2 text-white rounded border bg-gray-600 shadow-lg hover:text-yellow-500">View Courses</li></Link>
            </ul>
        </div >
    )
}

export default Menu
