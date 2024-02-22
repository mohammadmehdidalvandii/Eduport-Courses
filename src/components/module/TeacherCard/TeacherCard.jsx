import { NavLink } from 'react-router-dom';
import './TeacherCard.scss';

// using FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function TeacherCard({image , name , job, score , desc, learn}) {
  return (
    <NavLink className="teacherCard d-md-flex d-block">
    <img
      src={image}
      alt="teacher-image"
      className="teacherCard_img"
    />
    <div className="teacherCard_content">
      <div className="teacherCard_name_job">
        <h6 className="teacherCard_name">{name}</h6>
        <span className="teacherCard_job">{job}</span>
      </div>
      <div className="teacherCard_score">
        <span className="teacherCard_score_icon">
          <FontAwesomeIcon icon={faStar}/>
        </span>
        <span className="teacherCard_score_number">{score}</span>
      </div>
      <p className="teacherCard_desc">{desc}</p>
      <span className="teacherCard_learn">{learn}</span>
    </div>
  </NavLink>
  )
}

export default TeacherCard