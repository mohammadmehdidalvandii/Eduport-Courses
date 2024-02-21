import { NavLink } from 'react-router-dom';
import './HeaderPage.scss';

function HeaderPage({title , text}) {
  return (
    <section className="headerPage">
        <div className="container">
            <div className="wrapper_headerPage">
                <h4 className="headerPage_title">{title}</h4>
                <div className="headerPage_textLink">
                    <NavLink to='/' className='headerPage_link'>خانه</NavLink>
                    .
                    <span className="headerPage_text">{text}</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeaderPage