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
          Principal/Director <br />
        </Text><br />
        Entry Level criteria: <br />
        -Principals of Engineering colleges affiliated to AICTE <br />
        Institute should have minimum five branches and at least 300 students <br />
        (Please provide data for last three years)<br /><br />

        <Text fontSize="3xl" fontWeight="bold">
          Document to be uploaded as a single .pdf
        </Text>
        <br />
        - Principal <br />
        -Positions held currently apart from your affiliated Institute <br />
        -Contribution in process development at university level  <br />
        -Contribution in academic curriculum development  <br />
        -Innovative methods pioneered by you for keeping the research culture vibrant in your Institute <br />
        -Any new schemes introduced by you in your Institute to motivate faculty growth  <br />
        -Whether Institute  is NAAC accredited during your tenure as Principal. <br />
        -Efforts to facilitate faculty during online teaching of pandemic period <br />
        -Any new techniques adapted by you to keep the interaction with students fruitful  <br />
        -Any other achievements. <br />
        <br /><br /><Text fontSize="3xl" fontWeight="bold">
          EVALUATION CRITERIA
        </Text>
        <b>•	Research funds</b>
        <br />
        -	Amount
        <br />
        -	 Purpose
        <br />
        -	 Funding agency
        <br />
        -	 Utilization
        <br />
        <br />
        <b>•	Promotions</b>
        <br />
        -	Number of faculty and non-teaching staff promoted over the past three years with their previous post and current post
        <br />
        <br />
        <b>•	Higher studies</b>
        <br />
        -	Number of faculty deputed on higher studies
        <br />
        -	Non-teaching staff sent for training over past 3 years
        <br />
        <br />
        <b>•	PhDs completed</b>
        <br />
        -	list of completed PhDs in past three years
        <br />
        <br />
        <b>•	NBA Departments</b>
        <br />
        -	NBA accredited department details
        <br />
        <br />
        <b>•	New Branches</b>
        <br />
        -	Proposal and approval letters with mentioned sanction intake
        <br />
        <br />
        <b>•	Investment in Infrastructure</b>
        <br />
        -	Growth of infrastructure over past three years
        <br />
        -
        <br />
        <br />
        <b>•	NIRF Ranking</b>
        <br />
        -	Ranking proof
        <br />
        <br />
        <b>•	Time line ranking</b>
        <br />
        -	Improvement in various rankings
        <br />
        <br />
        <b>•	any ither achievements</b>
        <br />
        -	professional society activities
        <br />
        -	local chapters/ students chapters activity
        <br />
        -	Industry-Institute interaction
        <br />
        -	Alumni involvement efforts and outcomes
        <br />
        -	good governance practices
        <br />
        -	significant achievements not listed above
        <br /><br /><br />

      </Text>

      <Footer />
    </div>
  );
};

export default academicExcellence;