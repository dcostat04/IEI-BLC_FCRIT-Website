import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text, HStack, Box, Heading } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';

const generalInstructions = () => {
    function downloadPDF(pdf) {
        const linkSource = `data:application/pdf;base64,${pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = "vct_illustration.pdf";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    return (
        <div>
            <Head>
                <title>Categories- IEI-BLC FCRIT</title>
                <meta name="title" content="IEI-BLC FCRIT" />

            </Head>
            <Header /><NavBa />

            <Text color="black" >
                <Center fontWeight="bold" color="black" fontSize="2xl">
                    Information Required from the Nominees <br /></Center>
                <br />
                <Center fontWeight="bold" color="black" fontSize="2xl">
                    General Instructions <br /></Center>
                <br />
                <Text fontWeight="bold" marginStart={"300"} color="black">
                    1.	Registrations for applying are open from 5th May 2022. Please register on the link.<br />
                    2.	The Fees for processing the applications has to be paid at the time of registration. <br />
                    3.	All the proposals are to be uploaded on or before 30th June 2022.The website link for uploading proposal: <br />
                    ----------------------------------------<br />
                    4.	National Category includes all Centrally funded Institutes ( IIT’s, NIT’s etc.).<br />
                    5.	Regional Category includes all affiliated Engineering Institutes, State Universities and Private Universities approved by State Government.<br />
                    6.	Proposals sent in hard copies will not be considered. <br />
                    7.	Please ensure and preserve the receipt of candidature and proposal number allotted to you for future communication.<br />
                    <Text fontWeight="bold" color="black">8.	Contact number:  022-27771000- Extn: 320 or 413  <br /></Text>
                    <Text marginStart={"50"} fontWeight="bold" color="black">
                        Office Hours : 10 am to 4.30 pm  <br />
                        Email id: ieifcritawards@fcrit.ac.in<br /></Text>
                    <Text fontWeight="bold" color="black">9.	Scrutiny of applications will be in three stages: <br /></Text>
                    <Text marginStart={"50"} color="black" fontWeight="bold">
                        -	First Stage: Registration and Entry Level Criteria Proofs <br />
                        -	Second Stage: Document submission <br />
                        -	Third Stage: Resolving issues/concerns raised by the Jury <br />
                    </Text><br />
                    <Text fontWeight="bold" color="black">Compulsory Documents for all Categories <br />
                        Essential documents to be submitted on the website with registration are : <br /></Text>
                    <Text fontWeight="bold" marginStart={"50"} color="black">
                        1.	Identity proof (Institute’s Identity Card) <br />
                        2.	Proof of affiliation <br />
                        3.	Passport size recent photograph not exceeding…. MB <br />
                        4.	A CV of the applicant not exceeding 6 pages PDF format. Please use clickable links for information that does not fit in the required number of pages. The link should be on official website. <br />
                        5.	The detailed guidelines are provided in the table below. <br />
                    </Text>
                </Text>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </Text>
            <Center fontWeight="bold" color="black" fontSize="2xl">
                <a href="/Bonafide format.pdf" download>Click to download Bonafide format</a>

            </Center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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

export default generalInstructions;