import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Categories- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/><NavBa />
      <Center  fontSize="6xl" fontWeight="bold" color="black">
      Award Categories
      </Center>
      <br/>
      <br/>
      <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      <Link href="/categories/generalInstructions">
      <a>
     1. General Instructions
      </a>
      </Link>
      </Text>
      <br/>

      <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      <Link href="/categories/researchExcellence">
      <a>
     2. Research Excellence (National/Regional)
      </a>
      </Link>
      </Text>
      <br/>
     
      <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      <Link href="/categories/academicExcellence">
      <a>
      3. Academic Excellence (National/Regional)
      </a>
      </Link>
      </Text>
      <br/>

    
      <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      <Link href="/categories/industryExcellence">
      <a>
      4. Industry Excellence Award
      </a>
      </Link>
      </Text>
      <br/>

      <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      <Link href="/categories/startupExcellence">
      <a>
      5. Start-up Excellence Award
      </a>
      </Link>
      </Text>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Footer/>
    </div>
  )
}
