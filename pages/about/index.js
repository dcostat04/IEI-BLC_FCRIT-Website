import Head from 'next/head'
import Image from 'next/image'
import {Box, Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <Center  fontSize="5xl" fontWeight="bold" color="black">
        About Page 
      </Center><br/>
      <Center  fontSize="4xl" fontWeight="bold" color="black">
        About IEI-BLC FCRIT Awards 
      </Center>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      It is with great pleasure that Fr. C. Rodrigues Institute of Technology in
      collaboration with The Institute of Engineers, India – Belapur Local Centre is
      announcing the IEI BLC – FCRIT Excellence Awards – 2022. The objective of
      the award ceremony is to recognize and appreciate the excellence of
      Academicians and Industry professionals in their respective domains. We are
      glad to inform that IEI BLC – FCRIT Excellence Awards organized in the
      years 2019 and 2021 received overwhelming responses and have been very
      successful. 
      </Text><br/>
      <Center  fontSize="4xl" fontWeight="bold" color="black">
        About The Institution of Engineers (India)  
      </Center>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      The Institution of Engineers (India) [IEI] is the largest multidisciplinary
      professional body of engineers, established in 1920 with its Headquarters
      located in Kolkata and incorporated under Royal Charter on 9th September,
      1935 by the then His Majesty of King George V. The Royal Charter endowed
      the Institution with the responsibility to promote the general advancement of
      engineering amongst its members and persons attached to the Institution. After
      Independence, the Institution is a “Body Corporate” protected under Article
      372 of the Constitution of India
      </Text><br/>
      <Center  fontSize="4xl" fontWeight="bold" color="black">
        About IEI-Belapur Local Center
      </Center>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      The Council of IEI set up Belapur Local Centre (BLC) in May 1994. Ever
      since its inception, BLC is vibrant with active participation from its office
      bearers and ever-increasing members. BLC is situated in a 1000 Sq. Meters plot
      in Sector 15, Central Business District (CBD), close to Belapur Railway Station
      in Navi Mumbai. BLC Building was designed by the reputed architects, M/s.
      Shashi Prabhu & Associates and M/s. Sopan Parbhu Architect. It consists of
      stilt with 5 floors at estimated cost of Rs.100 lakhs (as of 1994). At present,
      IEIBLC has 3687 members comprising of engineers from 15 Divisions.

      </Text>
      <br/>
      <Center  fontSize="4xl" fontWeight="bold" color="black">
        About FCRIT 
      </Center>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      FCRIT was established in 1994, named after late Rev. Fr. Conceicao
      Rodrigues. FCRIT persistently seeks and adopts innovative methods to
      improve the quality of education on a consistent basis. The global standards set
      at FCRIT in the field of teaching spurs the students in relentless pursuit of
      excellence. Though its reputation rests mainly on the high quality, value-based
      technical education that it imparts, it has to its credit a verdant, well-maintained
      Campus and extensive facilities. Its location in the vicinity of the holy places of
      various religious denominations underscores its secular credentials and its
      philosophy of "Vasudhaiva Kuttumbakam". The college prides on being one of
      few that has accreditation for all five branches.
      </Text>
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
