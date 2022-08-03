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
                    Students <br />
                </Text>
                Entry Level criteria:<br />
                -Students who are in final year in 2022 or graduated in A.Y 2020- 21<br />
                <br />
                <Text fontSize="3xl" fontWeight="bold">
                    Document to be uploaded as a single .pdf
                </Text>
                -Results of all the semesters <br />
                -Institute ranks <br />
                -Scholarships received if any <br />
                -Details of study circles/ talks/ presentations made on  technical topics and technical content delivered ,courses completed beyond academics<br />
                -Any other academic achievements.<br />
                <br /><br /><Text fontSize="3xl" fontWeight="bold">
                    EVALUATION CRITERIA
                </Text>
                <b>•	Competitive examination participation</b>
                <br />
                -	admit card/ score card copy
                <br />
                <b>•	CGPA in University/Institute</b>
                <br />
                -	certified grade-sheet
                <br />
                <b>•	Any academic talks/seminars presented</b>
                <br />
                -	appreciation letter
                <br />
                <b>•	any other achievements</b>
                <br />
                -	awards or prizes
                <br />
                -	participation in student chapters and professional society activities
                <br /><br /><br />
            </Text>

            <Footer />
        </div>
    );
};

export default academicExcellence;