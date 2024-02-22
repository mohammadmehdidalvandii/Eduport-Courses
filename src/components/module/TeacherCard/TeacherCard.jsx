import { NavLink } from 'react-router-dom';
import './TeacherCard.scss';

// using FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function TeacherCard() {
  return (
    <NavLink className="teacherCard d-md-flex d-block">
    <img
      src="/assets/images/teacher/t1.jpg"
      alt="teacher-image"
      className="teacherCard_img"
    />
    <div className="teacherCard_content">
      <div className="teacherCard_name_job">
        <h6 className="teacherCard_name">میلاد ناصری</h6>
        <span className="teacherCard_job">مدرس دانشگاه تهران</span>
      </div>
      <div className="teacherCard_score">
        <span className="teacherCard_score_icon">
          <FontAwesomeIcon icon={faStar}/>
        </span>
        <span className="teacherCard_score_number">4.3</span>
      </div>
      <p className="teacherCard_desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
      <span className="teacherCard_learn">دیجیتال مارکتنیگ</span>
    </div>
  </NavLink>
  )
}

export default TeacherCard