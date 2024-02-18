import { NavLink } from 'react-router-dom'
import './HomeTitle.scss'

// using fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function HomeTitle() {
  return (
    <section className="homeTitle">
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="homeTitle_content">
                        <h1 className="homeTitle_title">به دانشگاه آنلاین ما
خوش آمدید</h1>
                        <p className="homeTitle_desc">
                        بازار آنلاین آموزش و یادگیری با بیش از 5K دوره و 10 میلیون دانشجو. توسط متخصصان آموزش داده می شود تا به شما در کسب مهارت های جدید کمک کند.
                        </p>
                        <ul className="homeTitle_items">
                            <li className="homeTitle_item">
                                <span className="homeTitle_item_icon">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <span className="homeTitle_item_text">مدرس مجرب</span>
                            </li>
                            <li className="homeTitle_item">
                                <span className="homeTitle_item_icon">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <span className="homeTitle_item_text">ارائه مدرک</span>
                            </li>
                            <li className="homeTitle_item">
                                <span className="homeTitle_item_icon">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <span className="homeTitle_item_text">جذب مدرس</span>
                            </li>
                        </ul>
                        <NavLink to='/' className='homeTitle_link'>شروع کن</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="homeTitle_wrapper d-none d-sm-block">
                        <img src="/assets/images/homeTitle.png" alt="" className="homeTitle_bgImg" />
                        <img src="/assets/svg/home-1.svg" alt="" className="homeTitle_img_re "  />
                        <img src="/assets/svg/home-2.svg" alt="" className="homeTitle_img_an" />
                        <img src="/assets/svg/home-3.svg" alt="" className="homeTitle_img_fi " />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeTitle