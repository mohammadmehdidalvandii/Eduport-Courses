import "./AdminDashboard.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import db from '../../../../data/db.json'
import { useState } from "react";
import { NavLink } from "react-router-dom";


function AdminDashboard() {
    const [income ,setIncome] = useState([...db.income])
  return (
    <section className="adminDashboard">
      <h4 className="adminDashboard_title">داشبورد</h4>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="adminDashboard_item">
            <span className="adminDashboard_content_num">1958</span>
            <span className="adminDashboard_content_text">
              دوره های تکمیل شده
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="adminDashboard_item">
            <span className="adminDashboard_content_num">1600</span>
            <span className="adminDashboard_content_text">شرکت کنندگان</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="adminDashboard_item">
            <span className="adminDashboard_content_num">1235</span>
            <span className="adminDashboard_content_text">درحال ضبط</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="adminDashboard_item">
            <span className="adminDashboard_content_num">k 845</span>
            <span className="adminDashboard_content_text">زمان بازدید</span>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="adminDashboard_charts">
            <h6 className="adminDashboard_charts_title">آمار فروش</h6>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                width={500}
                height='100%'
                data={income}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3" />
                <XAxis dataKey="month" interval={0} angle={-14} tickMargin={10} />
                <YAxis  tickMargin={40}/>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sale"
                  stroke="#0867C1"
                  fill="#17A2B8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="adminDashboard_ticket">
                <h6 className="adminDashboard_ticket_title">تیکت ها</h6>
                <ul className="adminDashboard_ticket_items">
                    <li className="adminDashboard_ticket_item">
                        <img src="/assets/images/user1.jpg" alt="" className="adminDashboard_ticket_img" />
                        <div className="adminDashboard_ticket_content">
                            <span className="adminDashboard_ticket_name">نیلوفر جلیلی</span>
                            <span className="adminDashboard_ticket_number">شماره تیکت 764</span>
                            <span className="adminDashboard_ticket_time">9 ساعت قبل</span>
                        </div>  
                    </li>
                    <li className="adminDashboard_ticket_item">
                        <img src="/assets/images/user1.jpg" alt="" className="adminDashboard_ticket_img" />
                        <div className="adminDashboard_ticket_content">
                            <span className="adminDashboard_ticket_name">نیلوفر جلیلی</span>
                            <span className="adminDashboard_ticket_number">شماره تیکت 764</span>
                            <span className="adminDashboard_ticket_time">9 ساعت قبل</span>
                        </div>  
                    </li>
                    <li className="adminDashboard_ticket_item">
                        <img src="/assets/images/user1.jpg" alt="" className="adminDashboard_ticket_img" />
                        <div className="adminDashboard_ticket_content">
                            <span className="adminDashboard_ticket_name">نیلوفر جلیلی</span>
                            <span className="adminDashboard_ticket_number">شماره تیکت 764</span>
                            <span className="adminDashboard_ticket_time">9 ساعت قبل</span>
                        </div>  
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
             <div className="adminDashboard_items">
                <h6 className="adminDashboard_item_title">مربیان آکادمی</h6>
                <ul className="adminDashboard_teacher_items">
                  <li className="adminDashboard_teacher_item">
                    <div className="adminDashboard_teacher_imgName">
                      <img src="/assets/images/user1.jpg" alt="" className="adminDashboard_teacher_img" />
                      <span className="adminDashboard_teacher_name">نیلوفر جلیلی</span>
                    </div>
                      <NavLink to='/' className='adminDashboard_teacher_btn'>مشاهده</NavLink>
                  </li>
                  <li className="adminDashboard_teacher_item">
                    <div className="adminDashboard_teacher_imgName">
                      <img src="/assets/images/user1.jpg" alt="" className="adminDashboard_teacher_img" />
                      <span className="adminDashboard_teacher_name">نیلوفر جلیلی</span>
                    </div>
                      <NavLink to='/' className='adminDashboard_teacher_btn'>مشاهده</NavLink>
                  </li>
                  <li className="adminDashboard_teacher_item">
                    <div className="adminDashboard_teacher_imgName">
                      <img src="/assets/images/user1.jpg" alt="" className="adminDashboard_teacher_img" />
                      <span className="adminDashboard_teacher_name">نیلوفر جلیلی</span>
                    </div>
                      <NavLink to='/' className='adminDashboard_teacher_btn'>مشاهده</NavLink>
                  </li>
                </ul>
            </div>   
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
             <div className="adminDashboard_items">
                <h6 className="adminDashboard_item_title">نوتیفیکیشن ها</h6>
            </div>   
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
             <div className="adminDashboard_items">
                <h6 className="adminDashboard_item_title">ترافیک بازدید</h6>
            </div>   
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
