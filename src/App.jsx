import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Navbar from './components/module/Navbar/Navbar'
import { useState } from "react"

import CoursesContext from "./Context/coursesContext"
import userContext from "./Context/userContext"
import db from './data/db.json'
import Footer from "./components/module/Footer/Footer"

function App() {
  const router = useRoutes(routes)
  const [courses , setCourses] =useState([...db.courses])
  const [users , setUsers] = useState([...db.users])
  const [userBasket , setUserBasket] =useState([])
  const [userInfo , setUserInfo] = useState([])
  return (
    <>
    <userContext.Provider 
    value={{
      users,
      setUsers,
      userInfo,
      setUserInfo
    }}
    >
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        userBasket,
        setUserBasket,
      }}
    >
    <Navbar/>
    {router}
    <Footer/>
    </CoursesContext.Provider>

    </userContext.Provider>
    </>
  )
}

export default App