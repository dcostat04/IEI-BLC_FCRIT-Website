import Head from 'next/head'
import Image from 'next/image'
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from './UserDetails.js';
import NavBa from '../components/Navba';
export default function Home() {

  return (
    <div>
      <Head>
        <title>Payment Details- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet"></link>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
      </Head>
      <Header />
      <NavBa />
      <Text color="black" >
        <Center fontWeight="bold" color="black" fontSize="2xl">

          <Heading>
            Payment Details
          </Heading>
        </Center>
        <br />
        <br />
        <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="2xl">
        FR CONCEICAO RODRIGUES INSTITUTE OF TECHNOLOGY <br /></Text>
        <br />
        <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
          Account Number: 059601000007942  <br /><br />
          Vashi(0596) Branch <br/> </Text>
        <br />
        <br />
        <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
          IFSC code:   IOBA0000596 </Text>
        
        
      </Text>
      <br /><br /><br />

      <Footer />
    </div>

  )
}
