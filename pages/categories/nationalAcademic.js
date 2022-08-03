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

const nationalAcademic = () => {
    return (
        <div>
            <Head>
        <title>Categories- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
            <VideoBackground />
            <Header /><NavBa />
            <Center fontSize="6xl" fontWeight="bold" color="black">
                National Academic Excellence
            </Center>

            <br />
            <br />

            <Center>
                <TableContainer>
                    <Table variant='simple' size='sm' width={'800px'} height={'300px'} colorScheme={'telegram'}>

                        <Tbody>
                            <Tr>
                                <Center>
                                    <Td>
                                        <NextLink href='/categories/academicExcellenceStudent' passHref>
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
                                        <NextLink href='/categories/academicExcellenceTeacher' passHref>
                                            <Link>

                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Teaching Faculty <br />
                                                </Text></Link>
                                        </NextLink>
                                    </Td>
                                </Center>

                            </Tr>
                            <Tr>
                                <Center>
                                    <Td>
                                        <NextLink href='/categories/academicExcellenceHOD' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Head of the
                                                    Department <br />
                                                </Text></Link>
                                        </NextLink>
                                    </Td>
                                </Center>
                            </Tr>
                            <Tr>
                                <Center>
                                    <Td>
                                        <NextLink href='/categories/academicExcellencePrincipal' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Principal/Director<br />
                                                </Text></Link>
                                        </NextLink>
                                    </Td>
                                </Center>
                            </Tr>

                            <Tr>
                                <Center>
                                    <Td>
                                        <NextLink href='/categories/academicExcellenceInstitute' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Institute<br />
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

export default nationalAcademic;