 
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
 import React, { Component, useEffect, useState } from "react";
 import Slider from "react-slick";
 import './productdata.jsx'
 import { AiFillStar } from "react-icons/ai";
 import './sliderproduct.css'
import { Productdata } from './productdata.jsx';
import Samplenextarrow from '../slider/SampleNextArrow.jsx';
import SamplePrevArrow from '../slider/SamplePrevArrow.jsx';


const Sliderproduct = () =>{

   const [product, setproduct] = useState([]);
   const [pardakht, setpardakht] = useState([]);

   useEffect( ()=>{
      setproduct(Productdata)
   },[product])

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <Samplenextarrow/> ,
      prevArrow: <SamplePrevArrow/>
    };
    
console.log(pardakht);


    return(
      <>
      
      <div className='contianer-product'>

         <Slider {...settings}>
            {product.map((item,index) =>{ 
               return(
                  <div className='product' key={item.id}>
                     <img src={item.image} alt="" />
                     <div className="info">
                        <h1> {item.titel} </h1>
                        <span><AiFillStar/> {item.rate}</span>
                        <p>هزارتومان {item.price} </p>
                        <button onClick={()=> setpardakht([...pardakht ,  {productselectorname: item.titel , productselectorprice: item.price , productid: item.id} ])} >+</button>
                     </div>
                  </div>
               )})}
         </Slider>
      </div>

      <div className='contianer-sabad'>
         
            {pardakht.map(item =>{
         
               return(
            
                  <div className='productselect'>
                        <h2>{item.productselectorprice}</h2>
                        <p>{item.productselectorname}</p>
                        <button onClick={() => setpardakht(pardakht.filter(sss => sss.productid !== item.productid))} >-</button>
                     </div>
                  
               )
            })}
         
            
            <div className='pardakht'>
               <h2>هزار تومان {pardakht.reduce((sum , current) => sum + current.productselectorprice, 0)}</h2>
               <button>پرداخت</button>
            </div>
      </div>
  </>
    
    )
} 


export default Sliderproduct