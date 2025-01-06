import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

const [theme , settheme] = useState('light')
 
useEffect(()=>{
    localStorage.setItem('theme',theme)
   const localtheme =   localStorage.getItem('theme')
   document.querySelector('html').setAttribute('data-theme',localtheme)

},[theme])

const handletoggle  = e =>{
    if(e.target.checked){
        settheme('dark')
    }
    else{
        settheme('light')
    }
}

    const Link = 
  
     <>
        <NavLink className={ ({isActive})=> isActive ? 'font-bold text-white border-2 bg-green-500 p-2 rounded-xl text-xl' : 'text-xl border-2 hover:text-white p-2 text-green-500 ho rounded-xl hover:bg-green-500' } to='/'>Home</NavLink>
        <NavLink className={ ({isActive})=> isActive ? 'font-bold text-white border-2 bg-green-500 p-2 rounded-xl text-xl' : 'text-xl border-2 hover:text-white p-2 text-green-500 ho rounded-xl hover:bg-green-500' } to='/listed'>Listed Books</NavLink>
        <NavLink className={ ({isActive})=> isActive ? 'font-bold text-white border-2 bg-green-500 p-2 rounded-xl text-xl' : 'text-xl border-2 hover:text-white p-2 text-green-500 ho rounded-xl hover:bg-green-500' } to='/read'>Pages to Read</NavLink>
        <NavLink className={ ({isActive})=> isActive ? 'font-bold text-white border-2 bg-green-500 p-2 rounded-xl text-xl' : 'text-xl border-2 hover:text-white p-2 text-green-500 ho rounded-xl hover:bg-green-500' } to='/about'>About</NavLink>
        <NavLink className={ ({isActive})=> isActive ? 'font-bold text-white border-2 bg-green-500 p-2 rounded-xl text-xl' : 'text-xl border-2 hover:text-white p-2 text-green-500 ho rounded-xl hover:bg-green-500' } to='/contact'>Contract</NavLink>

        </>
   


    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                 {Link}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Book-Store</a>
        </div>
        <div className=" navbar-center hidden lg:flex gap-2">
          <ul className="menu-horizontal px-1 gap-4  ">
             {Link}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-4 ">
          <a className="btn">Sign Up</a>
          <a className="btn">Login</a>
          <label className="grid cursor-pointer place-items-center">
  <input
    type="checkbox"
     onChange={handletoggle}
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
        </div>
      </div>
    );
};

export default Header;