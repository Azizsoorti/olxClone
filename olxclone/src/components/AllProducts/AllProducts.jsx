import React from 'react'
import AdsProducts from "../Ads/AdsProduct"
import SingleProduct from '../SingleProduct/SingleProduct';
import { FaRegHeart } from "react-icons/fa";
import "./AllProducts.css";
function AllProducts() {
    return (
        <>
            <div className="main my-5 px-4 overflow-hidden">
                <h4 >Fresh recommendations</h4>
                <div className="row  ">
                    <SingleProduct
                        productImg="assets/images/car.jfif"
                        productName="Rent a Car ISLAMABAD | Corolla"
                        Heart={<FaRegHeart />}
                        price="Rs 10,000"
                        location="Islamabad "
                        time="2 day ago" />


                    <SingleProduct
                        productImg="assets/images/furniture.jfif"
                        productName="Double bed / bed set / Side Tables"
                        Heart={<FaRegHeart />}
                        price="Rs 14,000"
                        location="Liaqutabad Karachi"
                        time="3 day ago" />


                    <SingleProduct
                        productImg="assets/images/product1.jpeg"
                        productName="The Royal Appartment"
                        Heart={<FaRegHeart />}
                        price="Rs 60,00000"
                        location="Landhi Karachi"
                        time="1 day ago" />


                    <SingleProduct
                        productImg="assets/images/iphone-pro.jfif"
                        productName="13 pro max icloud lock"
                        Heart={<FaRegHeart />}
                        price="Rs 150,000"
                        location="Islamabad "
                        time="1 day ago" />


                    <SingleProduct
                        productImg="assets/images/camera.jfif"
                        productName="canon 40D"
                        Heart={<FaRegHeart />}
                        price="Rs 23,000"
                        location="Lahore"
                        time="2 day ago" />


                    <SingleProduct
                        productImg="assets/images/appartment-pro.jfif"
                        productName="3 bed apartment on rent"
                        Heart={<FaRegHeart />}
                        price="Rs 70,000"
                        location="Gulshan iqbal Karachi"
                        time="1 day ago" />
                </div>
            </div>
            <AdsProducts />
        </>
    )
}

export default AllProducts