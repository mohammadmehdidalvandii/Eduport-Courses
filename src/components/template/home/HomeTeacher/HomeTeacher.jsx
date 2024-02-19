import { NavLink } from 'react-router-dom';
import './HomeTeacher.scss';

function HomeTeacher() {
  return (
    <section className="homeTeacher">
        <div className="container">
            <div className="homeTeacher_Wrapper">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="homeTeacher_content">
                            <h4 className="homeTeacher_title">مدرس شویـد!</h4>
                            <p className="homeTeacher_desc">
                            ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <NavLink to="" className="homeTeacher_btn">ثبت نام</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeTeacher