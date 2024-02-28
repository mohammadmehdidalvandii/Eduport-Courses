import './UserBasket.scss';
import CoursesContext from '../../../Context/coursesContext'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';

function UserBasket() {
    // Context Api 
    const courseData = useContext(CoursesContext)

    // handler Delete Course 
    const handlerDeleteCourse = ()=>{
        let newUserCourse = courseData.userBasket.filter(basket => basket.id  !==  basket.id)
        courseData.setUserBasket(newUserCourse)
        swal({
            icon:"error",
            text:"دوره از سبد خرید حذف گردید.",
            buttons:"باشه"
        })
    }

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
                                    <div className="userBasket_buttons">
                                        <button className="userBasket_button btn_delete" onClick={handlerDeleteCourse}>
                                            
                                            حذف</button>
                                        <NavLink to={`/Course_d/${basket.id}/${basket.title}`} className="userBasket_button btn_show">مشاهده</NavLink>
                                    </div>
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