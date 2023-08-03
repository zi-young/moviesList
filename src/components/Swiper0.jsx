import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./Swiper0.module.scss"


const Swiper0 = () => {
    return (
        <Swiper className={styles.swiperBox}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {/* <SwiperSlide className={styles.slide}><img src={require("../img/slide1.jpg")} alt="이미지1" /></SwiperSlide> */}
            <SwiperSlide className={styles.slide}><img src={require("../img/100.png")} alt="이미지1" /></SwiperSlide>
            <SwiperSlide className={styles.slide}><img src={require("../img/slide3.jpg")} alt="이미지1" /></SwiperSlide>
            <SwiperSlide className={styles.slide}><img src={require("../img/slide3.jpg")} alt="이미지1" /></SwiperSlide>
        </Swiper>
    );
};

export default Swiper0;