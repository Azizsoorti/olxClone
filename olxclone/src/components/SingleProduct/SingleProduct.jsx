import "./SingleProduct.css"
import { Link } from 'react-router-dom';

function SingleProduct({ productImg, productName, Heart, price, location, time }) {
    return (
        <>


            <div className="col-12 col-lg-4 col-md-3 col-sm-6 shadow-sm my-2">
                <Link to="detailsProduct" className='link'>
                    <div className="product-img" >
                        <img src={productImg} className="w-100" style={{ height: "13rem" }} />
                    </div>
                    <div className="product-body  ">
                        <div className="top-body py-2 d-flex ">
                            <p className='float-start ' >{productName}</p>
                            <span className='ms-auto pe-3' >{Heart}</span>
                        </div>
                        <div className="center-body ">
                            <h5 className='fw-bold'>{price}</h5>
                        </div>
                        <div className="bottom-body py-3 d-flex ">
                            <p className='pe-4 opacity-75'>{location}</p>
                            <p className=' ps-3 opacity-75'>{time}</p>
                        </div>
                    </div>
                </Link>
            </div>


        </>
    )
}

export default SingleProduct
