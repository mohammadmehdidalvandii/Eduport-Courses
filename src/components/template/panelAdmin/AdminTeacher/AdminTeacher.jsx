import TeachCard from "../../../module/TeachCard/TeachCard";
import "./AdminTeacher.scss";
import { MdOutlineSearch } from "react-icons/md";

function AdminTeacher() {
  return (
    <section className="adminTeacher">
      <h4 className="adminDashboard_title">مدرس ها</h4>
      <div className="row">
        <div className="col-12">
          {/* use adminStudent */}
          <div className="adminStudent_search">
            <div className="adminStudent_search_box">
              <input
                type="text"
                className="adminStudent_search_input"
                placeholder="جستجو داشنجو"
              />
              <span className="adminStudent_search_icon">
                <MdOutlineSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4 col-md-6 col-sm-12">
            <TeachCard/>
        </div>
      </div>
    </section>
  );
}

export default AdminTeacher;
