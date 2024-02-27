import './UserBasket.scss';

function UserBasket() {
  return (
   <section className="userBasket">
        <div className="container">
            <div className="col-12">
                <div className="wrapper_userBasket">
                    <div className="userBasket_item flex-column flex-md-row ">
                        <img src="/assets/images/courses/c1.jpg" alt=" user basket image" className="userBasket_item_img" />
                            <span className="userBasket_item_name">دروه Css</span>
                            <span className="userBasket_item_price">قیمت دوره</span>
                    </div>
                    <button className="userBasket_btn">پرداخت</button>
                </div>
            </div>
        </div>
   </section>
  )
}

export default UserBasket