import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/autoplay';

// import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 3000 }}>
                <SwiperSlide>
                    <Image width="100vw"
                        height={{
                            base: "30vh",
                            sm: "60vh",
                            md: "50vh",
                            lg: "50vh",
                            xl: "60vh",
                        }} src="/1.jpg" /></SwiperSlide>
                <SwiperSlide><Image width="100vw"
                        height={{
                            base: "30vh",
                            sm: "60vh",
                            md: "50vh",
                            lg: "50vh",
                            xl: "60vh",
                        }} src="/2.jpg" /></SwiperSlide>
                <SwiperSlide><Image width="100vw"
                        height={{
                            base: "30vh",
                            sm: "60vh",
                            md: "50vh",
                            lg: "50vh",
                            xl: "60vh",
                        }} src="/3.jpg" /></SwiperSlide>
                <SwiperSlide><Image width="100vw"
                        height={{
                            base: "30vh",
                            sm: "60vh",
                            md: "50vh",
                            lg: "50vh",
                            xl: "60vh",
                        }} src="/4.jpg" /></SwiperSlide>
            </Swiper>
        </>
    );
}