import "./StudentDashboard.scss";

function StudentDashboard() {
  return (
    <section className="studentDashboard">
      <div className="row">
        <div className="col-12">
          <div className="studentDashboard_info">
            <img
              src="/assets/images/user1.jpg"
              alt=""
              className="studentDashboard_info_img"
            />
            <h3 className="studentDashboard_info_name">نیلوفر عزیزی</h3>
            <span className="studentDashboard_info_text">خیلی خوش امدی </span>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="studentDashboard_item">
            <span className="studentDashboard_item_text">تعداد دوره</span>
            <span className="studentDashboard_item_number">4</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="studentDashboard_item">
            <span className="studentDashboard_item_text">تعداد ویدیو</span>
            <span className="studentDashboard_item_number">360</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="studentDashboard_item">
            <span className="studentDashboard_item_text"> اتمام دوره</span>
            <span className="studentDashboard_item_number">2</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentDashboard;
