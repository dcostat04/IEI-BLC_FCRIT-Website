import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const industryExcellence = () => {
    return (
        <div>
            <Head>
                <title>Categories- IEI-BLC FCRIT</title>
                <meta name="title" content="IEI-BLC FCRIT" />

            </Head>
            <Header /><NavBa />
            <Text fontSize="xl" color="black" marginStart={"350"}>
                <Text fontSize="3xl" fontWeight="bold" color="black">
                    Industry Excellence Award
                </Text><br />
                <Text color="black" fontSize="xl" fontWeight="normal">
                    Contribution towards Education <br />
                    Contribution towards Technology development<br />
                    Contribution towards society<br />
                    (Please provide data for last three years)<br />
                </Text>

                <br /><br />
                <Text fontSize="3xl" fontWeight="bold">
                    Document to be uploaded as a single .pdf
                </Text>
                <Text color="black" fontSize="xl" fontWeight={"normal"}>
                    -Any tie-up with any academic Institute in the form of academic guidance, project guidance, industry visit, or sponsorship<br />
                    -Laboratory development at any academic Institute<br />
                    Kindly provide detailed relevant information with adequate proofs which may be web-link or other references. Photos of the information printed in newspaper or magazine can be uploaded to support the text filled in the Nomination Form.<br />
                    <br /><br /><Text fontSize="3xl" fontWeight="bold">
                        EVALUATION CRITERIA
                    </Text>
                    <b>•	contribution in Industry process development</b>
                    <br />
                    -	Contribution in product development / process improvement and its impact
                    <br />
                    <b>•	contribution in Technology development</b>
                    <br />
                    -	R&D activity culminating in Patents or publications
                    <br />
                    <br />
                    <b>•	contribution in society</b>
                    <br />
                    -	Schemes or projects implemented which have societal relevance and their impact
                    <br />
                    <b>•	contribution in Academia</b>
                    <br />
                    -	Any tie-up with any academic Institute in the form of academic guidance, project guidance, industry visit, or sponsorship
                    <br />
                    -	Any sponsored Laboratory
                    <br />
                    <br /><br /><br />
                </Text>
            </Text>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />

        </div>
    );
};

export default industryExcellence;