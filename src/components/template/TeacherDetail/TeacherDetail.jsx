import './TeacherDetail.scss';
// using fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faGraduationCap, faHeadphones, faLocation, faMailBulk
} from "@fortawesome/free-solid-svg-icons";

function TeacherDetail({image , score ,name ,job}) {
  return (
    <section className="teacherDetail">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="teacherDetail_img_score">
                        <img src={image} alt="teacher image" className="teacherDetail_img" />
                        <span className="teacherDetail_score">
                            {score}
                        </span>
                    </div>
                    <div className="teacherDetail_education">
                        <h6 className="teacherDetail_title">تحصیلات</h6>
                        <ul className="teacherDetail_education_items">
                            <li className="teacherDetail_education_item">
                                <span className="teacherDetail_education_icon">
                                    <FontAwesomeIcon icon={faGraduationCap}/>
                                </span>
                                <span className="teacherDetail_education_text">دانشگاه امیر کیبر (لیسانس)</span>
                            </li>
                            <li className="teacherDetail_education_item">
                                <span className="teacherDetail_education_icon">
                                    <FontAwesomeIcon icon={faGraduationCap}/>
                                </span>
                                <span className="teacherDetail_education_text">دانشگاه امیر کیبر (لیسانس)</span>
                            </li>
                            <li className="teacherDetail_education_item">
                                <span className="teacherDetail_education_icon">
                                    <FontAwesomeIcon icon={faGraduationCap}/>
                                </span>
                                <span className="teacherDetail_education_text">دانشگاه امیر کیبر (لیسانس)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="teacherDetail_content">
                        <span className="teacherDetail_content_h1">سلام,من</span>
                        <h6 className="teacherDetail_content_name">{name}</h6>
                        <span className="teacherDetail_content_job">{job}</span>
                        <p className="teacherDetail_content_desc">از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        <p className="teacherDetail_content_desc">شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <ul className="teacherDetail_content_items">
                            <li className="teacherDetail_content_item">
                                <span className="teacherDetail_content_itemIcon">
                                    <FontAwesomeIcon icon={faLocation}/>
                                </span>
                                <span className="teacherDetail_content_itemText"> تهران، میدان آزادی، نرسیده به خیابان ولیعص</span>
                            </li>
                            <li className="teacherDetail_content_item">
                                <span className="teacherDetail_content_itemIcon">
                                    <FontAwesomeIcon icon={faMailBulk}/>
                                </span>
                                <span className="teacherDetail_content_itemText"> example@gmail.com</span>
                            </li>
                            <li className="teacherDetail_content_item">
                                <span className="teacherDetail_content_itemIcon">
                                    <FontAwesomeIcon icon={faHeadphones}/>
                                </span>
                                <span className="teacherDetail_content_itemText">09380147520</span>
                            </li>
                            <li className="teacherDetail_content_item">
                                <span className="teacherDetail_content_itemIcon">
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </span>
                                <span className="teacherDetail_content_itemText"> https://example.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeacherDetail