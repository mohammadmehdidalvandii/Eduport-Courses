import "./StudentCourse.scss";
import { NavLink } from 'react-router-dom';
function StudentCourse() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="studentCourse">
        <img src="/assets/images/courses/c1.jpg" alt="student-course" className="studentCourse_img" />
        <h5 className="studentCourse_name">دوره جامع آموزش Sketch</h5>
        <NavLink to='/' className='studentCourse_link'>دیدن دوره</NavLink>
    </div>
</div>
  )
}

export default StudentCourse