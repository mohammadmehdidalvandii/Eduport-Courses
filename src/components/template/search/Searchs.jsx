import './Searchs.scss';
import coursesContext from '../../../Context/coursesContext';
import { useContext, useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../../module/CourseCard/CourseCard';

function Searchs() {
    const courseData = useContext(coursesContext);
    const [courses , setCourses] = useState([])

    // result search client
    const {value} =useParams()
    useEffect(()=>{
        const searchCourse = courseData.courses.filter(course => course.title.toLowerCase().includes(value.toLowerCase()))
        setCourses(searchCourse)
    },[value, courseData.courses])
    
  return (
    <section className="search">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="search_title">نتیجه های جستجو شما </h2>
                </div>
            </div>
            <div className="row mt-4">
                {
                    courses.map(course=>(
                        <div className="col-lg-4 col-md-6 col-sm-12" key={course.id}>
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

export default Searchs