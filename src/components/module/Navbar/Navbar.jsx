import { NavLink } from 'react-router-dom'
import './Navbar.scss'

// using fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faShoppingCart, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import coursesContext from '../../../Context/coursesContext';
import userContext from '../../../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const courseData =useContext(coursesContext)
    const userData  = useContext(userContext)
    const [activeMenu , setActiveMenu] = useState('/')
    const [showMenu , setShowMenu] = useState(false)
    const [loginRegister , setLoginRegister] = useState(false)
    const [accountMenu ,setAccountMenu] = useState(false)
    const [basketCount ,setBasketCount] = useState(0)
    const [search , setSearch] = useState('')
    const [client , setClient] = useState(true)
    const [admin , setAdmin] = useState(false)
    const [teacher , setTeacher] = useState(false)
    const [student , setStudent] = useState(false)


    const navigate = useNavigate()
    const handlerExitUser = ()=>{
        
    }

    // start login show menu admin-teacher-student
    useEffect(()=>{
        if(userData.userInfo){
            if(userData.userInfo.find(user=>user.role === 'admin') ){
                setAdmin(true)
                setClient(false)
            } else if (userData.userInfo.find(user=>user.role === 'teacher') ){
                setTeacher(true)
                setClient(false)
            } else if(userData.userInfo.find(user=>user.role === 'student') ){
                setStudent(true)
                setClient(false)
            } else if(userData.userInfo.length === 0) {
                navigate('/')
            }
        } else{
            setClient(true)
        }
    },[userData.userInfo])
        // End login show menu admin-teacher-student
 

    // start search logic
    const handlerSearchClick =()=>{
        if(search.trim()){
            navigate(`/Search/${search}`)
            setSearch('')
        }
    }
    const handlerEnterSearch = (e)=>{
        if(e.key === "Enter"){
            if(search.trim()){
                navigate(`/Search/${search}`)
                setSearch('')
            }
        }
    }
    // start search logic


    // logic basketCount
    useEffect(()=>{
        let numberBasket = courseData.userBasket.length
        setBasketCount(numberBasket)
    },[courseData.userBasket])

    // logic show account Menu 
    const handlerShowAccountMenu = ()=>{
        setAccountMenu(!accountMenu)
        setTimeout(()=>{
            setAccountMenu(false)
        },3000)
    }

    // Logic ActiveMenu
    const location =useLocation()

    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
        window.scroll(0,0)
        setShowMenu(false)
    },[location])

    // Logic show MENU
    const handlerShowMenu = ()=>{
        setShowMenu(!showMenu)
        setTimeout(()=>{
            setShowMenu(false)
        },3000)
    }
    const handlerShowRes = ()=>{
        setLoginRegister(!loginRegister)
        setTimeout(()=>{
            setLoginRegister(false)
        },3000)
    }

    // logic show Menu responsive
    const handlerShowMeneRes = ()=>{
        setShowMenu(!showMenu)
        setTimeout(()=>{
            setShowMenu(false)
        },3000)
    }
  return (
    <>
    <section className="navBar d-none d-lg-block">
        <div className="containers">
            <div className="wrapper_navbar">
                <NavLink to='/' className='navbar_logo_link'>
                    <img src="/assets/svg/logo-light.svg" alt="logo" className="navbar_logo_img" />
                </NavLink>

                <ul className="navbar_menu_items">
                    <li className="navbar_menu_item">
                        <NavLink to='/' className={`navbar_menu_link ${activeMenu === '/' ? "navbar_menu_linkActive" : ""}`}>خانه</NavLink>
                    </li>
                    <li className="navbar_menu_item">
                        <NavLink to='/Courses' className={`navbar_menu_link ${activeMenu === '/Courses' ? "navbar_menu_linkActive" : ""}`}>دوره ها</NavLink>
                    </li>
                    <li className="navbar_menu_item">
                        <NavLink to='/About' className={`navbar_menu_link ${activeMenu === '/About' ? "navbar_menu_linkActive" : ""}`}>درباه ما</NavLink>
                    </li>
                    <li className="navbar_menu_item">
                        <NavLink to='/Teachers' className={`navbar_menu_link ${activeMenu === '/Teachers' ? "navbar_menu_linkActive" : ""}`}>مدرس ها</NavLink>
                    </li>
                    <li className="navbar_menu_item">
                        <NavLink to='/Contact' className={`navbar_menu_link ${activeMenu === '/Contact' ? "navbar_menu_linkActive" : ""}`}>تماس با ما</NavLink>
                    </li>
                </ul>
                    {basketCount !== 0 && (
                        <div className="navbar_basket">
                        <NavLink to='/Basket' className='navbar_basket_link'>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </NavLink>
                        <span className="navbar_basket_num">{basketCount}</span>
                    </div>
                    )}
                <div className="navbar_account_search">
                    <div className="navbar_search">
                        <input type="text"
                         className="navbar_search_input" 
                          placeholder='جستجو نام محصول'
                          value={search}
                          onChange={e=>setSearch(e.target.value)}
                          onKeyDown={handlerEnterSearch}
                          />
                        <span className="navbar_search_icon">
                            <FontAwesomeIcon icon={faSearch} onClick={handlerSearchClick}/>
                        </span>
                    </div>
                        {client && (
                                 <div className="navbar_loginRegister">
                                 <span className="navbar_loginRegister_icon" onClick={handlerShowMenu}>
                                 <FontAwesomeIcon icon={faUser}/>
                                 </span>
                                 {showMenu && (
                                     
                                     <>
                                      <ul className="navbar_loginRegister_menu">
                                     <li className="navbar_loginRegister_item">
                                         <NavLink to='/Login' className='navbar_loginRegister_itemLink'>ورود</NavLink>
                                     </li>
                                     <li className="navbar_LoginRegister_item">
                                         <NavLink to='/Register' className='navbar_loginRegister_itemLink'>ثبت نام</NavLink>
                                     </li>
                                 </ul>
                                     </>
                                 )}
                             </div>
                        )}

                        {admin &&(
                            <div className="navbar_account">
                            <span className="navbar_account_icon" onClick={handlerShowAccountMenu}>
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
                            {accountMenu && (
                            <ul className="navbar_account_items">
                                <li className="navbar_account_item">
                                    <NavLink to='/P_admin' className='navbar_account_itemLink'>حساب کاربری</NavLink>
                                </li>
                                <li className="navbar_account_item">
                                    <button className="navbar_account_itemBtn" onClick={handlerExitUser} >خروج</button>
                                </li>
                            </ul>
                            )}
                          </div>
                        )}
                        {teacher &&(
                            <div className="navbar_account">
                            <span className="navbar_account_icon" onClick={handlerShowAccountMenu}>
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
                            {accountMenu && (
                            <ul className="navbar_account_items">
                                <li className="navbar_account_item">
                                    <NavLink to='/P_teacher' className='navbar_account_itemLink'>حساب کاربری</NavLink>
                                </li>
                                <li className="navbar_account_item">
                                    <button className="navbar_account_itemBtn" onClick={handlerExitUser} >خروج</button>
                                </li>
                            </ul>
                            )}
                          </div>
                        )}
                        {student &&(
                            <div className="navbar_account">
                            <span className="navbar_account_icon" onClick={handlerShowAccountMenu}>
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
                            {accountMenu && (
                            <ul className="navbar_account_items">
                                <li className="navbar_account_item">
                                    <NavLink to='/P_student' className='navbar_account_itemLink'>حساب کاربری</NavLink>
                                </li>
                                <li className="navbar_account_item">
                                    <button className="navbar_account_itemBtn" onClick={handlerExitUser} >خروج</button>
                                </li>
                            </ul>
                            )}
                          </div>
                        )}
                    {/* menu login-register */}
                    {/* <div className="navbar_loginRegister">
                        <span className="navbar_loginRegister_icon" onClick={handlerShowMenu}>
                        <FontAwesomeIcon icon={faUser}/>
                        </span>
                        {showMenu && (
                            
                            <>
                             <ul className="navbar_loginRegister_menu">
                            <li className="navbar_loginRegister_item">
                                <NavLink to='/Login' className='navbar_loginRegister_itemLink'>ورود</NavLink>
                            </li>
                            <li className="navbar_LoginRegister_item">
                                <NavLink to='/Register' className='navbar_loginRegister_itemLink'>ثبت نام</NavLink>
                            </li>
                        </ul>
                            </>
                        )}
                    </div> */}
                      {/* menu login-register */}
                      {/* menu account */}
                      {/* <div className="navbar_account">
                        <span className="navbar_account_icon" onClick={handlerShowAccountMenu}>
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        {accountMenu && (
                        <ul className="navbar_account_items">
                            <li className="navbar_account_item">
                                <NavLink to='/' className='navbar_account_itemLink'>حساب کاربری</NavLink>
                            </li>
                            <li className="navbar_account_item">
                                <button className="navbar_account_itemBtn">خروج</button>
                            </li>
                        </ul>
                        )}
                      </div> */}
                         {/* menu account */}
                </div>
            </div>
        </div>
    </section>

    <section className="navbarRes d-block d-lg-none">
        <div className="containers">
            <div className="navbarRes_wrapper">
                <NavLink to='/' className='navbarRes_logo_link'>
                    <img src="/assets/svg/logo-light.svg" alt="logo" className="navbarRes_logo_img" />
                </NavLink>
                {basketCount !== 0 && (
                        <div className="navbar_basket">
                        <NavLink to='/Basket' className='navbar_basket_link'>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </NavLink>
                        <span className="navbar_basket_num">{basketCount}</span>
                    </div>
                    )}
                <div className="navbarRes_loginRegister_menu">
                     <div className="navbarRes_menu">
                        {showMenu ? (
                                 <span className="navbarRes_menu_icon" onClick={handlerShowMeneRes}>
                                 <FontAwesomeIcon icon={faTimes}/>
                             </span>    
                        ) : (
                                     <span className="navbarRes_menu_icon" onClick={handlerShowMeneRes}>
                                     <FontAwesomeIcon icon={faBars}/>
                                 </span>
                        )}
                   
                        {showMenu && (
                        <ul className="navbarRes_menu_items">
                            <li className="navbarRes_menu_item">
                                <NavLink to='/' className={`navbarRes_menu_link ${activeMenu === '/' ? "navbarRes_menu_linkActive" : ""}`}>خانه</NavLink>
                            </li>
                            <li className="navbarRes_menu_item">
                                <NavLink to='/Courses' className={`navbarRes_menu_link ${activeMenu === '/Courses' ? "navbarRes_menu_linkActive" : ""}`}>دوره ها</NavLink>
                            </li>
                            <li className="navbarRes_menu_item">
                                <NavLink to='/About' className={`navbarRes_menu_link ${activeMenu === '/About' ? "navbarRes_menu_linkActive" : ""}`}>درباره ما</NavLink>
                            </li>
                            <li className="navbarRes_menu_item">
                                <NavLink to='/Teachers' className={`navbarRes_menu_link ${activeMenu === '/Teachers' ? "navbarRes_menu_linkActive" : ""}`}>مدرس ها</NavLink>
                            </li>
                            <li className="navbarRes_menu_item">
                                <NavLink to='/Contact' className={`navbarRes_menu_link ${activeMenu === '/Contact' ? "navbarRes_menu_linkActive" : ""}`}>تماس با ما</NavLink>
                            </li>
                            <li className="navbarRes_menu_item">
                                <div className="navbarRes_menu_search">
                                    <input type="text" className="navbarRes_menu_searchInput" placeholder='جستجو...'/>
                                    <span className="navbarRes_menu_searchIcon">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        )}
                    </div>
                    {/* menu login-register */}
                    <div className="navbarRes_loginRegister">
                        <span className="navbarRes_loginRegister_icon" onClick={handlerShowRes}>
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        {loginRegister && (
                        <ul className="navbarRes_loginRegister_items">
                            <li className="navbarRes_loginRegister_item">
                                <NavLink to="/Login" className='navbarRes_loginRegister_link'>ورود </NavLink>
                            </li>
                            <li className="navbarRes_loginRegister_item">
                                <NavLink to="/Register" className='navbarRes_loginRegister_link'>ثبت نام</NavLink>
                            </li>
                        </ul>
                        )}
                    </div>
                      {/* menu login-register */}
                      {/* menu account */}
                            {/* <div className="navbarRes_account">
                                <span className="navbarRes_account_icon" onClick={handlerShowAccountMenu}>
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                {accountMenu && (
                                <div className="navbarRes_account_items">
                                    <li className="navbarRes_account_item">
                                        <NavLink to='/' className='navbarRes_account_itemLink'>حساب کاربری</NavLink>
                                    </li>
                                    <li className="navbarRes_account_item">
                                        <button className="navbarRes_account_itemBtn">خروج</button>
                                    </li>
                                </div>
                                )}
                            </div> */}
                      {/* menu account */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Navbar