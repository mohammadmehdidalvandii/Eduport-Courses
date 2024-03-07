import './Pstudent.scss';

import { MdOutlineGridView , MdExitToApp  } from "react-icons/md";
import { FaListAlt , FaEdit, FaRegHeart  } from "react-icons/fa";
import { useState } from 'react';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import StudentListCourse from '../StudentListCourse/StudentListCourse';



function Pstudent() {
    const [menuStudent , setMenuStudent] = useState("dashboard")
    // using Active menu student
    const handlerShowMenuStudent =(studentID)=>{
        setMenuStudent(studentID)
    }
  return (
    <section className="pStudent">
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p className="pStudent_menu">
                        <ul className="pStudent_items">
                            <li className="pStudent_item">
                                <button className={`pStudent_item_btn ${menuStudent === 'dashboard' ?"pStudent_item_btn_Active":""}`}
                                    onClick={()=>handlerShowMenuStudent("dashboard")}
                                >
                                    <span className="pStudent_item_btnIcon"><MdOutlineGridView/></span>
                                    <span className="pStudent_item_btnText">داشبورد</span>
                                </button>
                            </li>
                            <li className="pStudent_item">
                                <button className={`pStudent_item_btn ${menuStudent === 'list_course' ?"pStudent_item_btn_Active":""}`}
                                    onClick={()=>handlerShowMenuStudent("list_course")}
                                >
                                    <span className="pStudent_item_btnIcon"><FaListAlt/></span>
                                    <span className="pStudent_item_btnText">لیست دوره ها</span>
                                </button>
                            </li>
                            <li className="pStudent_item">
                                <button className={`pStudent_item_btn ${menuStudent === 'edit_profile' ?"pStudent_item_btn_Active":""}`}
                                    onClick={()=>handlerShowMenuStudent("edit_profile")}
                                >
                                    <span className="pStudent_item_btnIcon"><FaEdit/></span>
                                    <span className="pStudent_item_btnText">ویرایش پروفایل</span>
                                </button>
                            </li>
                            <li className="pStudent_item">
                                <button className={`pStudent_item_btn ${menuStudent === 'favorite' ?"pStudent_item_btn_Active":""}`}
                                    onClick={()=>handlerShowMenuStudent("favorite")}
                                >
                                    <span className="pStudent_item_btnIcon"><FaRegHeart /></span>
                                    <span className="pStudent_item_btnText">مورد علاقه ها</span>
                                </button>
                            </li>
                            <li className="pStudent_item">
                                <button className="pStudent_item_btn pStudent_item_btn_exit">
                                    <span className="pStudent_item_btnIcon"><MdExitToApp/></span>
                                    <span className="pStudent_item_btnText">خروج</span>
                                </button>
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                        {menuStudent === 'dashboard' && (<StudentDashboard/>)}
                        {menuStudent === 'list_course' && (<StudentListCourse/>)}
                        {menuStudent === 'edit_profile' && (<h1>this is edit_profile</h1>)}
                        {menuStudent === 'favorite' && (<h1>this is favorite</h1>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pstudent