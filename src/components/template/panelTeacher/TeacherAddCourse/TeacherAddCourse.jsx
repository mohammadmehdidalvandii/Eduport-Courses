import './TeacherAddCourse.scss';

function TeacherAddCourse() {
  return (
    <section className="teacherAddCourse">
        <div className="row">
            <div className="col-12">
                <h6 className="teacherAddCourse_title">افزودن دوره</h6>
            </div>
            <div className="row mt-3">
                <form action="#" className="teacherAddCourse_form">
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">عنوان</label>
                        <input type="text" className='teacherAddCourse_boxInput' placeholder='آموزش javascript '/>
                    </div>
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">توضیحات</label>
                        <textarea type="text" className='teacherAddCourse_boxText' placeholder='کلمات کلیدی'/>
                    </div>
                    <div className="teacherAddCourse_wrapper flex-lg-row flex-column">
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">دسته بندی</label>
                        <input type="text" className='teacherAddCourse_boxInput' placeholder='مثل برنامه نویسی' />
                    </div>
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">سطح دوره</label>
                        <input type="text" className='teacherAddCourse_boxInput' placeholder='/مقدماتی / متوسط/ حرفه ای' />
                    </div>
                    </div>
                    <div className="teacherAddCourse_wrapper flex-lg-row flex-column">
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">مدت زمان دوره</label>
                        <input type="text" className='teacherAddCourse_boxInput' placeholder='14:20:30' />
                    </div>
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">تعداد ویدیو</label>
                        <input type="text" className='teacherAddCourse_boxInput' placeholder='19 ویدیو' />
                    </div>
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">قیمت ویدیو (تومان)</label>
                        <input type="text" className='teacherAddCourse_boxInput' placeholder='2,400,000' />
                    </div>
                    </div>
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">پوستر ویدیو</label>
                        <input type="file" className='teacherAddCourse_boxInput' placeholder=''/>
                    </div>
                    <div className="teacherAddCourse_Box">
                        <label htmlFor="#" className="teacherAddCourse_boxLabel">لینک ویدیو</label>
                        <input type="text" className='teacherAddCourse_boxInput' placeholder='http/..../..../.../'/>
                    </div>
                    <button className="teacherAddCourse_btn">ثبت ویدیو</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default TeacherAddCourse