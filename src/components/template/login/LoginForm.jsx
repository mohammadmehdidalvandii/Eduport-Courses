import './LoginForm.scss';

// app/layout.js
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMailBulk, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import userContext from '../../../Context/userContext'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function LoginForm() {
    const usersData = useContext(userContext)
    const navigate = useNavigate()

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handlerFormButton = (e)=>{
        e.preventDefault()

  
        const isAccessUser = usersData.users.find(user=> user.email.includes(email) && user.password.includes(password))
        if(isAccessUser){
        let accessUser = {
            id:isAccessUser.id,
            email,
            password,
            role: isAccessUser.role
        }
        usersData.setUserInfo((prevUser)=> [...prevUser , accessUser])
            swal({
                icon:"success",
                title:"ورود شما موفق  بود",
                buttons:"باشه"
            })
            navigate('/')
        }else{
            swal({
                icon:"error",
                title:"چنین کاربری وجود ندار",
                buttons:"باشه"
            })
        }
    }

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
                            <input type="text" value={email}  className='formBox_input' placeholder='****@gmail.com' onChange={e=>setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="formBox">
                        <span className="formBox_label">رمزعبور</span>
                        <div className="formBox_input_icon">
                            <span className="formBox_icon">
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                            <input type="password"  value={password} className='formBox_input' placeholder='********' onChange={e=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form_save_forget">
                        <div className="formSave">
                            <input type="checkbox" className='formSave_check'/>
                            <span className="formSave_text">مرا به خاطر بسپار</span>
                        </div>
                        <NavLink to='/' className='formForget'>رمز خود را فراموش کرده اید؟</NavLink>
                    </div>
                    <button className="form_btn" onClick={handlerFormButton}>ورود</button>
                    <NavLink to='' className='form_linkRegister'>حساب کاربری ندارید؟من بزن</NavLink>
                </form>
            </div>
        </div>
    </div>
   </section>
  )
}

export default LoginForm