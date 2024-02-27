import HeaderPage from '../../components/module/HeaderPage/HeaderPage'
import CourseDetail from '../../components/template/courseDetails/CourseDetail'
import { useParams } from 'react-router-dom'
import coursesContext from '../../Context/coursesContext';
import { useContext } from 'react'

function CourseDetails() {
  const courseData = useContext(coursesContext)
 
    
  const { id } =useParams();
const foundCourse = courseData.courses.find((course)=> course.id == parseInt(id))
  return (
    <>
      <HeaderPage
        title='جزییات دوره'
        text='جزییات دوره'
      />   
      <CourseDetail {...foundCourse} price={foundCourse.price.toLocaleString()}/>
    </>
  )
}

export default CourseDetails