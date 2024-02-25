import Home from './page/Home/Home';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Courses from './page/Courses/Courses';
import CourseDetails from './page/CourseDetails/CourseDetails';
import Article from './page/Article/Article';
import ArticleDetails from './page/ArticleDetails/ArticleDetails';
import Teachers from './page/Teachers/Teachers';
import TeacherDetails from './page/TeacherDetails/TeacherDetails';
import Basket from './page/Basket/Basket';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

const routes = [
    {path: '/' , element: <Home/>},
    {path: '/About' , element: <About/>},
    {path: '/Contact' , element: <Contact/>},
    {path: '/Courses' , element: <Courses/>},
    {path: '/Course_d/:id/:title' , element: <CourseDetails/>},
    {path: '/Article' , element: <Article/>},
    {path: '/Article_d' , element: <ArticleDetails/>},
    {path: '/Teachers' , element: <Teachers/>},
    {path: '/Teacher_d' , element: <TeacherDetails/>},
    {path: '/Basket' , element: <Basket/>},
    {path: '/Login' , element: <Login/>},
    {path: '/Register' , element: <Register/>},
]



export default routes