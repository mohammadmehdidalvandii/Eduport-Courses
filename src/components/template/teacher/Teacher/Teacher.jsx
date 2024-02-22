import "./Teacher.scss";
import TeacherCard from "../../../module/TeacherCard/TeacherCard";
import db from "../../../../data/db.json"
import { useState } from "react";


function Teacher() {
    const [teacherAll ,setTeacherAll] = useState([...db.teachers])
  return (
    <section className="teacher">
      <div className="container">
        <div className="row">
            {
                teacherAll.map(teacher => (
                    <div className="col-lg-6 col-md-12 col-sm-12" key={teacher.id}>
                    <TeacherCard
                        {...teacher}
                    />
              </div>
                ))
            }
        </div>
      </div>
    </section>
  );
}

export default Teacher;
