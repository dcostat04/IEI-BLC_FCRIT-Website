import React, { useRef, useState } from "react";
// Import Swiper React components
import { Box, Image ,Text} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";


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
            {/* <Box bg='blue'><Text>Updates</Text></Box> */}
            <Swiper navigation={true} modules={[Navigation, Autoplay]} direction={'vertical'} autoplay={{ delay: 4000 }}>
            
                <SwiperSlide>
                <Text>Conference will open soon for paper submission. Please stay tune. </Text>   
                </SwiperSlide>
                <SwiperSlide>
                <Text>Wait for updates. </Text>  
                </SwiperSlide>
                <SwiperSlide>
                <Text> Please stay tuned. </Text>
                </SwiperSlide>
                <SwiperSlide>
                <Text>Welcome </Text> 
                </SwiperSlide>
    
            </Swiper>
        </>
    );
}