import Head from 'next/head'
import Image from 'next/image'
import { Center, Flex, Text, HStack, VStack, Box, Heading, SimpleGrid, } from "@chakra-ui/react";
import VideoBackground from "../pages/components/VideoBackground";
import Header from "../pages/components/Header";
import Footer from './components/Footer';
import HCarousel from './components/HCarousel';
import VCarousel from './components/VCarousel';
import NavBa from './components/Navba';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Card from './Card';

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
export default function Home() {
  return (
    <div>
      <Head>
        <title>IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <div>
        <Header />
        <NavBa />
      </div>
      <br />
      <Flex>

        <Flex color={"white"}> .</Flex>
        <Flex width={"100%"} >

          <Box width={"100%"} boxShadow='outline' p='6' rounded='md'>
            <Text bgColor={"telegram.700"} fontWeight="bold">Latest Updates</Text>
            <Marquee>Registrations date extended till 15th July 2022. </Marquee>
          </Box>

        </Flex>
      </Flex>

      <br />



      <br /><br /><br />
      <Flex overflow={'hidden'} alignContent={'center'} marginRight={"full"}>
        <Carousel width={'100%'} showThumbs={false} autoPlay={true} interval={'5000'} >
          <div>
            <img src="/monument2.jpg" alt="image1" />
            <p className="legend">IEI-BLC</p>
          </div>
          <div>
            <img className='carousel-img' src="/2.jpg" alt="image2" />
            <p className="legend">FCRIT, Vashi</p>
          </div>
        </Carousel>

      </Flex>
      <br /><br /><br />
      <SimpleGrid bgColor={"telegram.700"} paddingTop="20" paddingBottom="20" columns={2} spacingX='50px' spacingY='50px'>
        <Card aboutName={"About IEI-BLC FCRIT Awards "} texts={"It is with great pleasure that Fr. C. Rodrigues Institute of Technology in collaboration with The Institute of Engineers, India – Belapur Local Centre is announcing the IEI BLC – FCRIT Excellence Awards – 2022. The objective of  the award ceremony is to recognize and appreciate the excellence of Academicians and Industry professionals in their respective domains. We are glad to inform that IEI BLC – FCRIT Excellence Awards organized in the years 2019 and 2021 received overwhelming responses and have been very successful."} />
        <Card aboutName={"About The Institution of Engineers (India) "} texts={"The Institution of Engineers (India) [IEI] is the largest multidisciplinary professional body of engineers, established in 1920 with its Headquarters located in Kolkata and incorporated under Royal Charter on 9th September,1935 by the then His Majesty of King George V. The Royal Charter endowed the Institution with the responsibility to promote the general advancement of engineering amongst its members and persons attached to the Institution. The Institution is protected under Article 372 of the Constitution of India                "} />
        <Card aboutName={"About IEI-Belapur Local Center"} texts={"The Council of IEI set up Belapur Local Centre (BLC) in May 1994. Ever since its inception, BLC is vibrant with active participation from its office bearers and ever-increasing members. BLC is situated in a 1000 Sq. Meters plot in Sector 15, Central Business District (CBD), close to Belapur Railway Station in Navi Mumbai. BLC Building was designed by the reputed architects, M/s.Shashi Prabhu & Associates and M/s. Sopan Parbhu Architect. At present,IEIBLC has 3687 members comprising of engineers from 15 Divisions."} />
        <Card aboutName={"About FCRIT "} texts={"FCRIT was established in 1994, named after late Rev. Fr. Conceicao Rodrigues. FCRIT persistently seeks and adopts innovative methods to improve the quality of education on a consistent basis. The global standards set at FCRIT in the field of teaching spurs the students in relentless pursuit of excellence. Its location in the vicinity of the holy places of various religious denominations underscores its secular credentials and its philosophy of 'Vasudhaiva Kuttumbakam'. The college prides on being one of few that has accreditation for all five branches."} />
      </SimpleGrid>
      <br />

      <Footer />
    </div>
  )
}
