import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import Allcourses from './components/Allcourses'
import Addcourse from './components/Addcourse'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Layout component for shared Navbar and Menu
const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 py-6 mx-auto">
        {/* Sidebar */}
        <aside className="lg:h-full md:min-h-screen lg:col-span-3 sm:rounded-xl sm:h-fit sm:mb-4 bg-gray-500 md:rounded-r-none lg:rounded-r-none shadow-2xl p-4">
          <Menu />
        </aside>

        {/* Main content area */}
        <main className="h-fit lg:h-full lg:col-span-9 md:rounded-l-none lg:rounded-l-none bg-gray-100 overflow-hidden shadow-2xl sm:rounded-xl">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

// Define router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-course',
        element: <Addcourse />
      },
      {
        path: '/view-courses',
        element: <Allcourses />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
