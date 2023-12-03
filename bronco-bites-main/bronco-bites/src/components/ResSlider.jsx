import react from 'react';
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import Menu from './Menu';
import Dropdown from './Dropdown';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../slider.css';
import carls from '../images/carls.png';
import panda from '../images/panda.jpg';
import saddles from '../images/saddles.jpg';
import subway from '../images/subway.jpg';
import roundtable from '../images/roundtable.png';
import qdoba from '../images/qdoba.png';
import bric from '../images/bricbreak.jpg';
import starbucks from '../images/starbucks.png';
import polly from '../images/polly.png';
import fit from '../images/fitbites.png';


// import required modules
import { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';

export default function ResSlider() {

  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const getSortedMenuItems = (menuItems, order) => {
      return [...menuItems].sort((a, b) => {
          return order === 'asc' ? a.price - b.price : b.price - a.price;
      });
  };

  useEffect(() => {
      axios.get('http://localhost:5001/restaurants')
          .then(response => {
              setRestaurants(response.data);
          })
          .catch(error => {
              console.error('Error fetching restaurants:', error);
          });
  }, []);

  const handleRestaurantClick = (restaurantId) => {
      if (selectedRestaurant && selectedRestaurant.id === restaurantId) {
          setSelectedRestaurant(null);
      } else {
          const restaurant = restaurants.find(r => r.id === restaurantId);
          setSelectedRestaurant(restaurant);
      }
  };
  const sortedMenu = selectedRestaurant
      ? getSortedMenuItems(selectedRestaurant.menu, sortOrder)
      : [];

  return (

    <div className="rlist">
      <Swiper

        initialSlide={4}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        keyboard={{
            enabled: true,
          }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ 
            el: '.swiper-pagination', clickable: true 
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
        modules={[EffectCoverflow, Pagination, Navigation, Scrollbar, A11y]}
        className="mySwiper"
      >

      {/* <SwiperSlide>
          {({isActive}) =>(
            <div>Current lide is {isActive ? 'active' : 'not active'}</div>
          )}

        </SwiperSlide> */}


        <SwiperSlide className="round">
          <div>
            <img src={carls}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="round">
          <div className="logo" id="panda">
            <button onClick={handleRestaurantClick}><img src={panda}></img></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="round">
          <div className="logo" id="saddles">
            <button type="button"><img src={saddles}></img></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="round">
          <div className="logo" id="subway">
            <button type="button"><img src={subway}></img></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="round">
          <div className="logo" id="roundtable">
            <button type="button"><img src={roundtable}></img></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="round">
          <div className="logo" id="qdoba">
            <button type="button"><img src={qdoba}></img></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="round">
          <div className="logo" id="bricbreak">
            <button type="button"><img src={bric}></img></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="round">
          <img src={fit}></img>
        </SwiperSlide>
        <SwiperSlide className="round">
          <img src={polly}></img>
        </SwiperSlide>
        <SwiperSlide className="round" onClick="button">
          <img src={starbucks}></img>
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
    </div>
  );

} 
