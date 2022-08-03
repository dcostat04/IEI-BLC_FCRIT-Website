import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
export default function Homer() {
  return (
    <div>
      <Head>
        <title>Committees- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <NavBa />
      <Center  fontSize="5xl" fontWeight="bold" color="black">
      Committees
      </Center><br/>
      <Center  fontSize="3xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Organising Committee</pre>
      </Center>
      <br/>
      <br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Faculty In-Charge</pre>
      </Center>
      <br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Venue</pre>
      </Center>
      <br/>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Mini .N (Elec)-Chair</pre></Center>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Abhishek (Elec)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Ms. Smitha R (IT)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Vipin Sawant (Elec)</pre></Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Publicity</pre>
      </Center>
      <br/>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Aqleem (Mech)-Chair</pre></Center>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Mritunjay (Comp)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Ms. Ruchi (Elec)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Sandeep (Mech)</pre></Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Registration & finance</pre>
      </Center>
      <br/>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Jyoti More(Comp)-Chair</pre></Center>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Ms. Rupali D (IT)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Ms. Anitha J (EXTC)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Pramod More (Comp)</pre></Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Scrutiny (Internal and IEI members)</pre>
      </Center>
      <br/>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Ms. Megha K (EXTC)-Chair</pre></Center>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Anant K (EXTC)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Sanjay R (Mech)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Pritha (HUM)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Prashant (EXTC)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. S.P. Singh</pre></Center>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Prabhakar Phulari</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Ashish S. Shrivastava</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Ajay Sudhir Radke</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Arvind Jadhao</pre></Center> 
      <br/><br/><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Hospitality and media</pre>
      </Center>
      <br/>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Ms. Archana (IT)-Chair</pre></Center>
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Rahul J (Comp)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Kamlesh (Mech)</pre></Center> 
      <Center color="black" fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Mr. Biony Alex (IT)</pre></Center> 
      <br/>
      
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
