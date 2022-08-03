import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const academicExcellence = () => {
    return (
        <div>
          <Head>
        <title>Categories- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
          <Header/><NavBa />
            <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
      Academic Excellence (National/Regional)
      </Text>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (a)	Students <br/>
      </Text>
      Entry Level criteria:<br/>
      -Students who are in final year in 2022 or passed out in A.Y 2020- 21<br/>
         <br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Results of all the semesters <br/>
      -Institute ranks <br/>
      -Scholarships received if any <br/>
      -Details of study circles/ talks/ presentations made on  technical topics and technical content delivered ,courses completed beyond academics<br/>
      -Any other academic achievements.<br/>

      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" >
      (b)	Teaching Faculty <br/>
      </Text>
      Entry level:<br/>
    -Minimum 5 years of  teaching experience excluding probation<br/>

    (Please provide data for last three years)<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Span of your teaching experience, with domain  expertise <br/>
      -	Laboratory development <br/>
      -Content/course development on any platform <br/>
      -Courses conducted as a resource person, under STTP etc . <br/>
      -	Number of BE/ME/PhDs guided <br/>
      -Any other awards received previously<br/>
      -Well documented and supported effort for reaching out to students especially in pandemic period, and innovative content delivery during online teaching, will carry considerable weightage. <br/>
      -Any other achievement <br/>
      Kindly provide supporting documents for each point <br/>

      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (c)	Head of the Department <br/>
      </Text>
      Entry Level criteria: <br/>
    -Should be currently serving as HOD  <br/>
    -Should be Professor <br/>
    (Please provide data for last three years)<br/>
<br/><br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Positions held in professional bodies/ Officiating bodies -Whether department is NBA (National Board of Accreditation) accredited in your tenure as HOD. <br/>
 -Contribution/s in R&D,Research Funding , Lab development undertaken for the department <br/>
  -Special contribution/s in academics, how did the department function efficiently <br/>
-Any leadership programs attended/ presented and their implementation at the department level. <br/>
 -Any new schemes implemented in the department to motivate faculty as well as students to improve the quality of academics <br/>
  -Any other achievement as a HOD<br/>
</Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      (d)	Principal/Director <br/>
      </Text><br/>
      Entry Level criteria: <br/>
    -Principals of Engineering colleges affiliated to AICTE <br/>
    Institute should have minimum five branches and at least 300 students <br/>
    (Please provide data for last three years)<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      <br/>
      - Principal <br/>
      -Positions held currently apart from your affiliated Institute <br/> 
      -Contribution in process development at university level  <br/>
      -Contribution in academic curriculum development  <br/>
      -Innovative methods pioneered by you for keeping the research culture vibrant in your Institute <br/>
      -Any new schemes introduced by you in your Institute to motivate faculty growth  <br/>
      -Whether Institute  is NAAC accredited during your tenure as Principal. <br/>
      -Efforts to facilitate faculty during online teaching of pandemic period <br/>
      -Any new techniques adapted by you to keep the interaction with students fruitful  <br/>
      -Any other achievements. <br/>
  
      </Text>
      <br/>
      <br/>
      <br/>
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold"color="black" >
      (e)	Institute <br/>
      </Text><br/>
      <Text color="black" fontWeight="normal">
      Entry level criteria<br/>
The nomination can be filed by Dean Academics or Principal of the AICTE affiliated Institute. <br/>
The Institute should have at least three graduated batches. <br/>
The Institute should have at least five branches with minimum 300 students on roll.<br/>
(Please provide data for last three years) </Text>
<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold" color="black">
      Document to be uploaded as a single .pdf  
      </Text>
      <Text color="black" fontWeight={"normal"}>
      -Ranking under different schemes like NIRF<br/>  
      -NBA status  <br/>
      -NAAC status  <br/>
      -First year passing percentage  <br/>
      -Graduate passing percentage  <br/>
      -Placements status  <br/>
      -Social activities taken up by the Institute  <br/>
      -Contribution to governing offices through projects/ consultancy  <br/>
      -Faculty retention  <br/>
      -Percentage of PhD faculty members. <br/>
      -Alumni contribution towards the development of institute. <br/>
      -Any educational reforms at institute level. <br/>
      -How Library facility/ e-resources were extended to students during pandemic period.<br/>
      -Any faculty/student encouragement policy. <br/>
      -Any other achievements.<br/></Text>

      </Text>
      <Footer/>
        </div>
    );
};

export default academicExcellence;