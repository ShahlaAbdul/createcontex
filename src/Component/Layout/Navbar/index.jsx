import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className="navbarContainer">
            <div className="navbarImg">
                <img src="	https://preview.colorlib.com/theme/eiser/img/logo.png" alt="" />
            </div>
            <div className='pages'>
                <ul className='navbarMain'>
                    {/* <li ><NavLink to="/" activeClassname="active"/> Home </li>
                    <li><NavLink to="/shop" activeClassname="active"> Shop </NavLink></li>
                    <li ><NavLink to="/" activeClassname="active"/> Blog </li>
                    <li ><NavLink to="/" activeClassname="active"/> Page </li> */}
                    {/* <a href="/shop">rgtrhy6ty</a>s */}
                    <li><NavLink to={"/"} className={"non-active"} activeClassname="active">Home</NavLink></li>
                    <li><NavLink to={"/shop"}  className={"non-active"} activeClassname="active">Shop</NavLink></li>
                    <li><NavLink to={"/"}  className={"non-active"} activeClassname="active">Blog</NavLink></li>
                    <li><NavLink to={"/"}  className={"non-active"} activeClassname="active">Page</NavLink></li>
                  
                </ul>
            </div>

            <div className="navbaricons">
                <div className='search'><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="shop"><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="wishlist"><i class="fa-regular fa-heart"></i></div>
            </div>
        </div>

    </div>
  )
}

export default Navbar