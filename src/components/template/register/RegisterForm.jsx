import "./RegisterForm.scss";
// app/layout.js
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMailBulk,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function RegisterForm() {
  return (
    <section className="registerForm">
      <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src="/assets/svg/login.svg"
            alt="register image"
            className="registerForm_img"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="loginForm_content">
                    <span className="loginForm_content_icon">👋</span>
                    <h4 className="loginForm_content_title">ثبت نام</h4>
                    <p className="loginForm_content_desc">از دیدن شما خوشحالم! لطفا با حساب کاربری خود ثبت نام کنید.</p>
                </div>
                <form className="form">
                    <div className="formBox">
                        <span className="formBox_label">ایمیل</span>
                        <div className="formBox_input_icon">
                            <span className="formBox_icon">
                                <FontAwesomeIcon icon={faMailBulk}/>
                            </span>
                            <input type="text"  className='formBox_input' placeholder='****@gmail.com'/>
                        </div>
                    </div>
                    <div className="formBox">
                        <span className="formBox_label">رمزعبور</span>
                        <div className="formBox_input_icon">
                            <span className="formBox_icon">
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                            <input type="password"  className='formBox_input' placeholder='********'/>
                        </div>
                    </div>
                    <div className="formBox">
                        <span className="formBox_label">تایید رمزعبور</span>
                        <div className="formBox_input_icon">
                            <span className="formBox_icon">
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                            <input type="password"  className='formBox_input' placeholder='********'/>
                        </div>
                    </div>
                        <div className="registerForm_rule">
                            <input type="checkbox" className="registerForm_rule_check" />
                            <span className="registerForm_rule_text">با ثبت نام</span>
                            <NavLink to='/' className='registerForm_rule_link'>شرایط و قوانین سایت</NavLink>
                            <span className="registerForm_rule_text">را خواهید پذیرفت.</span>
                        </div>
                    <button className="form_btn">ثبت نام</button>
                    <NavLink to='/Login' className='form_linkRegister'>آیا قبلا ثبت نام کرده اید؟ من بزن</NavLink>
                </form> 
        </div>
            </div>
      </div>
    </section>
  );
}

export default RegisterForm;
