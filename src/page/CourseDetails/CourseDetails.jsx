import HeaderPage from '../../components/module/HeaderPage/HeaderPage'
import CourseDetail from '../../components/template/courseDetails/CourseDetail'
import { useParams } from 'react-router-dom'
import coursesContext from '../../Context/coursesContext';
import { useContext } from 'react'

function CourseDetails() {
  const courseData = useContext(coursesContext)
 
  // get detail course
  const { id } =useParams();
  const foundCourse = courseData.courses.find((course)=> course.id == parseInt(id))

  //  add course to Basket
  const addToBasket = ()=>{
    
    let newUserBasket = {
      id: foundCourse.id,
      title: foundCourse.title,
      price: foundCourse.price,
      count: foundCourse.count,
      image: foundCourse.image,
    }
    courseData.setUserBasket((prevBasket) => [...prevBasket , newUserBasket])
  }

  return (
    <>
      <HeaderPage
        title='جزییات دوره'
        text='جزییات دوره'
      />   
      <CourseDetail {...foundCourse} price={foundCourse.price.toLocaleString()} addToBasket={addToBasket}/>
    </>
  )
}

export default CourseDetails