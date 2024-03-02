import './AdminIncome.scss';

function AdminIncome() {
  return (
   <section className="adminIncome">
        <h4 className="adminDashboard_title">درآمد </h4>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="adminIncome_item">
                    <h6 className="adminIncome_title">فروش این ماه</h6>
                    <span className="adminIncome_text">27,000,000 تومان</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="adminIncome_item">
                    <h6 className="adminIncome_title">در انتظار پرداخت </h6>
                    <span className="adminIncome_text">12,540,000 تومان</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="adminIncome_item">
                    <h6 className="adminIncome_title">درآمدهای امروز</h6>
                    <span className="adminIncome_text">7,800,000 تومان</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="adminIncome_item">
                    <h6 className="adminIncome_title">تعداد خرید امروز</h6>
                    <span className="adminIncome_text">8 نفر</span>
                </div>
            </div>
        </div>
   </section>
  )
}

export default AdminIncome