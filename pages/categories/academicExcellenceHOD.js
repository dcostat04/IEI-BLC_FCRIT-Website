import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
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
      <Header /><NavBa />


      <Text fontSize="xl" color="black" marginStart={"350"}>
        <Text fontSize="2xl" fontWeight="bold">
          Head of the Department <br />
        </Text>
        Entry Level criteria: <br />
        -Should be currently serving as HOD  <br />
        -Should be Professor <br />
        (Please provide data for last three years)<br />
        <br /><br />
        <Text fontSize="3xl" fontWeight="bold">
          Document to be uploaded as a single .pdf
        </Text>
        -Positions held in professional bodies/ Officiating bodies -Whether department is NBA (National Board of Accreditation) accredited in your tenure as HOD. <br />
        -Contribution/s in R&D,Research Funding , Lab development undertaken for the department <br />
        -Special contribution/s in academics, how did the department function efficiently <br />
        -Any leadership programs attended/ presented and their implementation at the department level. <br />
        -Any new schemes implemented in the department to motivate faculty as well as students to improve the quality of academics <br />
        -Any other achievement as a HOD<br /><br /><br />
        <Text fontSize="3xl" fontWeight="bold">
          EVALUATION CRITERIA
        </Text>
        <b>•	R&D activity encouragement in department</b>
        <br />
        -	Research funding received by the department in past three years
        <br />
        -	Utilization
        <br />
        -	Number of research publications by the faculty in the department
        <br />
        -	Number of registered, ongoing, near completion PhDs in the department
        <br />
        -	PhD scholars’ publications in indexed journals.
        <br />
        <br />
        <b>•	Academic activity innovations in the department</b>
        <br />
        -	Teaching-learning facilitating platforms
        <br />
        -	Processes practised in department with clear objectives and innovative element
        <br />
        <br />
        <b>•	Faculty motivation</b>
        <br />
        -	Faculty funding in any form
        <br />
        -	 membership refunds
        <br />
        -	 travel grants
        <br />
        -	 awards and incentives
        <br />
        <br />
        <b>•	Student motivation</b>
        <br />
        -	Student funding in any form
        <br />
        -	Scholarships
        <br />
        -	Book bank schemes
        <br />
        -	 Incentives to students
        <br />
        <br />
        <b>•	NBA accreditation received in HoD tenure</b>
        <br />
        -	Copy of letter
        <br />
        <br />
        <b>•	any other achievements</b>
        <br />
        -	professional society activities in department
        <br />
        -	student chapter activities
        <br />
        -	invited talks
        <br />
        -	facilitation of department with Industry-Department interaction
        <br />
        -	Efforts and outcomes for innovative teaching learning methodology development
        <br />
        -	significant achievements not listed above
        <br /><br /><br />
      </Text>



      <Footer />
    </div>
  );
};

export default academicExcellence;