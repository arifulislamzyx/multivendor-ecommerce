import styles from "./OfferSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import img from "./../../../../public/offerImage/img2.jpg";
import Image from "next/image";

const justCss = {
  fullBody: {
    width: 200,
  },
};

// const globalCss = {
//   "*": {
//     margin: 0,
//     padding: 0,
//     boxSizing: "border-box",
//     listStyleType: none,
//   },
//   ":root": {
//     "--primary": "#6a59ff",
//     "--white": "#ffffff",
//     "--bg": "#f5f5f5",
//   },
//   html: {
//     fontSize: "62.5%",
//     scrollBehavior: "smooth",
//   },
//   "::-webkit-scrollbar": {
//     width: "1.3rem",
//   },
//   "::-webkit-scrollbar-thumb": {
//     borderRadius: "1rem",
//     background: "#797979",
//     transition: "all 0.5s ease-in-out",
//   },
//   "::-webkit-scrollbar-thumb:hover": {
//     background: "#222224",
//   },
//   "::-webkit-scrollbar-track": {
//     background: "#f9f9f9",
//   },
//   body: {
//     fontSize: "1.6rem",
//     background: "var(--bg)",
//   },
// };

const OfferSlider = () => {
  return (
    <div
      // style={globalCss[`*`]}
      className={`${styles.container} ${styles.globalCss} ${styles.responsive}`}
    >
      <h1 className={styles.heading}>Food Station</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        //animated dot pagination
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiperButtonNext",
          prevEl: ".swiperButtonPrev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiper_container}
      >
        <div className={styles.swiperSlide}>
          <SwiperSlide>
            <Image
              src={img}
              alt="slide_image"
              className="w-96 h-96 rounded-2xl object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img}
              alt="slide_image"
              className="w-96 h-96 rounded-2xl object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img}
              alt="slide_image"
              className="w-96 h-96 rounded-2xl object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img}
              alt="slide_image"
              className="w-96 h-96 rounded-2xl object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img}
              alt="slide_image"
              className="w-96 h-96 rounded-2xl object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img}
              alt="slide_image"
              className="w-96 h-96 rounded-2xl object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img}
              alt="slide_image"
              className="w-96 h-96 rounded-2xl object-cover"
            ></Image>
          </SwiperSlide>
        </div>

        <div className={styles.sliderControler}>
          <div className={`${styles.swiperButtonPrev} slider-arrow`}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className={`${styles.swiperButtonNext}slider-arrow`}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className={styles.swiperPagination}></div>
        </div>
      </Swiper>
    </div>
  );
};

export default OfferSlider;
