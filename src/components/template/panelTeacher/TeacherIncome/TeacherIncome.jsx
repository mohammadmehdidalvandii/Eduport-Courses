import './TeacherIncome.scss';
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

function TeacherIncome() {
    const [income, setIncome] = useState([...db.income]);
  return (
   <section className="teacherIncome">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="teacherIncome_item">
                        <h6 className="teacherIncome_item_text">فروش این ماه</h6>
                        <span className="teacherIncome_item_number">337,500 تومان</span>
                    </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="teacherIncome_item">
                        <h6 className="teacherIncome_item_text">فروش این ماه</h6>
                        <span className="teacherIncome_item_number">250,000 تومان </span>
                    </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="teacherIncome_item">
                        <h6 className="teacherIncome_item_text">میانگین درآمد</h6>
                        <span className="teacherIncome_item_number"> 500,000 تومان</span>
                    </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="teacherIncome_chart">
                    <h4 className='teacherIncome_chart_title'>رونده درآمد</h4>
                    <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                width={500}
                height="100%"
                data={income}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 20,
                }}
              >
                {/* <CartesianGrid  /> */}
                <XAxis dataKey="month"  interval={0} angle={-45} tickMargin={15}/>
                <YAxis tickMargin={40}/>
                <Tooltip />
                <Area
                  type=""
                  dataKey="sale"
                  stroke="#0867C1"
                  fill="#17A2B8"
                />
              </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
   </section>
  )
}

export default TeacherIncome