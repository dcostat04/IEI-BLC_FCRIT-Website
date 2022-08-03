import React from 'react';
import Head from 'next/head'
import {Center,Text} from "@chakra-ui/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';

const generalInstructions = () => {
    return (
        <div>
<Header/><NavBa />
      <Text color="black" >
      <Center fontWeight="bold" color="black" fontSize="2xl">
      Registration Details <br/></Center>
      <br/>
      <Center fontWeight="bold" color="black" fontSize="2xl">
      Registration fees  ( all-inclusive of GST): <br/></Center>
      <br/>
      <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
      Research Excellence category:   <br/></Text>
      <br/>
      <Text marginStart={"300"}color="black">
      	a)	Students: Rs 700/-<br/>
      	b)	Teaching Faculty and Researcher from Industry - Rs 1500 /- <br/>
      </Text>
      <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
      Academic Excellence category:   <br/></Text>
      <br/>
      <Text marginStart={"300"}color="black">
      	a)	Students: Rs 700/-<br/>
      	b)	Teaching Faculty - Rs 1500 /- <br/>
        c)	Head of the Department – Rs 2000/- <br/>
        d)	Principal /Director- Rs 3000/-<br/>
        e)	Institute  - Rs 5000/-<br/>
      </Text>
      <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
      Industry  Excellence category - Rs 5000/-   <br/></Text>
      <Text marginStart={"300"}fontWeight="bold" color="black" fontSize="xl">
      Startup Excellence category - Rs 3000/-   <br/></Text><br/>
      <Center><Text fontWeight={"bold"} fontSize="xl">Note:</Text>20% fee waiver is applicable for IEI members.</Center>
      <br/>
      <br/>
     </Text>
      <Footer/>
        </div>
    );
};

export default generalInstructions;