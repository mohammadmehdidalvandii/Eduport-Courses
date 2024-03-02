import CmtCard from '../../../module/CmtCard/CmtCard';
import './AdminComment.scss';

function AdminComment() {
  return (
    <section className="adminComment">
        <h4 className="adminDashboard_title">نظرات </h4>
        <div className="row">
            <div className="col-12">
              <CmtCard/>
            </div>
            <div className="col-12">
              <CmtCard/>
            </div>
            <div className="col-12">
              <CmtCard/>
            </div>
        </div>
    </section>
  )
}

export default AdminComment