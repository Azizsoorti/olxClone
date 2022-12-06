import React from 'react'
import "./Footer.css";
import { Link} from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="container-fluid  mt-5 ">
      <div className="row">
        <div className="col-md-4 col-sm-6 ">
     <img src="assets/images/footer-img1.webp" alt="" />
        </div>
      
      <div className="col-md-4 col-sm-6  text-start">
        <h2 className='mt-3'>TRY THE OLX APP</h2>
        <p className='fs-4 text-start mt-3 '>Buy, sell and find just about anything using the app on your mobile.</p>
      </div>
   <div className="col-md-4 col-sm-6  mt-4 ">
    <h6>Get Your App Today</h6>
    <img src="assets/images/footer-img2.svg" alt="" className='social-Big'/> <img  src="assets/images/footer-img3.svg" alt="" className='social-Big'/> <img  src="assets/images/footer-img4.svg" alt="" className='social-Big'/>  
   </div>
      </div>


    <div className="row f-container ">
      <div className="col-md-2 py-4 ">
      <section  ><span className="  singleLis   fs-6 fw-bolder ">Popular Categories</span><ul  ><li><Link className="gategory" to="/cars_c84" ><span >Cars</span></Link></li><li><Link className="gategory" to="#"><span >Flats for rent</span></Link></li><li><Link className="gategory" to="/mobile-phones_c1453"  ><span >Mobile Phones</span></Link></li><li><Link className="gategory" to="/jobs_c4"  ><span >Jobs</span></Link></li></ul></section>
      </div>
     <div className="col-md-2 py-4">
     <section  ><span className="  singleLis  fs-6 fw-bolder ">Trending Searches</span><ul  ><li><Link className="gategory" to="/motorcycles_c81"><span>Bikes</span></Link></li><li><Link className="gategory" to="#"  ><span >Watches</span></Link></li><li><Link className="gategory" to="/items/q-books"  ><span >Books</span></Link></li><li><Link className="gategory" to="/items/q-dogs"  ><span >Dogs</span></Link></li></ul></section>
     </div>
   <div className="col-md-2 py-4">
   <section  ><span className="  singleLis  fs-6 fw-bolder">About Us</span><ul  ><li><Link className="gategory" to="https://www.empg.com/"><span >About EMPG</span></Link></li><li><Link className="gategory" to="#"  ><span >OLX Blog</span></Link></li><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us/articles/4403042207631-How-can-you-contact-Us-"  ><span >Contact Us</span></Link></li><li><Link className="gategory" to="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website"  ><span >OLX for Businesses</span></Link></li></ul></section>
   </div>
      <div className="col-md-2 py-4">
      <section  ><span className="  singleLis    fs-6 fw-bolder ">OLX</span><ul  ><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us"  ><span >Help</span></Link></li><li><Link className="gategory" to="/sitemap/most-popular"  ><span >Sitemap</span></Link></li><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use-"  ><span >Terms of use</span></Link></li><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information"  ><span >Privacy Policy</span></Link></li></ul></section>
      </div>
      <div className="col-md-4 py-4 px-5">
      <section >
  <span className="  singleLis  fs-6 fw-bold">Follow us</span>
  <div >
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
    <RiFacebookCircleFill  />
    </Link>
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
   <AiFillTwitterCircle />
    </Link>
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiYoutubemusic />
    </Link>
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
   <FaInstagramSquare />
    </Link>
  </div>
  <div >
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="assets/images/footer-img2.svg" 
        alt="App Store"
       className='social-mini'
      />
    </Link>
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="assets/images/footer-img3.svg" 
        alt="Google Play"
        className='social-mini'
      />
    </Link>
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
          src="assets/images/footer-img4.svg" 
        alt="App Gallery"
        className='social-mini'
      />
    </Link>
  </div>
</section>

      </div>
    </div>

 <div className="row copy-right  text-end">
  <div className="col-md-12">
  <div ><div ><div><span>Free classNameifieds in Pakistan</span> . © 2006-2022 OLX</div></div></div>
  </div>
 </div>

    </div>

    </>
  )
}

export default Footer