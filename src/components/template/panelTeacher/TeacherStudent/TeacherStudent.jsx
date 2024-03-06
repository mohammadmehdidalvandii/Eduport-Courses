import './TeacherStudent.scss';
import { MdOutlineSearch } from "react-icons/md";
import StudentCard from '../../../module/StudentCard/StudentCard'

function TeacherStudent() {
  return (
    <section className="teacherStudent">
        <div className="row">
            <div className="col-12">
                    <h6 className="teacherStudent_title">دانشجو های شما </h6>
                    <div className="teacherStudent_search">
                        <input type="text" className="teacherStudent_search_input" placeholder='جستجو دانشجو'/>
                        <button className="teacherStudent_search_btn">
                            <MdOutlineSearch/>
                        </button>
                    </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
            <StudentCard/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <StudentCard/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <StudentCard/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <StudentCard/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <StudentCard/>
            </div>
        </div>
    </section>
  )
}

export default TeacherStudent