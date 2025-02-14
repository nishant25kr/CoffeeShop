import React from 'react'
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Home.css'
import img1 from '../src/assets/black.jpg'
import img2 from '../src/assets/cappichino.jpg'
import img3 from '../src/assets/laatee.jpg'
import shop1 from '../src/assets/shop1.jpg'
import shop2 from '../src/assets/shop2.jpg'
import shop3 from '../src/assets/shop3.jpg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Home() {
    return (
        <div className='text-white bg-black bg-opacity-25'>
            <div className="row  text_row align-items-center">
                <div className="col-md-6 p-5 text_div">
                    <h1>Welcome to The Java Spot!</h1>
                    <p>Where every cup tells a story and every visit feels like home. Whether you're here for a cozy morning brew, a quick pick-me-up, or to relax with friends, we’re passionate about serving you the finest coffee made with love and care. Come in, unwind, and let the aroma of freshly brewed coffee elevate your day. We're so glad you're here!</p>
                    <button className='btn btn_ px-5 text-white'>Buy Now</button>
                </div>
                <div className="col-md-6 text_div1"></div>

            </div>

            <div className="row   text-center bg-black bg-opacity-100  ">
                <hr />
                <div className="col-md-4 p-5 shop_div" >
                    <img src={img1} className='img-fluid' alt="" />
                    <button className='btn border text-white m-3 px-3'>Black Coffee</button>
                </div>

                <div className="col-md-4 p-5 shop_div">
                    <img src={img2} className='img-fluid' alt="" />
                    <button className='btn border text-white m-3 px-3'>Cappuccino</button>
                </div>
                <div className="col-md-4 p-5 shop_div">
                    <img src={img3} className='img-fluid' alt="" />
                    <button className='btn border text-white m-3 px-3'>Latte</button>
                </div>
                <hr />
            </div>


            <div className="row bg-black bg-opacity-25">
                <div className="col-md-12 p-5">
                    <div className='text-center font'>
                        <h1>We are proud to partner with the leading roasters from around the world.</h1>
                        <p>
                            Black Fox Coffee Co takes pride in providing choice and education to our customers. On top of roasting coffee ourselves, we partner with like-minded roasters from around the world, giving our customers the chance to experience new coffees and our passionate team the opportunity to impart their wealth of knowledge.
                        </p>
                        <h4>
                            Our esteemed partners include:
                        </h4>
                        <ul className="list-inline">
                            <li>Coffee Collective, Copenhagen</li>
                            <li>Square Mile, East London</li>
                            <li>Luna, Vancouver</li>
                            <li>49th Parallel, Vancouver</li>
                            <li>George Howell, Boston</li>
                            <li>Regalia, Queens</li>
                            <li>Kuma, Seattle</li>
                            <li>Small Batch, Melbourne</li>
                            <li>Prolog, Copenhagen</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                    </div>
                </div>
            </div>

            <div className="row   text-center bg-black bg-opacity-75  ">
                
                <hr />
                <div className="col-md-4 p-5 shop_div store_div" >
                    <img src={shop1} className='img-fluid' alt="" />

                </div>

                <div className="col-md-4 p-5 shop_div store_div">
                    <img src={shop2} className='img-fluid' alt="" />
                    <h1 className='p-2 border font rounded m-2'>Our stores</h1>

                </div>
                <div className="col-md-4 p-5 shop_div store_div">
                    <img src={shop3} className='img-fluid' alt="" />

                </div>
                <hr />
            </div>


        </div>
    )
}
