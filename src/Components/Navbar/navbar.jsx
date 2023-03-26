import React from 'react'
// import logo from '../../images/download.jpeg'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    // <div className='navbar'>
    //     <div className='topLeft'>
    //         {/* <img className='navbarImage' src={logo} alt={logo}/> */}
    //         <i className="navbarIcon fa-brands fa-facebook"></i>
    //         <i className="navbarIcon fa-brands fa-instagram"></i>
    //         <i className="navbarIcon fa-brands fa-linkedin"></i>
    //     </div>

    //     <div className='topMiddle'>
    //         <ul className="navbarList">
    //             <li className='navbarListItem2'>Home</li>
    //             <li className='navbarListItem2'>About</li>
    //             <li className='navbarListItem2'>Contact</li>
    //             <li className='navbarListItem2'>Write</li>
    //         </ul>
    //     </div>

    //     <div className='topRight'>
    //         <ul className="navbarList">
    //             <li className='navbarListItem2 login'>LogIn</li>
    //             <li className='navbarListItem2 signup'>SignUp</li>
    //         </ul>
    //     </div>
    // </div>
    <div>
        <header>
        <nav className='nav'>
            <div className="mobile">
                <div className="mobile__header">
                    <div className="mobile__logo">

                    <a href="#" className='desktop_main_logo'>11 Delivery</a>
                    <Link><i className="navbarIcon fa-brands fa-facebook"></i></Link>
                    <Link><i className="navbarIcon fa-brands fa-instagram"></i></Link>
                    <Link><i className="navbarIcon fa-brands fa-linkedin"></i></Link>
                        

                    </div>
                    <div className="mobile__search">
                        <input type="text" placeholder="Buscar destino"/>
                        <button>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                    <div className="mobile__menu">
                        <button className="menu-btn">
                            <span className="material-symbols-outlined">
                                menu
                            </span>
                        </button>
                    </div>
                </div>
                <div className="mobile__links">
                    <Link to="/">Home</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/createorder">Create Order</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">LogIn</Link>
                </div>
            </div>
            <div className="desktop">
                <div className="desktop__logo">
                    <Link to='/'><a href="#" className='desktop_main_logo'>11 Delivery</a></Link>
                    <i className="navbarIcon fa-brands fa-facebook fa-lg"></i>
                    <i className="navbarIcon fa-brands fa-instagram fa-lg"></i>
                    <i className="navbarIcon fa-brands fa-linkedin fa-lg"></i>
                </div>
                <div className="desktop__links">
                    <Link to="/">Home</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/createorder">Create Order</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">LogIn</Link>
                </div>
                <div className="desktop__search">
                    <input type="text" placeholder="Search"/>
                    <button>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                    {/* <a href="#livingston">SignUp</a>
                    <a href="#contact">LogIn</a> */}
                </div>
                <div className="desktop__links-mini">
                    <button className="">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                    <div className="submenu">
                    <Link to="/">Home</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/createorder">Create Order</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">LogIn</Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}
