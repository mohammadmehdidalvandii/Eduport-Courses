import { NavLink } from 'react-router-dom';
import './Footer.scss';



function Footer() {
  return (
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="footer_content">
                        <img src="/assets/svg/logo-light.svg" alt="logo footer" className="footer_logo" />   
                        <p className="footer_desc">
                        شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.    
                        </p> 
                    </div> 
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                        <h5 className="footer_title">لینک های کمکی</h5>
                        <ul className="footer_items">
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>درباه ما</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>تماس با ما</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/Article' className='footer_item_link'>وبلاگ</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>تسویه حساب</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>سوالات متداول</NavLink>
                            </li>
                        </ul>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                        <h5 className="footer_title">راهنما و پشتیبانی</h5>
                        <ul className="footer_items">
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>داکویمنت</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>ارسال تیکت</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>خرید دوره</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>نقشه سایت</NavLink>
                            </li>
                        </ul>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                        <h5 className="footer_title">لینک های سریع</h5>
                        <ul className="footer_items">
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>جذب مدرس</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>مشاوره رایگان</NavLink>
                            </li>
                            <li className="footer_item">
                                <NavLink to='/' className='footer_item_link'>شرایط و قوانین</NavLink>
                            </li>
                        </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <h5 className="footer_title">تماس با ما</h5> 
                    <ul className="footer_items">
                        <li className="footer_item">
                            <span className="footer_item_text">
                            تلفن: 093200000000
                            </span>
                        </li>
                        <li className="footer_item">
                            <span className="footer_item_text">
                            (9:00 تا 17:00 بعداز ظهر)
                            </span>
                        </li>
                        <li className="footer_item">
                            <span className="footer_item_text">
                            ایمیل:example@gmail.com
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer