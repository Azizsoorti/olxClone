import { useState } from "react";
import "./Header.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import ListProducts from "../Listing/ListProducts";
import Ads from "../Ads/Ads"


function Header() {

  const [adsShow, setAdsShow] = useState({ display: "block" });
  const [listShow, setListShow] = useState({display:"none"});
  const [display, setDisplay] = useState(false);

  function listShowFunc() {
    setDisplay(true);
    setAdsShow({display:"none"});
    setListShow({display:"block"})
  };
  function adsShowFunc(){
    setDisplay(false);
    setAdsShow({display:"block"});
    setListShow({display:"none"})
  }

  return (
    <>
      <div className="">
        {/* =============================logo & top-pages=============================================== = */}
        <div className="topBar row  px-4 py-3 ">
          <div className="col-12 d-flex gx-0"> 
          <img className="logo1" src="assets/images/olx-logo1.png" alt="" />
          <div className="top-pages d-inline mx-5">
            <NavLink to="#" className="text-decoration-none" >
              <img className="me-3" src="assets/images/car-icon.png" alt="Motors" />
              <p className="d-inline  ">MOTOR</p>
            </NavLink>
          </div>
          <div className="top-pages d-inline">
            <NavLink to="#" className="text-decoration-none" >
              <img className="me-3" src="assets/images/apartment.png" alt="Property" />
              <p className="d-inline  ">PROPERTY</p>
            </NavLink>
          </div>
          </div>
        </div>

        {/* =============================== * navbar * ============================================ */}
        <div className="row ">  

        <div className="navBar col-12 px-4 py-1 d-flex">
          <div className="row d-flex">
            <div className="col-sm-3 d-flex "> 
          <img src="assets/images/OLX-Symbol.png" alt="olx-symbol" />
          <div className="contryBar d-flex ">
            <BiSearch />
            <input className="mx-2 " type="text" placeholder="Pakistan" />
            <IoIosArrowDown />
          </div>
          </div>

<div className="col-sm-9">
          <div className="findItem d-flex  gx-0 float-start">
            <input type="text" placeholder="Find Cars, Mobile Phones and more..." />
            <button className="searchBtn ms-auto"><BiSearch className="fs-3" /> </button>
          </div>

          <div className="login sellBtn d-flex float-end ">
            <button className="login me-3"><Link to="#" className=" loginBtn">Login</Link></button>
           <Link to="sellProduct"><img  src="assets/images/sellimg.png" alt="sell" /> </Link> 
          </div>
          </div>
          </div>
        </div>

        </div>

        {/* =======================================topCategory======================================  */}
        <div className="row"> 
        <div className="topCategory col-12 px-4 py-3 ms-1 ">

          <button className="select-category">
           ALL CATEGORIES
           {display===!true? <SlArrowDown className="s-g-icon " onClick={listShowFunc}  />:  <SlArrowUp className="s-g-icon " onClick={adsShowFunc} />}
           
          </button>
          <Link to="#" className="gategory"> Mobile Phones </Link>
          <Link to="#" className="gategory">Cars  </Link>
          <Link to="#" className="gategory"> Motorcycles </Link>
          <Link to="#" className="gategory"> Houses </Link>
          <Link to="#" className="gategory">TV - Video - Audio  </Link>
          <Link to="#" className="gategory"> Tablets </Link>
          <Link to="#" className="gategory"> Land & Plots </Link>

        </div>
        </div>
        {/* ============================ListProducts======================================  */}
      
        <Ads  adsShow={adsShow} />
        <ListProducts listShow={listShow} />



      </div>
      <Outlet />
    </>
  );
}

export default Header;