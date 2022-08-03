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
        <Text fontSize="2xl" >
          Teaching Faculty <br />
        </Text>
        Entry level:<br />
        -Minimum 5 years of  teaching experience excluding probation<br />

        (Please provide data for last three years)<br /><br />

        <Text fontSize="3xl" fontWeight="bold">
          Document to be uploaded as a single .pdf
        </Text>
        -Span of your teaching experience, with domain  expertise <br />
        -	Laboratory development <br />
        -Content/course development on any platform <br />
        -Courses conducted as a resource person, under STTP etc . <br />
        -	Number of BE/ME/PhDs guided <br />
        -Any other awards received previously<br />
        -Well documented and supported effort for reaching out to students especially in pandemic period, and innovative content delivery during online teaching, will carry considerable weightage. <br />
        -Any other achievement <br />
        Kindly provide supporting documents for each point <br />
        <br /><br /><Text fontSize="3xl" fontWeight="bold">
          EVALUATION CRITERIA
        </Text>
        <b>•	Academic content development</b>
        <br />
        -	Website link/manual/notes published in the form of PDF/ course material available in digital platform
        <br />
        <b>•	Lab Development</b>
        <br />
        -	Documented contributions with proof of proposal and implementation
        <br />
        <b>•	Invited talks</b>
        <br />
        -	Appreciation letter/ feedback for the talk
        <br />
        <b>•	STTP/FDP conducted as Resource person</b>
        <br />
        -	invitation letter, appreciation letter, program schedule with name, feedback from participants
        <br />
        <b>•	Other than own University/Institute engagements</b>
        <br />
        -	Documented proofs
        <br />
        <b>•	PhDs guided</b>
        <br />
        -	registration letters of candidates with name as guide official website link
        <br />
        <b>•	Any teaching Innovations</b>
        <br />
        -	students’ feedback on innovative practices followed by the teacher,
        <br />
        -	website link for documented proof of conducting the methods, including photographs if any
        <br />
        <br />
        <b>•	any other award received</b>
        <br />
        <br />
        -	certificate/ appreciation letter/award copy
        <br />
        <br />
        -	documented activities under professional societies/ local chapters endorsed by HoD
        <br /><br /><br />
      </Text>

      <Footer />
    </div>
  );
};

export default academicExcellence;