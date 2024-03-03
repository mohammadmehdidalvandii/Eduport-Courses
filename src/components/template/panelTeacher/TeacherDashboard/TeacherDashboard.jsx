import "./TeacherDashboard.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import db from "../../../../data/db.json";
import { useState } from "react";

function TeacherDashboard() {
  const [watchTime, setWatchTime] = useState([...db.seenCourses]);
  return (
    <section className="teacherDashboard">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="teacherDashboard_item">
            <h4 className="teacherDashboard_item_title">دوره ها</h4>
            <span className="teacherDashboard_item_number">25</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="teacherDashboard_item">
            <h4 className="teacherDashboard_item_title">دانشجویان</h4>
            <span className="teacherDashboard_item_number">12,800 نفر</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="teacherDashboard_item">
            <h4 className="teacherDashboard_item_title">دیدن دوره</h4>
            <span className="teacherDashboard_item_number">9,647 نفر</span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div className="teacherDashboard_seenCourse">
            <h6 className="teacherDashboard_seenCourse_title">
              مقدار بازدید تمام دوره ها
            </h6>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                width={500}
                height="100%"
                data={watchTime}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid  />
                <XAxis dataKey="month"  interval={0} angle={-45} tickMargin={15}/>
                <YAxis tickMargin={40}/>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="time"
                  stroke="#0867C1"
                  fill="#17A2B8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="row mt-4">
      <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="teacherDashboard_item">
            <h4 className="teacherDashboard_item_title"> دانشجوجدید</h4>
            <span className="teacherDashboard_item_number">120</span>
          </div>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="teacherDashboard_item">
            <h4 className="teacherDashboard_item_title">خرید دوره</h4>
            <span className="teacherDashboard_item_number">120</span>
          </div>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="teacherDashboard_item">
            <h4 className="teacherDashboard_item_title">تراکنش امروز</h4>
            <span className="teacherDashboard_item_number">11,752,000 تومان</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherDashboard;
