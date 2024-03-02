import './TeachCard.scss'

function TeachCard() {
  return (
    <div className="teachCard">
    <div className="teachCard_info">
      <img
        src="/assets/images/user1.jpg"
        alt="teacher-image"
        className="teachCard_info_img"
      />
      <span className="teachCard_info_name">نیلوفر جلیلی</span>
    </div>
    <ul className="teachCard_items">
      <li className="teachCard_item">
        <span className="teachCard_item_title">دانشجویان :</span>
        <span className="teachCard_item_text">5,354</span>
      </li>
      <li className="teachCard_item">
        <span className="teachCard_item_title">دوره ها :</span>
        <span className="teachCard_item_text">15</span>
      </li>
    </ul>
    <div className="teachCard_buttons">
        <button className="teachCard_btn">
            حذف
        </button>
        <button className="teachCard_btn">
          ویرایش
        </button>
        <button className="teachCard_btn">
           تماس
        </button>
    </div>
  </div>
  )
}

export default TeachCard