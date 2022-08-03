import Head from 'next/head'
import Image from 'next/image'
import {Center,Text,SimpleGrid,Heading,HStack, Box} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Card from './Card';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
export default function Homie() {
  return (
    <div>
      <Head>
        <title>Committees- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <NavBa />
      
      <br/>
      <Center  fontSize="5xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Advisory Committee</pre>
      </Center>
      
      <br/><br/>
      <SimpleGrid paddingBottom="20" columns={2}  spacingX='20px' spacingY='20px'>
      
      <Card personName={"Dr. M.B. Dagaonkar"}des4={"Past Council Member, IEI "} des5={"Past Chairman IEI MSC  "} image="/photos/mohan.jpg" /> 
      <Card personName={"Fr. Saturnino Almeida"}des4={"Regional Superior and Managing Director, ATEC, Vashi."} image="/photos/Fr.jpeg"  /> 

      <Card personName={"Cdr.Dr.B.Bhandarkar "}des4={"IEI Council Member"} image="/photos/mr_bhandarkar.jpeg"  /> 
      <Card personName={"Dr. S M  Khot"} des4={"Principal, FCRIT Vashi"} image="/photos/sm-khot.jpeg"   /> 

      <Card personName={"Er. Vijay C. Kamble  "}des4={"Hon. Secretary IEI MSC"} image="/photos/kamble.jpeg"/> 
      <Card personName={"Dr. Milind Shah"}des4={"Dean (Academics) and Head "}des5={"(EXTC),FCRIT, Vashi"} image="/photos/milind-shah.jpeg"   /> 

      <Card personName={"Dr. K. M.Godbole"}des4={"Chairman, IEI BLC"} image="/photos/godbole.jpeg" /> 
      <Card personName={"Dr. Lata Ragha"}des4={"Dean (P.G. Studies) and Head "}des5={"(Comp),FCRIT, Vashi"} image="/photos/lata.jpeg"   /> 

      <Card personName={"Er. Sanjay R. Bagul "}des4={"Hon. Secretary, IEI BLC  "} image="/photos/sanjay.jpeg"  /> 
      <Card personName={"Dr. Bindu S"}des4={"Dean (Student Affairs) and Head "}des5={"(Elec),FCRIT, Vashi"} image="/photos/Bindu.jpeg"   /> 

      <Card personName={"Er. K. K.Verkhedkar"} des4={"Imm. Past Chairman, IEI BLC."} image="/photos/KK-varkhedkar.jpeg"  /> 
      <Card personName={"Dr. Sushil Thale"}des4={"Dean (R &D) ,"}des5={"FCRIT, Vashi"} image="/photos/sushil.jpeg"   /> 

      <Card personName={"Dr. Samir C. Nimkar"}des4={"Imm. Past Hon. Secretary, IEI BLC"} image="/photos/nimkar.jpeg"  /> 
      <Card personName={"Dr. Vaishali Bodade"}des4={"Head (IT)"}des5={"FCRIT, Vashi"} image="/photos/vaishali.jpeg"  /> 

      </SimpleGrid>
      
      <br/>
      
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
