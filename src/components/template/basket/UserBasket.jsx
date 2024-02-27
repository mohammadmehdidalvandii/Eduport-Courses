import './UserBasket.scss';
import CoursesContext from '../../../Context/coursesContext'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function UserBasket() {
    // Context Api 
    const courseData = useContext(CoursesContext)
  return (
   <section className="userBasket">
        <div className="container">
            <div className="col-12">
                <div className="wrapper_userBasket">
                    {courseData.userBasket.length === 0 ?(
                        <h2 className="userBasket_null">سبد خرید خالی است</h2>
                    ):(
                        courseData.userBasket.map(basket=>(
                            <div className="userBasket_item flex-column flex-md-row " key={basket.id}>
                                <img src={basket.image}alt=" user basket image" className="userBasket_item_img" />
                                    <span className="userBasket_item_name">{basket.title}</span>
                                    <span className="userBasket_item_price">قیمت {basket.price.toLocaleString()}</span>
                            </div>
                            ))
                    )}
                    {courseData.userBasket.length !== 0 ?(
                        <button className="userBasket_btn">پرداخت</button>
                        ):(
                            
                            <NavLink to='/Courses' className="userBasket_btn">خرید دوره</NavLink>
                    )}
                  
                </div>
            </div>
        </div>
   </section>
  )
}

export default UserBasket