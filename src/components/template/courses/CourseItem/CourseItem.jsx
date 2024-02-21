import './CourseItem.scss';
import CourseCard from '../../../module/CourseCard/CourseCard'
import CoursesContext from '../../../../Context/coursesContext'
import { useContext, useEffect, useState } from 'react';

function CourseItem() {
    // add use Context Api 
    const coursesData = useContext(CoursesContext)
    const [coursesAll ,setCoursesAll] = useState(coursesData.courses)
    // add logic search course
    const [search , setSearch] =useState("")
    useEffect(()=>{
        let newCourses = coursesAll.filter(course => course.title.toLowerCase().includes(search.toLowerCase()))
        setCoursesAll(newCourses)
    },[coursesData.courses ,search ])
  
  return (
    <section className="CourseItem">
        <div className="container">
            <div className="row">
                <div className="col-12">
                     <div className="CourseItem_wrapper">
                        <div className="CourseItem_search">
                            <input type="text" value={search} className='CourseItem_search_input' placeholder='نام دوره ' onChange={e=>setSearch(e.target.value)}/>
                            {/* <button className="CourseItem_search_btn">جستجو</button>     */}
                        </div>
                        <select className="CourseItem_menu">
                            <option value="" className="CourseItem_menu_item">دسته بندی</option>
                            <option value="" className="CourseItem_menu_item">برنامه نویسی</option>
                            <option value="" className="CourseItem_menu_item">طراحی وب</option>
                            <option value="" className="CourseItem_menu_item">گرافیک</option>
                            <option value="" className="CourseItem_menu_item">دیجیتال مارکتینگ</option>
                            <option value="" className="CourseItem_menu_item">بازارمالی</option>
                        </select>
                     </div>
                </div>
            </div>
            <div className="row mt-4">
                {
                    coursesAll.map(course => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={course.id}>
                        <CourseCard
                            {...course}
                        />
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default CourseItem