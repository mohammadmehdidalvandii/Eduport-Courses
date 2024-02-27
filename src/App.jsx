import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Navbar from './components/module/Navbar/Navbar'
import { useState } from "react"

import CoursesContext from "./Context/coursesContext"
import db from './data/db.json'
import Footer from "./components/module/Footer/Footer"

function App() {
  const router = useRoutes(routes)
  const [courses , setCourses] =useState([...db.courses])
  const [userBasket , setUserBasket] =useState([])
  return (
    <>
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        userBasket,
        setUserBasket
      }}
    >
    <Navbar/>
    {router}
    <Footer/>
    </CoursesContext.Provider>
    </>
  )
}

export default App