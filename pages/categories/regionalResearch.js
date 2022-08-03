import Head from 'next/head'
import {
    Center, Link, Table, Text,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
import NextLink from "next/link"
import React from 'react';

const regionalResearch = () => {
    return (
        <div>
            <Head>
        <title>Categories- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>

            <VideoBackground />
            <Header /><NavBa />
            <Center fontSize="6xl" fontWeight="bold" color="black">
                Regional Research Excellence
            </Center>

            <br />
            <br />

            <Center>
                <TableContainer>
                    <Table variant='simple' size='sm' width={'800px'} height={'150px'} colorScheme={'telegram'}>

                        <Tbody>
                            <Tr>
                                <Center>
                                    <Td>
                                        <NextLink href='/categories/researchExcellenceStudent' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Students <br />
                                                </Text></Link>
                                        </NextLink>
                                    </Td>
                                </Center>

                            </Tr>
                            <Tr>
                                <Center>
                                    <Td>
                                        <NextLink href='/categories/researchExcellenceTeacher' passHref>
                                            <Link>

                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Teaching Faculty <br />
                                                </Text></Link>
                                        </NextLink>
                                    </Td>
                                </Center>

                            </Tr>


                        </Tbody>
                    </Table>
                </TableContainer>
            </Center>
            <br />
            <br />
            <br />
            <Footer />
        </div>

    );
};

export default regionalResearch;