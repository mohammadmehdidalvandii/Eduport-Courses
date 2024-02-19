import './HomePopular.scss';
import TitleCenter from '../../../module/TitleCenter/TitleCenter'
import CourseCard from '../../../module/CourseCard/CourseCard';
import { useState, useContext } from 'react';
import coursesContext from '../../../../Context/coursesContext';



function HomePopular() {
    const coursesData = useContext(coursesContext)
    const [menuHomeCourse , setMenuHomeCourse] = useState('web')
//   logic MenuCourse Category
    const handlerBtnCourse=(MenuID)=>{
        setMenuHomeCourse(MenuID)
    }
  return (
    <section className="homePopular">
        <div className="container">
            <div className="row">
                <TitleCenter
                    title='محبوب ترین دوره ها'
                    desc='هر موضوعی را در هر زمان مطالعه کنید. هزاران دوره آموزشی را با کمترین قیمت جستجو کنید!'
                />
            </div>
            <div className="row mt-4">
                <div className="homePopular_buttons">
                    <button className={`homePopular_btn ${menuHomeCourse === 'web' ? "homePopular_btnActive":""}`}
                        onClick={()=>handlerBtnCourse("web")}
                    >طراحی وب</button>
                    <button className={`homePopular_btn ${menuHomeCourse === 'pro' ? "homePopular_btnActive":""}`}
                        onClick={()=>handlerBtnCourse("pro")}
                    >برنامه نویسی</button>
                    <button className={`homePopular_btn ${menuHomeCourse === 'gra' ? "homePopular_btnActive":""}`}
                        onClick={()=>handlerBtnCourse("gra")}
                    >طراحی گرافیکی</button>
                    <button className={`homePopular_btn ${menuHomeCourse === 'mar' ? "homePopular_btnActive":""}`}
                        onClick={()=>handlerBtnCourse("mar")}
                    >دیجیتال مارکتینگ</button>
                    <button className={`homePopular_btn ${menuHomeCourse === 'fin' ? "homePopular_btnActive":""}`}
                        onClick={()=>handlerBtnCourse("fin")}
                    >بازار مالی</button>
                </div>
            </div>
            <div className="row mt-4">

                    {menuHomeCourse === 'web' && ( 
                        coursesData.courses.filter(course => course.category.includes("web")).map(course => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={course.id}>
                            <CourseCard
                            {...course}
                            />
                        </div>
                        ))
                    )}
                    {menuHomeCourse === 'pro' && (
                           coursesData.courses.filter(course => course.category.includes("program")).map(course => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={course.id}>
                            <CourseCard
                            {...course}
                            />
                        </div>
                        ))
                    )}
                    {menuHomeCourse === 'gra' && ( 
                           coursesData.courses.filter(course => course.category.includes("graphic")).map(course => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={course.id}>
                            <CourseCard
                            {...course}
                            />
                        </div>
                        ))
                    )}
                    {menuHomeCourse === 'mar' && ( 
                           coursesData.courses.filter(course => course.category.includes("marketing")).map(course => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={course.id}>
                            <CourseCard
                            {...course}
                            />
                        </div>
                        ))
                    )}
                    {menuHomeCourse === 'fin' && ( 
                           coursesData.courses.filter(course => course.category.includes("finance")).map(course => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={course.id}>
                            <CourseCard
                            {...course}
                            />
                        </div>
                        ))
                    )}
            </div>
        </div>
    </section>
  )
}

export default HomePopular