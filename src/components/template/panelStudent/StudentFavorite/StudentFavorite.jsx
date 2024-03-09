import './StudentFavorite.scss';
import CourseCard from '../../../module/CourseCard/CourseCard'
import { useContext } from 'react';
import coursesContext from '../../../../Context/coursesContext';
function StudentFavorite() {
    const Coursesdata = useContext(coursesContext)
  return (
   <section className="studentFavorite">
        <div className="row">
            <div className="col-12">
                <h6 className="studentFavorite_title">علاقه مندی های شما</h6>
            </div>
        </div>
        <div className="row mt-2">
                {Coursesdata.courses.slice(0 , 3).map(course=>(
                    <div className="col-lg-4 col-md-6 col-sm-12" key={course.id}>
                    <CourseCard
                        {...course}
                        />
                        </div>
                ))}
        </div>
   </section>
  )
}

export default StudentFavorite