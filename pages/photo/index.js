import Head from 'next/head'
import Image from 'next/image'
import { Center, HStack, Box, Divider, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from './Card';
import NavBa from '../components/Navba';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Photo Gallery- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <Header /><NavBa />
      <Center fontSize="6xl" fontWeight="bold" color="white">
        Photo Gallery
      </Center>

      <Center>
        <Heading fontSize="50" fontFamily="fantasy">
          Photo Gallery
        </Heading>
      </Center>

      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading >
            2019 award ceremony
          </Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <br />
      <br />
      <Center>
        <Carousel width={'1150px'} showThumbs={false} autoPlay={true} interval={'5000'} >
          <div>
            <img src="/photos/awards1.jpeg" alt="image1" />
             
          </div>
          <div>
            <img src="/photos/awards2.jpeg" alt="image2" />
            
          </div>
          <div>
            <img src="/photos/awards3.jpeg" alt="image3" />
             
          </div>
          <div>
            <img src="/photos/awards4.jpeg" alt="image4" />
             
          </div>
          <div>
            <img src="/photos/awards5.jpeg" alt="image1" />
            
          </div>
          <div>
            <img src="/photos/awards6.jpeg" alt="image2" />
             
          </div>
          <div>
            <img src="/photos/awards7.jpeg" alt="image3" />
            
          </div>
          <div>
            <img src="/photos/awards8.jpeg" alt="image4" />
            
          </div>
        </Carousel>
      </Center>
      <br />
      <br />
      <br />
      <br />

      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading >
            IEI 2021 Awardees
          </Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <br />
      <br />
      <Center>
        <Carousel width={'1150px'} showThumbs={false} autoPlay={true} interval={'5000'}>
          <div>
            <img src="/photos/awards9.jpeg" alt="image1" />
            
          </div>
          <div>
            <img src="/photos/awards10.jpeg" alt="image2" />
            
          </div>
          <div>
            <img src="/photos/awards11.jpeg" alt="image3" />
            
          </div>
          <div>
            <img src="/photos/awards12.jpeg" alt="image4" />
            
          </div>
          <div>
            <img src="/photos/awards13.jpeg" alt="image1" />
            
          </div>
          <div>
            <img src="/photos/awards14.jpeg" alt="image2" />
            
          </div>
          <div>
            <img src="/photos/awards15.jpeg" alt="image3" />
            
          </div>
          <div>
            <img src="/photos/awards16.jpeg" alt="image4" />
            
          </div>
          <div>
            <img src="/photos/awards17.jpeg" alt="image3" />
            
          </div>
          <div>
            <img src="/photos/awards18.jpeg" alt="image4" />
             
          </div>
          <div>
            <img src="/photos/awards19.jpeg" alt="image1" />
             
          </div>
          <div>
            <img src="/photos/awards20.jpeg" alt="image2" />
             
          </div>
          <div>
            <img src="/photos/awards21.jpeg" alt="image3" />
             
          </div>
          <div>
            <img src="/photos/awards22.jpeg" alt="image4" />
             
          </div>
          <div>
            <img src="/photos/awards23.jpeg" alt="image1" />
             
          </div>
          <div>
            <img src="/photos/awards24.jpeg" alt="image2" />
             
          </div>
          <div>
            <img src="/photos/awards25.jpeg" alt="image3" />
             
          </div>
          <div>
            <img src="/photos/awards26.jpeg" alt="image4" />
             
          </div>
          <div>
            <img src="/photos/awards27.jpeg" alt="image3" />
             
          </div>
          <div>
            <img src="/photos/awards28.jpeg" alt="image4" />
             
          </div>
          <div>
            <img src="/photos/awards29.jpeg" alt="image1" />
             
          </div>
          <div>
            <img src="/photos/awards30.jpeg" alt="image2" />
             
          </div>
          <div>
            <img src="/photos/awards31.jpeg" alt="image3" />
             
          </div>
          <div>
            <img src="/photos/awards32.jpeg" alt="image4" />
             
          </div>
          <div>
            <img src="/photos/awards33.jpeg" alt="image1" />
            
          </div>
          <div>
            <img src="/photos/awards34.jpeg" alt="image2" />
            
          </div>
          <div>
            <img src="/photos/awards35.jpeg" alt="image3" />
           
          </div>
          <div>
            <img src="/photos/awards36.jpeg" alt="image4" />
            
          </div>
          <div>
            <img src="/photos/awards37.jpeg" alt="image3" />
            
          </div>
          <div>
            <img src="/photos/awards38.jpeg" alt="image4" />
            
          </div>
        </Carousel>
      </Center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>

  )
}
