import TitleCenter from '../../../module/TitleCenter/TitleCenter'
import './HomeFestival.scss'
import CourseCard from '../../../module/CourseCard/CourseCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import coursesContext from '../../../../Context/coursesContext';
import { useContext } from 'react';

function HomeFestival() {
    const courseData = useContext(coursesContext)
  return (
   <section className="homeFestival">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <TitleCenter
                    title='دوره های پیشنهادی جشنواره'
                    desc='مشاهده دوره های جدید و 🔥 در جشنواره'
                />
            </div>
        </div>
        <div className="row mt-4">
        <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        modules={[Pagination]}
        breakpoints={
                {
                    1024:{
                        spaceBetween: 50,
                        slidesPerView:3
                    },
                    992:{
                        spaceBetween: 50,
                        slidesPerView: 2
                    },
                    768:{
                        slidesPerView: 2
                    },
                    568:{
                        slidesPerView: 1
                    }
                }
          }
      > 
        {
            courseData.courses.map(course => (
        <SwiperSlide key={course.id}> 
            <CourseCard 
            {...course}/>
        </SwiperSlide>
            ))
        }
      </Swiper>
        </div>
    </div>
   </section>
  )
}

export default HomeFestival