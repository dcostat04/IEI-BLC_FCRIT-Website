import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
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
            <Header /><NavBa />

            <Text fontSize="xl" color="black" marginStart={"350"}>
                <Text fontSize="2xl" fontWeight="bold">
                    Researcher from Industry / Govt. Organization/ Consultancy Firm<br />
                </Text>
                Entry Level Criteria<br />
                The research should be the one conducted at the Organization currently affiliated with.<br />
                Age limit: 40 years <br />
                (Please provide data for last three years)<br /><br />
                <Text fontWeight="bold">Note that the award is for a particular research and not researcher’s career. </Text>
                <br />
                <Text fontSize="3xl" fontWeight="bold">
                    Document to be uploaded as a single .pdf
                </Text>
                -One-page narrative on R&D contributions in the affiliated Industry/Organization<br />
                -Research projects handled<br />
                -Patents filed<br />
                -Papers published in the Journals (give impact factor of the Journal)<br />
                -Any other research-based achievements.<br />
                Please provide supporting documents. <br /><br />
                <Text fontWeight="bold">NOTE: In case of joint patent or publication, nominee should clearly mention his/her contribution in the narrative.<br /></Text>
                <br /><br /><Text fontSize="3xl" fontWeight="bold">
                    EVALUATION CRITERIA
                </Text>
                <b>•	Research projects handled</b>
                <br />
                -	Details of projects, funding agency
                <br />
                -	Duration of project
                <br />
                -	Domains involved/ Interdisciplinary element
                <br />
                -	Expected outcomes
                <br />
                -	Achievements
                <br />
                <b>•	Patents filed/awarded</b>
                <br />
                -	Evidences for both filed and awarded patents
                <br />
                <b>•	Research publications in reputed conferences/ journals</b>
                <br />
                -	Cover page of the proceedings of conference/ Journal with index page having title of the publication
                <br />
                -	Indexing details of the publishing platform
                <br />
                <b>•	Impact of research</b>
                <br />
                Kindly provide details of each point with proper evidences.
                <br /><br /><br />
            </Text>
            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default researchExcellence;