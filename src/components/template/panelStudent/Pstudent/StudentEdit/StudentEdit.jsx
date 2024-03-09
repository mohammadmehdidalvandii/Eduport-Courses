import './StudentEdit.scss';

function StudentEdit() {
  return (
   <section className="studentEdit">
        <div className="row">
            <div className="col-12">
                <h6 className="studentEdit_title">ویرایش اطلاعات پروفایل</h6>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12">
                    <form action="#" className="studentEdit_form">
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'> نام و نام خانوادگی:</label>
                            <input type="text" className='studentEdit_box_input' placeholder='الهام حسینی' />
                        </div>
                        <div className="studentEdit_box_wrapper d-block d-lg-flex">
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'> ایمیل :</label>
                            <input type="text" className='studentEdit_box_input' placeholder='example@gmail.com' />
                        </div>
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'> نام کاربری :</label>
                            <input type="text" className='studentEdit_box_input' placeholder='userName1212' />
                        </div>
                        </div>
                        <div className="studentEdit_box_wrapper d-block d-lg-flex">
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'> شماره تماس :</label>
                            <input type="text" className='studentEdit_box_input' placeholder='091200000' />
                        </div>
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'> آدرس :</label>
                            <input type="text" className='studentEdit_box_input' placeholder='userName1212' />
                        </div>
                        </div>
                        <div className="studentEdit_box_wrapper d-block d-lg-flex">
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'>  رمزعبور قبلی :</label>
                            <input type="text" className='studentEdit_box_input' placeholder='**********' />
                        </div>
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'> رمزعبورجدید :</label>
                            <input type="text" className='studentEdit_box_input' placeholder='**********' />
                        </div>
                        <div className="studentEdit_box">
                            <label htmlFor="#" className='studentEdit_box_text'> تکرار رمز عبور  :</label>
                            <input type="text" className='studentEdit_box_input' placeholder='**********' />
                        </div>
                        </div>
                        <button className="studentEdit_submit">ثبت </button>
                    </form>
            </div>
        </div>
   </section>
  )
}

export default StudentEdit