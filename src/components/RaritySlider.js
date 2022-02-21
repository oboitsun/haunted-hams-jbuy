import React, { useEffect, useState } from 'react';
// Core modules imports are same as usual
import SwiperCore, { Autoplay, Navigation, Lazy } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';
import '../styles/rarity-slider.scss';
import Heading from './Heading';

SwiperCore.use([Navigation, Autoplay]);
const hams = [
  {
    name: 'Clown',
    imgSrc: '/imgs/nft-ham1.png',
  },
  {
    name: 'Ghost',
    imgSrc: '/imgs/nft-ham2.png',
  },
  {
    name: 'Mummy',
    imgSrc: '/imgs/nft-ham3.png',
  },
  {
    name: 'Fish Man',
    imgSrc: '/imgs/nft-ham4.png',
  },
  {
    name: 'Crazy Professor',
    imgSrc: '/imgs/nft-ham5.png',
  },
  {
    name: 'Count Dracula',
    imgSrc: '/imgs/nft-ham6.png',
  },
  {
    name: 'Frankenstein',
    imgSrc: '/imgs/nft-ham7.png',
  },
  {
    name: 'Devil',
    imgSrc: '/imgs/nft-ham8.png',
  },
  {
    name: 'Normal Hamster',
    imgSrc: '/imgs/nft-ham9.png',
  },
];
export default function RaritySlider() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window && window.innerWidth <= 425 && setIsMobile(true);
  }, []);
  return (
    <div id="rarity-slider" className="w-full overflow-hidden pt-10 pb-10">
      <div className="my-container ">
        <Heading>Traits</Heading>
        {/* <SubHeading>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s
      </SubHeading> */}
      </div>
      <div className="my-container relative overflow-hidden ">
        <img id="swiper-next" src="/imgs/slider-next.svg" alt="next slide" />
        <img id="swiper-prev" src="/imgs/slider-next.svg" alt="next slide" />
        <Swiper
          autoplay={{ delay: 2500 }}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={0}
          navigation={{
            nextEl: '#swiper-next',
            prevEl: '#swiper-prev',
          }}
          loop={true}
          className="mySwiper"
        >
          {hams.map((ham, i) => (
            <SwiperSlide key={i}>
              <div className="slide">
                <p className="text-khaki text-4xl text-center font-fright">
                  {ham.name}
                </p>
                <img className=" " src={ham.imgSrc} alt={ham.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
