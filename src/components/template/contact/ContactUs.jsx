import './ContactUs.scss'

function ContactUs() {
  return (
    <section className="contactUs">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm1-12">
                    <div className="contactUs_item">
                        <h6 className="contactUs_item_title">پشتیبانی فروش</h6>
                        <p className="contactUs_item_desc">تهران، میدان آزادی، جنب مترو شادمان، مجتمع صدف</p>
                        <span className="contactUs_item_number">09320000000</span>
                        <span className="contactUs_item_mail">example@email.com</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm1-12">
                    <div className="contactUs_item">
                        <h6 className="contactUs_item_title">اطلاعات تماس</h6>
                        <p className="contactUs_item_desc">تهران، میدان فردوسی، نرسیده به ولیعصر مجتمع صبا</p>
                        <span className="contactUs_item_number">09320000000</span>
                        <span className="contactUs_item_mail">example@email.com</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm1-12">
                    <div className="contactUs_item">
                        <h6 className="contactUs_item_title">دفتر مرکزی</h6>
                        <p className="contactUs_item_desc">تهران، چهارراه ولیعصر، نرسیده به خیابان کریم خان زند</p>
                        <span className="contactUs_item_number">02180000000</span>
                        <span className="contactUs_item_mail">example@email.com</span>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/assets/svg/contact.svg" alt="image svg" className="contactUs_img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="contactUs_content_form">
                        <h5 className="contactUs_content_title">با ما در ارتباط باشید</h5>
                        <p className="contact_content_desc">برای درخواست نمایندگی لطفا با بخش فروش شرکت تماس بگیرید یا فرم را پر کنید سپس همکاران ما با شما تماس خواهند گرفت.</p>
                        <form action="#" className="contactUs_form">
                            <div className="formBox">
                                <span className="formBox_label">نام و نام خانوادگی *</span>
                                <input type="text" className="formBox_input" />
                            </div>
                            <div className="formBox">
                                <span className="formBox_label"> ایمیل*</span>
                                <input type="text" className="formBox_input" />
                            </div>
                            <div className="formBox">
                                <span className="formBox_label">متن درخواست*</span>
                                <textarea type="text" className="formBox_text" />
                            </div>
                            <button className="contactUs_form_btn">ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs