
import StudentCourse from '../../../module/StudentCourse/StudentCourse';
import './StudentListCourse.scss';

function StudentListCourse() {
  return (
    <section className="studentListCourse">
        <div className="row">
            <div className="col-12">
                <h6 className="studentListCourse_title">لیست دوره های شما</h6>
            </div>
        </div>
        <div className="row mt-4">
            <StudentCourse/>
            <StudentCourse/>
            <StudentCourse/>
            <StudentCourse/>
        </div>
    </section> 
  )
}

export default StudentListCourse