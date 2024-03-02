import './StudentCard.scss';
import {  MdDelete , MdMail } from "react-icons/md";
import { FaRegEdit , FaBan } from "react-icons/fa";

function StudentCard() {
  return (
    <div className="studentCard">
                    <div className="studentCard_info">
                        <img src="/assets/images/user1.jpg" alt="student-image" className="studentCard_info_img" />
                        <span className="studentCard_info_name">الهام حسینی</span>
                    </div>
                    <ul className="studentCard_items">
                        <li className="studentCard_item">
                            <span className="studentCard_item_title">مبلغ پرداختی :</span>
                            <span className="studentCard_item_text">270,000 تومان</span>
                        </li>
                        <li className="studentCard_item">
                            <span className="studentCard_item_title">تعداد دوره ها :</span>
                            <span className="studentCard_item_text">21</span>
                        </li>
                        <li className="studentCard_item">
                            <span className="studentCard_item_title">تاریخ عضویت :</span>
                            <span className="studentCard_item_text">8 خرداد 1400</span>
                        </li>
                    </ul>
                    <div className="studentCard_buttons">
                        <button className="studentCard_btn">
                            <span className="studentCard_btn_icon">
                                <FaRegEdit/>
                            </span>
                            <span className="studentCard_btn_text" >ویرایش</span>
                        </button>
                        <button className="studentCard_btn ">
                            <span className="studentCard_btn_icon">
                                <MdDelete />
                            </span>
                            <span className="studentCard_btn_text">حذف</span>
                        </button>
                        <button className="studentCard_btn ">
                            <span className="studentCard_btn_icon">
                                <MdMail />
                            </span>
                            <span className="studentCard_btn_text">ایمیل</span>
                        </button>
                        <button className="studentCard_btn ">
                            <span className="studentCard_btn_icon">
                                <FaBan />
                            </span>
                            <span className="studentCard_btn_text">مسدود </span>
                        </button>
                    </div>
                   
                </div>
  )
}

export default StudentCard