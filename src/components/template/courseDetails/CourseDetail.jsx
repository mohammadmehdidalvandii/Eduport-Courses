import Accordion from '../../module/Accordion/Accordion'
import './CourseDetail.scss'
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function CourseDetail({title , image , price, addToBasket}) {


  return (
    <section className="courseDetail">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-col-md-6 col-sm-12">
                    <div className="courseDetail_info">
                        <h5 className="courseDetail_info_title">{title}</h5>
                        <p className="courseDetail_info_desc">
                        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.    
                        </p>      
                        <p className="courseDetail_info_desc">
                        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.    
                        </p>      
                        <p className="courseDetail_info_desc">
                        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.    
                        </p>      
                    </div>    
                </div> 
                <div className="col-lg-4 col-col-md-6 col-sm-12">
                    <div className="courseDetail_buy">
                        <img src={image} alt="" className="courseDetail_buy_img" />
                        <span className="courseDetail_buy_text">قیمت دوره</span>
                        <h4 className="courseDetail_buy_price">{price}  تومان</h4>
                        <button className="courseDetail_buy_addCourse" onClick={addToBasket}>
                        دریافت
                        <ToastContainer/>
                     </button>
                    </div>    
                </div> 
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <video src="www.aparat.com/video/video/embed/videohash/31hor/vt/frame?t=3" controls className='courseDetail_video'></video>
                </div>
           </div>
           <div className="row mt-5">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="courseDetail_content">
                    <h6 className="courseDetail_content_title">سر فصل های دوره</h6>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="courseDetail_teacher">
                    <img src="/assets/images/teacher/t1.jpg" alt="" className="courseDetail_teacher_img" />
                    <h6 className="courseDetail_teacher_name">میلاد ناصری</h6>
                    <span className="courseDetail_teacher_job">دیجیتال مارکتنیگ</span>
                    <p className="courseDetail_teacher_desc">با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default CourseDetail