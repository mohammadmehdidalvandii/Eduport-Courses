import './TeacherComment.scss';
import CmtCard from '../../../module/CmtCard/CmtCard'

function TeacherComment() {
  return (
    <section className="teacherComment">
        <div className="row">
            <div className="col-12">
                <h6 className="teacherComment_title">کامنت های شما</h6>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <CmtCard/>
                <CmtCard/>
                <CmtCard/>
            </div>
        </div>
    </section>
  )
}

export default TeacherComment