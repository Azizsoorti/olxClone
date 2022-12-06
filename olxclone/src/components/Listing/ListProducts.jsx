import React from 'react'
import { Link} from "react-router-dom";
import "./ListProducts.css";
function ListProducts() {  
  return (
    <>
      <div className="category-items border-end border-bottom border-start mx-4 container bg-white">
                        <div className="row">
                            <div className="category-item col-lg-3 mt-5 lh-base">
                                <ul type='none' >
                                    <li className='fw-bold mb-3'> <Link to='#' className='gategory'> Mobiles  </Link>   </li>
                                    <li> <Link to='#' className='gategory'> Mobile   </Link>   </li>
                                    <li> <Link to='#' className='gategory'> Accessories</Link>   </li>
                                    <li> <Link to='#' className='gategory'> Smart      </Link>   </li>
                                    <li> <Link to='#' className='gategory'> Tablets  </Link>   </li>
                                </ul>


                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Vehicles	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Cars	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Cars Accessories	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Spare Parts	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Buses, Vans & Trucks	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Rickshaw & Chingchi	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Tractors & Trailers	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Cars on Installments	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Boats	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Vehicles	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Property for Sale	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Land & Plots	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Houses	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Apartments & Flats	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Shops - Offices - Commercial Space	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Portions & Floors	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Property for Rent	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Houses	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Portions & Floors	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Apartments & Flats	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Shops - Offices - Commercial Space	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Rooms	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Roommates & Paying Guests	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Vacation Rentals - Guest Houses	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Land & Plots	</Link></li>
                                </ul>
                            </div>
                            <div className="category-item col-lg-3 lh-base">
                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Electronics & Home Appliances	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Computers & Accessories	</Link></li>
                                    <li> <Link to='#' className='gategory'>	TV - Video - Audio	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Home Appliances	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Generators, UPS & Power Solutions	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Cameras & Accessories	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Kitchen Appliances	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Games & Entertainment	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Fridges & Freezers	</Link></li>
                                    <li> <Link to='#' className='gategory'>	AC & Coolers	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Washing Machines & Dryers	</Link></li>

                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Bikes	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Motorcycles	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Bicycles	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Spare Parts	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Scooters	</Link></li>
                                    <li> <Link to='#' className='gategory'>	ATV & Quads	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Business, Industrial & Agriculture	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Business & Industry	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Food & Restaurants	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Medical & Pharma	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Trade & Industrial	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Construction & Heavy Machinery	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Business for Sale	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Agriculture	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Services	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Services	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Education & Classes	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Car Rental	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Maids & Domestic Help	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Web Development	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Home & Office Repair	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Electronics & Computer Repair	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Travel & Visa	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Event Services	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Farm & Fresh Food	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Drivers & Taxi	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Movers & Packers	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Health & Beauty	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Catering & Restaurant	</Link></li>
                                </ul>


                            </div>
                            <div className="category-item col-lg-3 lh-base">
                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Jobs	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Online	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Part Time	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Jobs	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Marketing	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Sales	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Education	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Customer Service	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Domestic Staff	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Hotels & Tourism	</Link></li>
                                    <li> <Link to='#' className='gategory'>	IT & Networking	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Medical	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Human Resources	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Accounting & Finance	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Manufacturing	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Clerical & Administration	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Advertising & PR	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Restaurants & Hospitality	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Graphic Design	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Security	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Real Estate	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Content Writing	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Engineering	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Delivery Riders	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Internships	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Architecture & Interior Design	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Animals	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Birds	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Hens & Aseel	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Cats	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Dogs	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Livestock	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Pet Food & Accessories	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Animals	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Fish & Aquariums	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Horses	</Link></li>
                                </ul>


                            </div>
                            <div className="category-item col-lg-3 lh-base">
                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Furniture & Home Decor	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Sofa & Chairs	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Beds & Wardrobes	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Home Decoration	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Household Items	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Tables & Dining	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Office Furniture	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Garden & Outdoor	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Painting & Mirrors	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Curtains & Blinds	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Rugs & Carpets	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Fashion & Beauty	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Clothes	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Watches	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Skin & Hair	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Footwear	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Wedding	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Jewellery	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Accessories	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Fashion	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Make Up	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Lawn & Pret	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Couture	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Books, Sports & Hobbies	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Other Hobbies	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Gym & Fitness	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Sports Equipment	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Musical Instruments	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Books & Magazines	</Link></li>
                                </ul>

                                <ul type='none'>
                                    <li className='fw-bold mt-5 mb-3'> <Link to='#' className='gategory'>	Kids	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Toys	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Kids Accessories	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Kids Furniture	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Kids Bikes	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Prams & Walkers	</Link></li>
                                    <li> <Link to='#' className='gategory'>	Swings & Slides	</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default ListProducts