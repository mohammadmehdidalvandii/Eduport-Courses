import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Navbar from './components/module/Navbar/Navbar'
import { useState } from "react"

import CoursesContext from "./Context/coursesContext"
import db from './data/db.json'

function App() {
  const router = useRoutes(routes)
  const [courses , setCourses] =useState([...db.courses])
  return (
    <>
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
      }}
    >
    <Navbar/>
    {router}
    </CoursesContext.Provider>
    </>
  )
}

export default App