import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Important Dates</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/><NavBa />
      <Center  fontSize="6xl" fontWeight="bold" color="black">
        Important Dates
      </Center>
      <br/>
      <Center fontSize={"2xl"} fontWeight="bold">Opening Date: 5th May 2022</Center><br/>
      <Center fontSize={"2xl"}fontWeight="bold">Closing Date: 30th June 2022</Center><br/>
      <Center fontSize={"2xl"}fontWeight="bold">Communication to the Awardees: 5th September 2022</Center><br/>
      <Center fontSize={"2xl"}fontWeight="bold">Award Ceremony: 15th September 2022</Center><br/>
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
