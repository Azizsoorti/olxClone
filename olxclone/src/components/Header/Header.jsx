import "./Header.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
// import { TiPlus } from "react-icons/ti";
import { SlArrowDown } from "react-icons/sl";
function Header() {
  return (
    <>
      <div className="position-fixed">
        {/* =============================logo & top-pages=============================================== = */}
        <div className="topBar   px-4 py-3 ">
          <img className="logo1" src="images/olx-logo1.png" alt="" />
          <div className="top-pages d-inline mx-5">
            <NavLink to="#" className="text-decoration-none" >
              <img className="me-3" src="images/car-icon.png" alt="Motors" />
              <p className="d-inline  ">MOTOR</p>
            </NavLink>
          </div>
          <div className="top-pages d-inline">
            <NavLink to="#" className="text-decoration-none" >
              <img className="me-3" src="images/apartment.png" alt="Property" />
              <p className="d-inline  ">PROPERTY</p>
            </NavLink>
          </div>

        </div>

        {/* =============================== * navbar * ============================================ */}
        <div className="navBar  px-4 py-1 d-flex">
          <img src="images/OLX-Symbol.png" alt="olx-symbol" />
          <div className="contryBar ">
            <BiSearch />
            <input type="text" placeholder="Pakistan" />
            <IoIosArrowDown />
          </div>

          <div className="findItem d-flex">
            <input type="text" placeholder="Find Cars, Mobile Phones and more..." />
            <button className="searchBtn"><BiSearch className="fs-3" /> </button>
          </div>
          <div className="login-sell-btn d-flex ">
            <button className="login"><Link to="#" className="loginBtn">Login</Link></button>
            {/* <button className="sellBtn"><TiPlus /> SELL </button> */}
            <img src="images/sell.svg" alt="sell" />
          </div>
        </div>


        {/* =======================================topCategory======================================  */}
        <div className="topCategory px-4 py-3">

          <button className="select-category"><Link to="#" className="s-c-link"> ALL CATEGORIES <SlArrowDown className="s-g-icon" /></Link></button>
          <Link to="#" className="gategory"> Mobile Phones </Link>
          <Link to="#" className="gategory">Cars  </Link>
          <Link to="#" className="gategory"> Motorcycles </Link>
          <Link to="#" className="gategory"> Houses </Link>
          <Link to="#" className="gategory">TV - Video - Audio  </Link>
          <Link to="#" className="gategory"> Tablets </Link>
          <Link to="#" className="gategory"> Land & Plots </Link>

        </div>


      </div>
    </>
  );
}

export default Header;