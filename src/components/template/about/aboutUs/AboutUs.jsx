import './AboutUs.scss';

// using fontAwesome 
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <section className="aboutUs">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="aboutUs_titleDesc">
                        <h5 className="aboutUs_title">درباره آکادمی</h5>
                        <p className="aboutUs_desc">با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/assets/images/about.jpg" alt="about-img" className="aboutUs_img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="aboutUs_content">
                        <h6 className="aboutUs_content_title">
بیش از 350 دانش آموز برای رسیدن به اهداف خود به ما پیوستند</h6>
                        <p className="aboutUs_content_desc">طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        <ul className="aboutUs_content_items">
                            <li className="aboutUs_content_item">
                                <span className="aboutUs_content_item_icon">
                                    <FontAwesomeIcon icon={faCheckCircle}/>
                                </span>
                                <span className="aboutUs_content_item_text">راه اندازی و نصب زمان کمتری می برد</span>
                            </li>
                            <li className="aboutUs_content_item">
                                <span className="aboutUs_content_item_icon">
                                    <FontAwesomeIcon icon={faCheckCircle}/>
                                </span>
                                <span className="aboutUs_content_item_text">نرم افزار حرفه ای و آسان برای استفاده</span>
                            </li>
                            <li className="aboutUs_content_item">
                                <span className="aboutUs_content_item_icon">
                                    <FontAwesomeIcon icon={faCheckCircle}/>
                                </span>
                                <span className="aboutUs_content_item_text">مناسب برای هر دستگاهی با طراحی پیکسلی عالی</span>
                            </li>
                            <li className="aboutUs_content_item">
                                <span className="aboutUs_content_item_icon">
                                    <FontAwesomeIcon icon={faCheckCircle}/>
                                </span>
                                <span className="aboutUs_content_item_text">راه اندازی و نصب خیلی سریع</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs