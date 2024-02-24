import './LoginForm.scss';

// app/layout.js
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMailBulk, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

function LoginForm() {
  return (
   <section className="loginForm">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img src="/assets/svg/login.svg" alt="image login" className="loginForm_img" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="loginForm_content">
                    <span className="loginForm_content_icon">👋</span>
                    <h4 className="loginForm_content_title">ورود به حساب کاربری</h4>
                    <p className="loginForm_content_desc">از دیدن شما خوشحالم! لطفا با حساب کاربری خود وارد شوید.</p>
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
                            <input type="text"  className='formBox_input' placeholder='********'/>
                        </div>
                    </div>
                    <div className="form_save_forget">
                        <div className="formSave">
                            <input type="checkbox" className='formSave_check'/>
                            <span className="formSave_text">مرا به خاطر بسپار</span>
                        </div>
                        <NavLink to='/' className='formForget'>رمز خود را فراموش کرده اید؟</NavLink>
                    </div>
                    <button className="form_btn">ورود</button>
                    <NavLink to='' className='form_linkRegister'>حساب کاربری ندارید؟من بزن</NavLink>
                </form>
            </div>
        </div>
    </div>
   </section>
  )
}

export default LoginForm