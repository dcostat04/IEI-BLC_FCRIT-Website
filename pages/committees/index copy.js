import Head from 'next/head'
import Image from 'next/image'
import {Center, HStack, Box, Divider, Heading, SimpleGrid, GridItem} from "@chakra-ui/react";
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
      <Header/><NavBa/>
      <Center  fontSize="6xl" fontWeight="bold" color="white">
        Photo Gallery
      </Center>
      
      <Center>
        <Heading fontSize="50" fontFamily="fantasy">
          Photo Gallery
        </Heading>
      </Center>
      <HStack>
      <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%"/>
        <Heading >
          IEI Committee Members
        </Heading>
      <Box  backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <br/><br/>
      <SimpleGrid paddingBottom="20" columns={3}  spacingX='20px' spacingY='20px'>
      <Card personName={"Mr. K K Varkhedkar"} image="/photos/KK-varkhedkar.jpeg"  /> 
      <Card personName={"Mr. Kamble"} image="/photos/kamble.jpeg"/> 
      <Card personName={"Mr. Mohan"} image="/photos/mohan.jpg" /> 
      <Card personName={"Mr. Bhandarkar"} image="/photos/mr_bhandarkar.jpeg"  /> 
      <Card personName={"Mr. Godbole"} image="/photos/godbole.jpeg" /> 
      <Card personName={"Dr. Nimkar"} image="/photos/nimkar.jpeg"  /> 
      <Card personName={"Mr. Sanjay"} image="/photos/sanjay.jpeg"  /> 
      </SimpleGrid>
      <HStack>
      <Box backgroundColor="black" h="2px" marginLeft="5%" w="40%"/>
        <Heading>
          FCRIT
        </Heading>
      <Box  backgroundColor="black" h="2px" marginRight="5%" w="40%" />
      </HStack>
      <br/><br/>
      <SimpleGrid paddingBottom="100" columns={3}  spacingX='40px' spacingY='20px'>
      <Card personName={"Fr. Saturnino Almeida"} image="/photos/Fr.jpeg"  /> 
      <Card personName={"Dr. S M  Khot"} image="/photos/sm-khot.jpeg"   /> 
      <Card personName={"Dr. Nilaj Deshmukh"} image="/photos/dr-nilaj-deshmukh.jpeg"   /> 
      <Card personName={"Dr. Bindu S"} image="/photos/Bindu.jpeg"   /> 
      <Card personName={"Dr. Milind Shah"} image="/photos/milind-shah.jpeg"   /> 
      <Card personName={"Dr. Lata Ragha"} image="/photos/lata.jpeg"   /> 
      <Card personName={"Dr. Sushil Thale"} image="/photos/sushil.jpeg"   /> 
      </SimpleGrid>

    <Footer/>
    </div>

  )
}
