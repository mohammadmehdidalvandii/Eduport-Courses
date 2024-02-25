import { NavLink } from 'react-router-dom'
import './CourseCard.scss'

// using fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faTable } from '@fortawesome/free-solid-svg-icons';

function CourseCard({image , level , title , time , video,id}) {
  return (
    <NavLink to={`/Course_d/${id}/${title}`} className="courseCard">
    <img src={image} alt="course-image" className="courseCard_img" />

    <div className="courseCard_level_addFavorite">
        <span className="courseCard_level_text">{level}</span>
        <span className="courseCard_addFavorite">
            <FontAwesomeIcon icon={faHeart}/>
        </span>
    </div>
    
    <div className="courseCard_content">
     <h5 className="courseCard_title">{title}</h5>
      <p className="courseCard_desc">
      با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
      </p>
    </div>
    <span className="courseCard_score">
        5.0 / 4.7
    </span>

    <div className="courseCard_video_time">
        <div className="courseCard_time">
            <span className="courseCard_time_icon">
                <FontAwesomeIcon icon={faClock}/>
            </span>
            <span className="courseCard_time_text">{time}</span>
        </div>
        <div className="courseCard_video">
            <span className="courseCard_video_icon">
                <FontAwesomeIcon icon={faTable}/>
            </span>
            <span className="courseCard_video_text">{video}</span>
        </div>
    </div>
</NavLink>
  )
}

export default CourseCard