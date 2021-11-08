import React from "react";
// Core modules imports are same as usual
import SwiperCore, { Autoplay, Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
import "../styles/rarity-slider.scss";

SwiperCore.use([Navigation, Autoplay]);
const hams = [
  "/imgs/nft-ham1.png",
  "/imgs/nft-ham2.png",
  "/imgs/nft-ham3.png",
  "/imgs/nft-ham4.png",
  "/imgs/nft-ham5.png",
  "/imgs/nft-ham6.png",
  "/imgs/nft-ham7.png",
  "/imgs/nft-ham8.png",
  "/imgs/nft-ham9.png",
];
export default function HeroSlider() {
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   window && window.innerWidth <= 425 && setIsMobile(true);
  // }, []);
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(hams);
  return (
    <div id="hero-slider" className="w-full overflow-hidden  items-center flex">
      <div className="w-full relative overflow-hidden">
        <img id="swiper-next2" src="/imgs/slider-next.svg" alt="next slide" />
        <img id="swiper-prev2" src="/imgs/slider-next.svg" alt="next slide" />
        <Swiper
          // lazy={true}
          autoplay={{ delay: 2500 }}
          speed={300}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: "#swiper-next2",
            prevEl: "#swiper-prev2",
          }}
          loop={true}
          className="mySwiper"
        >
          {hams.map((ham, i) => (
            <SwiperSlide key={i}>
              <div className="slide">
                <img className={"h-full w-full block"} src={ham} alt="hero-hams" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
