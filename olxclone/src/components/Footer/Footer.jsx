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
    <img src="assets/images/footer-img2.svg" alt="" style={{width:"8rem"}} /> <img  src="assets/images/footer-img3.svg" alt="" style={{width:"8rem"}} /> <img  src="assets/images/footer-img4.svg" alt="" style={{width:"8rem"}} />  
   </div>
      </div>


    <div className="row f-container ">
      <div className="col-md-2 py-4 ">
      <section className="_363e0a79"><span className="_34a7409b _2e82a662 a695f1e9  fs-6 fw-bolder ">Popular Categories</span><ul className="_022cac30"><li><Link className="gategory" to="/cars_c84" ><span className="_8918c0a8">Cars</span></Link></li><li><Link className="gategory" to="/apartments-flats_c1723"><span className="_8918c0a8  ">Flats for rent</span></Link></li><li><Link className="gategory" to="/mobile-phones_c1453"  ><span className="_8918c0a8">Mobile Phones</span></Link></li><li><Link className="gategory" to="/jobs_c4"  ><span className="_8918c0a8">Jobs</span></Link></li></ul></section>
      </div>
     <div className="col-md-2 py-4">
     <section className="_363e0a79"><span className="_34a7409b _2e82a662 a695f1e9 fs-6 fw-bolder ">Trending Searches</span><ul className="_022cac30"><li><Link className="gategory" to="/motorcycles_c81"><span className="_8918c0a8">Bikes</span></Link></li><li><Link className="gategory" to="/watches_c1970"  ><span className="_8918c0a8">Watches</span></Link></li><li><Link className="gategory" to="/items/q-books"  ><span className="_8918c0a8">Books</span></Link></li><li><Link className="gategory" to="/items/q-dogs"  ><span className="_8918c0a8">Dogs</span></Link></li></ul></section>
     </div>
   <div className="col-md-2 py-4">
   <section className="_363e0a79"><span className="_34a7409b _2e82a662 a695f1e9 fs-6 fw-bolder">About Us</span><ul className="_022cac30"><li><Link className="gategory" to="https://www.empg.com/"><span className="_8918c0a8">About EMPG</span></Link></li><li><Link className="gategory" to="https://blog.olx.com.pk/"  ><span className="_8918c0a8">OLX Blog</span></Link></li><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us/articles/4403042207631-How-can-you-contact-Us-"  ><span className="_8918c0a8">Contact Us</span></Link></li><li><Link className="gategory" to="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website"  ><span className="_8918c0a8">OLX for Businesses</span></Link></li></ul></section>
   </div>
      <div className="col-md-2 py-4">
      <section className="_363e0a79"><span className="_34a7409b _2e82a662 a695f1e9   fs-6 fw-bolder ">OLX</span><ul className="_022cac30"><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us"  ><span className="_8918c0a8">Help</span></Link></li><li><Link className="gategory" to="/sitemap/most-popular"  ><span className="_8918c0a8">Sitemap</span></Link></li><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use-"  ><span className="_8918c0a8">Terms of use</span></Link></li><li><Link className="gategory" to="https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information"  ><span className="_8918c0a8">Privacy Policy</span></Link></li></ul></section>
      </div>
      <div className="col-md-4 py-4 px-5">
      <section className="b5d24b44  ">
  <span className="_34a7409b _2e82a662 a695f1e9 fs-6 fw-bold">Follow us</span>
  <div className="_1075545d _3a13e88c _96d4439a ">
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
  <div className="_1075545d _7ed1ca2f _96d4439a">
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="assets/images/footer-img2.svg" style={{width: "5rem"}}
        alt="App Store"
        className="ac2bfae3"
      />
    </Link>
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="assets/images/footer-img3.svg" style={{width: "5rem"}}
        alt="Google Play"
        className="ac2bfae3"
      />
    </Link>
    <Link className="gategory"
      to="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
          src="assets/images/footer-img4.svg" style={{width: "5rem"}}
        alt="App Gallery"
        className="ac2bfae3"
      />
    </Link>
  </div>
</section>

      </div>
    </div>

 <div className="row copy-right  text-end">
  <div className="col-md-12">
  <div className="b49f6016"><div className="_035521cc"><div className="_8bdcd3a2"><span>Free classNameifieds in Pakistan</span> . © 2006-2022 OLX</div></div></div>
  </div>
 </div>

    </div>

    </>
  )
}

export default Footer