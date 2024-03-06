import './TeacherOrder.scss';


function TeacherOrder() {
  return (
    <section className="teacherOrder">
        <div className="row">
            <div className="col-12">
                <h6 className="TeacherOrder_title">لیست سفارشات</h6>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
            <div className="teacherOrder_item">
                    <span className="teacherOrder_item_name teacherOrder_item_text">نام دوره : <sub>اموزش فیگا</sub></span>
                    <span className="teacherOrder_item_code teacherOrder_item_text">کدپیگیری : <sub>#435821</sub></span>
                    <span className="teacherOrder_item_price teacherOrder_item_text">قیمت : <sub>2,876,999</sub></span>
                    <span className="teacherOrder_item_type teacherOrder_item_text"> روش پرداخت :  <sub>کارت</sub></span>
            </div>
            <div className="teacherOrder_item">
                    <span className="teacherOrder_item_name teacherOrder_item_text">نام دوره : <sub>اموزش فیگا</sub></span>
                    <span className="teacherOrder_item_code teacherOrder_item_text">کدپیگیری : <sub>#435821</sub></span>
                    <span className="teacherOrder_item_price teacherOrder_item_text">قیمت : <sub>2,876,999</sub></span>
                    <span className="teacherOrder_item_type teacherOrder_item_text"> روش پرداخت :  <sub>کارت</sub></span>
            </div>
            </div>
        </div>
    </section>
  )
}

export default TeacherOrder