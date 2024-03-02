import './CmtCard.scss';

function CmtCard() {
  return (
    <div className="cmtCard">
    <div className="cmtCard_info">
        <span className="cmtCard_info_name">نیلوفر جلیلی</span>
        <span className="cmtCard_info_time">12 اسنفد 1402</span>
        <span className="cmtCard_info_score"> امیتاز : 4</span>
    </div>
<ul className="cmtCard_items">
    <li className="cmtCard_item">
        <span className="cmtCard_item_title">نام دوره :</span>
        <span className="cmtCard_item_text">دوره HTML</span>
    </li>
    <li className="cmtCard_item">
        <span className="cmtCard_item_title">کامنت :</span>
        <span className="cmtCard_item_text">دوره بسیار عالی و جامع</span>
    </li>
    <li className="cmtCard_item">
        <span className="cmtCard_item_title">عملیات</span>
        <div className="cmtCard_item_buttons">
            <button className="cmtCard_item_btn btn_confirm">تایید</button>
            <button className="cmtCard_item_btn btn_delete">حذف</button>
            <button className="cmtCard_item_btn btn_show">مشاهده</button>
        </div>
    </li>
</ul>
</div>
  )
}

export default CmtCard