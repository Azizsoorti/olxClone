import ProductCarousel from './Carousel'
import ProductDes from './Product-Des'
import ProductPrice from './Product-Price'
import SellerDesc from './Seller-Desc'
import ProductLocation from './ProductLocation'
import "./DetailsProduct.css"

function DetailsProduct() {
  return (
    <>
    <div className="product-wrapper my-5 container px-5">
      <div className="product row w-100">
        <div className="col-lg-7">
          <ProductCarousel/>
          <ProductDes/>
        </div>
        <div className="col-lg-5">
          <ProductPrice />
          <SellerDesc />
          <ProductLocation />
        </div>
      </div>
    </div>
  </>
  )
}

export default DetailsProduct