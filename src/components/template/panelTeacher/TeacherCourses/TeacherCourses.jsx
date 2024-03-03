import './TeacherCourses.scss'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import coursesContext from '../../../../Context/coursesContext'
import { useContext } from 'react';



function TeacherCourses() {
    const coursesData = useContext(coursesContext)
  return (
   <section className="teacherCourses">
        <div className="row">
            <div className="col-12">
                {coursesData.courses.slice(0 , 5).map(course=>(
                          <div className="teacherCourses_item" key={course.id}>
                          <div className="teacherCourses_item_info">
                              <img src={course.image} alt="" className="teacherCourses_info_img" />
                              <span className="teacherCourses_info_name">{course.title}</span>
                          </div>
                          <span className="teacherCourses_item_student"> تعداد دانشجو : 213</span>
                          <span className="teacherCourses_item_status">فعال</span>
                          <div className="teacherCourses_item_action">
                              <button className="teacherCourses_item_btn btn_edit">
                                  <FaRegEdit/>
                              </button>
                              <button className="teacherCourses_item_btn btn_remove">
                                  <MdDelete/>
                              </button>
                          </div>
                      </div>
                ))}
            </div>
        </div>
   </section>
  )
}

export default TeacherCourses