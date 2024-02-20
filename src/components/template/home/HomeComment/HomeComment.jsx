import TitleCenter from "../../../module/TitleCenter/TitleCenter";
import "./HomeComment.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import required modules
import { EffectCreative } from 'swiper/modules';

function HomeComment() {
  return (
    <section className="homeComment">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleCenter
              title="دیدگـاه هنرجویـان"
              desc="با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد"
            />
          </div>
        </div>
        <div className="row mt-4">
        <Swiper
        grabCursor={true}
        loop={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
        <SwiperSlide>
              <div className="commentCard">
                  <img
                    src="/assets/images/user1.jpg"
                    alt="user"
                    className="commentCard_img"
                  />
                  <p className="commentCard_desc">
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد{" "}
                  </p>
                  <span className="commentCard_name">الهام حسینی</span>
                </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="commentCard">
                  <img
                    src="/assets/images/user1.jpg"
                    alt="user"
                    className="commentCard_img"
                  />
                  <p className="commentCard_desc">
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد{" "}
                  </p>
                  <span className="commentCard_name">الهام حسینی</span>
                </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="commentCard">
                  <img
                    src="/assets/images/user1.jpg"
                    alt="user"
                    className="commentCard_img"
                  />
                  <p className="commentCard_desc">
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد{" "}
                  </p>
                  <span className="commentCard_name">الهام حسینی</span>
                </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="commentCard">
                  <img
                    src="/assets/images/user1.jpg"
                    alt="user"
                    className="commentCard_img"
                  />
                  <p className="commentCard_desc">
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد{" "}
                  </p>
                  <span className="commentCard_name">الهام حسینی</span>
                </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="commentCard">
                  <img
                    src="/assets/images/user1.jpg"
                    alt="user"
                    className="commentCard_img"
                  />
                  <p className="commentCard_desc">
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد{" "}
                  </p>
                  <span className="commentCard_name">الهام حسینی</span>
                </div>
        </SwiperSlide>
      </Swiper>
              
        </div>
      </div>
    </section>
  );
}

export default HomeComment;
