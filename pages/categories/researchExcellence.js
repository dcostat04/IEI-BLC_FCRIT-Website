import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const researchExcellence = () => {
    return (
        <div>
            <Head>
        <title>Categories- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
            <Header/><NavBa />
            <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      Research Excellence (National/Regional)
      </Text>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (a)	Students <br/>
      </Text>
      <Text  fontSize="xl" color="black" marginStart={"50"}>
         -	Students (UG) <br/>
         -	Students (PG)<br/>
         -	Students (PhD)<br/>
         </Text>
         <br/>
      UG: Third Year and Final Year  in 2022 <br/>
      PG: Second year, ME in 2022 <br/>
      PhD: Registered scholars preferably on the verge of completion, exceptional PhD work in earlier stage is also welcome. <br/><br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      1. Research Narration document (Limit 200 words)<br/>
      2. A PPT comprising of Research work concisely ( Max of 10 slides)<br/>
      3. Endorsement letter from HOD<br/>
      4. Publications  <br/>
      (List of publications including Link and front page of journal papers).<br/>
      5. Photographs for innovative laboratory set-ups developed if any <br/>
      6. Patents filed documents if any <br/>
      7.Conference paper presentation certificates if any <br/>
      8.  Any other achievement <br/>
      9. Recommendation by Supervisor for PhD Scholar <br/>
      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={""}>
      <Text  fontSize="2xl" fontWeight="bold" color="black" marginStart={"350"}>
      (b)	Teaching Faculty <br/>
      </Text>
      <Text fontWeight="normal"   color="black" marginStart={"350"}>
      Entry Level Criteria:<br/>
          ●	Faculty should be Doctorate in his/her discipline <br/>
          ●	The research carried out must be at the affiliated Institute and should not be the PhD research <br/>
          ●	This award is NOT for the overall career research but is for particular research that has been recently completed or on the verge of completion. <br/>
          (Please provide data for last three years)<br/> <br/></Text>

      <Text fontSize="3xl"  fontWeight="bold" color="black" marginStart={"350"}>
      Document to be uploaded as a single .pdf  
      </Text>
      <Text fontWeight="normal" fontSize="xl" color="black" marginStart={"350"}>
      1. Research Narration document* (Limit 200 words)<br/>
      2. A PPT comprising of Research work concisely ( Max of 10 slides)<br/>
      3. Publications  <br/>
      (A pdf file consisting List of publications including Link and front page of journal papers).<br/>
      4. Photographs for innovative laboratory set-ups developed if any <br/>
      5. Patents filed documents if any <br/>
      6.Conference paper presentation certificates if any <br/>
      7. Research and consultancy project details if any <br/>
      8.  Any other achievement (prizes, award received) <br/>
      9. Research promotion activities if any (Endorsement letter by HOD) <br/></Text>
      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (c)	Researcher from Industry / Govt. Organization/ Consultancy Firm<br/>
      </Text>
      Entry Level Criteria<br/>
      The research should be the one conducted at the Organization currently affiliated with.<br/>
      Age limit: 40 years <br/>
      (Please provide data for last three years)<br/><br/>
      <Text fontWeight="bold">Note that the award is for a particular research and not researcher’s career. </Text>
      <br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -One-page narrative on R&D contributions in the affiliated Industry/Organization<br/>
      -Research projects handled<br/>
      -Patents filed<br/>
      -Papers published in the Journals (give impact factor of the Journal)<br/>
      -Any other research-based achievements.<br/>
      Please provide supporting documents. <br/><br/>
      <Text fontWeight="bold">NOTE: In case of joint patent or publication, nominee should clearly mention his/her contribution in the narrative.<br/></Text>
      </Text>
      <br/>
      <br/>
      <br/>
      
      <Footer/>
        </div>
    );
};

export default researchExcellence;