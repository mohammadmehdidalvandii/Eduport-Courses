import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Navbar from './components/module/Navbar/Navbar'

function App() {
  const router = useRoutes(routes)
  return (
    <>
    <Navbar/>
    {router}
    </>
  )
}

export default App