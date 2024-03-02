import StudentCard from '../../../module/StudentCard/StudentCard';
import './AdminStudent.scss';
import { MdOutlineSearch } from "react-icons/md";


function AdminStudent() {
  return (
   <section className="adminStudent">
         <h4 className="adminDashboard_title">دانشجوها</h4>
         <div className="row">
            <div className="col-12">
                <div className="adminStudent_search">
                    <div className="adminStudent_search_box">
                    <input type="text" className='adminStudent_search_input' placeholder='جستجو داشنجو' />
                    <span className="adminStudent_search_icon">
                        <MdOutlineSearch/>
                    </span>
                    </div>
                </div>
            </div>
         </div>
        <div className="row mt-4">
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

export default AdminStudent