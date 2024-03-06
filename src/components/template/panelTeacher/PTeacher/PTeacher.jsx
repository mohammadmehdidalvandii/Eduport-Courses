import './PTeacher.scss';
import { MdOutlineGridOn, MdPerson ,MdOutlineAddCircle   } from "react-icons/md";
import { FaThList , FaChartBar, FaShoppingBasket , FaRegCommentDots } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { useState } from 'react';
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';
import TeacherCourses from '../TeacherCourses/TeacherCourses';
import TeacherIncome from '../TeacherIncome/TeacherIncome';
import TeacherStudent from '../TeacherStudent/TeacherStudent';
import TeacherOrder from '../TeacherOrder/TeacherOrder';
import TeacherComment from '../TeacherComment/TeacherComment';
import TeacherAddCourse from '../TeacherAddCourse/TeacherAddCourse';




function PTeacher() {
    // create logic panel-teacher
    const [menuTeacher , setMenuTeacher] = useState('dashboard')

    const handlerMenuTeacher = (teacherID)=>{
        setMenuTeacher(teacherID)
    }

  return (
    <section className="pTeacher">
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="pTeacher_wrapper">
                        <div className="pTeacher_info">
                            <img src="/assets/images/user1.jpg" alt="teacher-img" className="pTeacher_info_img" />
                            <h6 className="pTeacher_info_name">الهام حسینی</h6>
                        </div>
                        <ul className="pTeacher_items_menu">
                            <li className="pTeacher_item">
                                <button className={`pTeacher_item_btn ${menuTeacher === "dashboard"?"pTeacher_item_btn_active":"" }`} onClick={()=>handlerMenuTeacher("dashboard")}>
                                    <span className="pTeacher_item_btnIcon"><MdOutlineGridOn/></span>
                                    <span className="pTeacher_item_btnText">داشبورد</span>
                                </button>
                            </li>
                            <li className="pTeacher_item">
                                <button className={`pTeacher_item_btn ${menuTeacher === "list-courses"?"pTeacher_item_btn_active":"" }`} onClick={()=>handlerMenuTeacher("list-courses")}>
                                    <span className="pTeacher_item_btnIcon"><FaThList/></span>
                                    <span className="pTeacher_item_btnText">لیست دوره ها</span>
                                </button>
                            </li>
                            <li className="pTeacher_item">
                                <button className={`pTeacher_item_btn ${menuTeacher === "income"?"pTeacher_item_btn_active":"" }`} onClick={()=>handlerMenuTeacher("income")}>
                                    <span className="pTeacher_item_btnIcon"><FaChartBar /></span>
                                    <span className="pTeacher_item_btnText">درآمد</span>
                                </button>
                            </li>
                            <li className="pTeacher_item">
                                <button className={`pTeacher_item_btn ${menuTeacher === "list-student"?"pTeacher_item_btn_active":"" }`} onClick={()=>handlerMenuTeacher("list-student")}>
                                    <span className="pTeacher_item_btnIcon"><MdPerson /></span>
                                    <span className="pTeacher_item_btnText">لیست دانشجو ها</span>
                                </button>
                            </li>
                            <li className="pTeacher_item">
                                <button className={`pTeacher_item_btn ${menuTeacher === "list-order"?"pTeacher_item_btn_active":"" }`} onClick={()=>handlerMenuTeacher("list-order")}>
                                    <span className="pTeacher_item_btnIcon"><FaShoppingBasket /></span>
                                    <span className="pTeacher_item_btnText">لیست سفارش</span>
                                </button>
                            </li>
                            <li className="pTeacher_item">
                                <button className={`pTeacher_item_btn ${menuTeacher === "comment"?"pTeacher_item_btn_active":"" }`} onClick={()=>handlerMenuTeacher("comment")}>
                                    <span className="pTeacher_item_btnIcon"><FaRegCommentDots /></span>
                                    <span className="pTeacher_item_btnText">دیدگاه</span>
                                </button>
                            </li>
                            <li className="pTeacher_item">
                                <button className={`pTeacher_item_btn ${menuTeacher === "add-course"?"pTeacher_item_btn_active":"" }`} onClick={()=>handlerMenuTeacher("add-course")}>
                                    <span className="pTeacher_item_btnIcon"><MdOutlineAddCircle /></span>
                                    <span className="pTeacher_item_btnText">افزودن دوره</span>
                                </button>
                            </li>
                            <li className="pTeacher_item">
                                <button className="pTeacher_item_btn pTeacher_item_btn_exit">
                                    <span className="pTeacher_item_btnIcon"><RxExit/></span>
                                    <span className="pTeacher_item_btnText">خروج</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                        {menuTeacher === "dashboard" && (<TeacherDashboard/>)}
                        {menuTeacher === "list-courses" && (<TeacherCourses/>)}
                        {menuTeacher === "income" && (<TeacherIncome/>)}
                        {menuTeacher === "list-student" && (<TeacherStudent/>)}
                        {menuTeacher === "list-order" && (<TeacherOrder/>)}
                        {menuTeacher === "comment" && (<TeacherComment/>)}
                        {menuTeacher === "add-course" && (<TeacherAddCourse/>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PTeacher