import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import katherine from "../assets/katherine.jpg";
import noelia from "../assets/noelia.jpg";
import carlos from "../assets/carlos.jpg";


const slidesDesktop = [
  {
    id: 1,
    image: katherine,
    title: "Katherine Alvarez García",
    
  },
  {
    id: 2,
    image: noelia,
    title: "Noelia Cárdenas Váquez",
   
  },
 
];


const BannerExpertos = () => {
 

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    swipe: true,
  };

  return (
    <div className="banner-expertos">
      (
        <Slider {...settings} className="slick-slider">
          {slidesDesktop.map((slide) => (
            <div key={slide.id} className="slick-slide">
              <div className="slide-content-expertos">
               
                <img
                  className="banner-img-expertos"
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                />
                 <div className="shadow-expertos">
                  <h1>{slide.title}</h1>
                
                
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )
    </div>
  );
};

export default BannerExpertos;
