import HeaderPage from '../../components/module/HeaderPage/HeaderPage'
import CourseDetail from '../../components/template/courseDetails/CourseDetail'
import { useParams } from 'react-router-dom'
import coursesContext from '../../Context/coursesContext';
import { useContext } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import swal from 'sweetalert';

function CourseDetails() {
  const courseData = useContext(coursesContext)
 
  // get detail course
  const { id } =useParams();
  const foundCourse = courseData.courses.find((course)=> course.id == parseInt(id))

  //  add course to Basket
  const addToBasket = ()=>{
    let isInCourseBasket = courseData.userBasket.some(basket => 
        basket.name === foundCourse.name && basket.id === foundCourse.id
      )
      if(isInCourseBasket){
          swal({
            text:"دوره در سبد خرید وجود دار",
            icon: "warning",
            button:"باشه"
          })
      }else{
        let newUserBasket = {
          id: foundCourse.id,
          title: foundCourse.title,
          price: foundCourse.price,
          count: foundCourse.count,
          image: foundCourse.image,
        }
        courseData.setUserBasket((prevBasket) => [...prevBasket , newUserBasket])
        toast.success('دوره به سبد خرید اضافه شد', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
  }

  return (
    <>
      <HeaderPage
        title='جزییات دوره'
        text='جزییات دوره'
      />   
      <CourseDetail {...foundCourse} price={foundCourse.price.toLocaleString()} addToBasket={addToBasket }/>
    </>
  )
}

export default CourseDetails