import { NavLink } from 'react-router-dom'
import './Padmin.scss'
import { MdOutlineHome , MdMessage } from "react-icons/md";
import { FaUserGraduate, FaUserEdit, FaChartBar   } from "react-icons/fa";
import { useState } from 'react';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminStudent from '../AdminStudent/AdminStudent';
import AdminTeacher from '../AdminTeacher/AdminTeacher';

function Padmin() {
    const [adminMenu , setAdminMenu ]= useState("dashboard")

    // handler menu-admin change content
    const handlerShowMenuAdmin = (adminID)=>{
        setAdminMenu(adminID)
    }
  return (
   <section className="pAdmin">
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="wrapper_pAdmin">
                        <NavLink to='/' className='pAdmin_linkLogo'>
                            <img src="/assets/svg/logo-light.svg" alt="" className="pAdmin_logoLink_img" />
                        </NavLink>
                        <ul className="pAdmin_items">
                            <li className="pAdmin_item">
                                <button  className={`pAdmin_item_link ${adminMenu === 'dashboard' ? "pAdmin_item_link_active":""}`} onClick={()=>handlerShowMenuAdmin("dashboard")}>
                                    <span className="pAdmin_item_linkIcon">
                                        <MdOutlineHome/>
                                    </span>
                                    <span className="pAdmin_item_linkText ">داشبور</span>
                                </button>
                            </li>
                            <li className="pAdmin_item">
                                <button  className={`pAdmin_item_link ${adminMenu === 'student' ? "pAdmin_item_link_active":""}`} onClick={()=>handlerShowMenuAdmin("student")}>
                                    <span className="pAdmin_item_linkIcon">
                                        <FaUserGraduate/>
                                    </span>
                                    <span className="pAdmin_item_linkText">دانشجوها</span>
                                </button>
                            </li>
                            <li className="pAdmin_item">
                                <button  className={`pAdmin_item_link ${adminMenu === 'teacher' ? "pAdmin_item_link_active":""}`} onClick={()=>handlerShowMenuAdmin("teacher")}>
                                    <span className="pAdmin_item_linkIcon">
                                        <FaUserEdit/>
                                    </span>
                                    <span className="pAdmin_item_linkText">مدرس ها</span>
                                </button>
                            </li>
                            <li className="pAdmin_item">
                                <button  className={`pAdmin_item_link ${adminMenu === 'comments' ? "pAdmin_item_link_active":""}`} onClick={()=>handlerShowMenuAdmin("comments")}>
                                    <span className="pAdmin_item_linkIcon">
                                        <MdMessage/>
                                    </span>
                                    <span className="pAdmin_item_linkText">دیدگاه ها</span>
                                </button>
                            </li>
                            <li className="pAdmin_item">
                                <button  className={`pAdmin_item_link ${adminMenu === 'income' ? "pAdmin_item_link_active":""}`} onClick={()=>handlerShowMenuAdmin("income")}>
                                    <span className="pAdmin_item_linkIcon">
                                        <FaChartBar />
                                    </span>
                                    <span className="pAdmin_item_linkText">درآمد</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                    {adminMenu === 'dashboard' &&(<AdminDashboard/>)}
                    {adminMenu === 'student' &&(<AdminStudent/>)}
                    {adminMenu === 'teacher' &&(<AdminTeacher/>)}
                    {adminMenu === 'comments' &&(<h1>this is comments</h1>)}
                    {adminMenu === 'income' &&(<h1>this is income</h1>)}
                </div>
            </div>
        </div>
   </section>
  )
}

export default Padmin