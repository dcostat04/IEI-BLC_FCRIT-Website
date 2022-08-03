import Head from 'next/head'
import Image from 'next/image'
import {Center,Text,SimpleGrid} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from './Card';
import NavBa from '../components/Navba';
export default function Home() {
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
      Organising Committee
      </Center>
      <br/>
      <br/>
      <SimpleGrid paddingBottom="20" columns={2}  spacingX='20px' spacingY='20px'>
      <Card  des1={"Chair,"}des2={"IEI BLC FCRIT Excellence "}des3={"Award"} des4={"Managing Committee  "}des5={"Member,(IEI BLC)"}des6={"Dean (Faculty) and Head "}des7={"(Mech),FCRIT, Vashi"} personName={"Dr. Nilaj Deshmukh"} image="/photos/dr-nilaj-deshmukh.jpeg"   /> 
      <Card des1={"Co-Chair,"}des2={"IEI BLC FCRIT Excellence "}des3={"Award"} personName={"Mrs. M. Kiruthika"}des4={"Associate Professor, Comp.  "}des5={"Engg. Dept.,"}des6={"FCRIT, Vashi"} image="/photos/km.jpg"   />
      </SimpleGrid>
      <br/>
      <br/>
      <div className="App">
        <table>
          <tr>
          <th>Sr.No</th>
          <th>Committee</th>
              <th>Faculty In – Charge (FCRIT)</th>
              <th>External Members ( IEI BLC)</th>
          </tr>
          <tr>
          <td>1.</td>
          <td>Venue</td>
          <td>Dr. Mini .N (Elec)-Chair<br/>Mr. Abhishek (Elec)<br/>Ms. Smitha R (IT)<br/>Mr. Vipin Sawant (Elec)</td>
          </tr>
              <br/>
          <tr>
          <td>2.</td>
          <td>Publicity</td>
          <td>Dr. Aqleem (Mech)-Chair<br/>Mr. Mritunjay (Comp)<br/>Ms. Ruchi (Elec)<br/>Mr. Sandeep (Mech)</td>
          </tr>
              <br/>
          <tr>
          <td>3.</td>
          <td>Registration & finance</td>
          <td>Dr.Jyoti More(Comp) -Chair<br/>Ms.Rupali D (IT)<br/>Ms.Anitha J (EXTC)<br/>Mr.Pramod More( Comp)</td>
          </tr>
              <br/>
              <tr>
          <td>4.</td>
          <td>Scrutiny(Internal and IEI members)</td>
          <td>Ms.Megha K (EXTC) -Chair<br/>Dr.Anant K (EXTC)<br/>Dr.Sanjay R (Mech)<br/>Dr.Pritha (HUM)<br/>Mr. Prashant (EXTC)</td>
              <td>Er. S.P. Singh<br/>Er. Prabhakar Phulari<br/>Er. Ashish S. Shrivastava<br/>Dr. Ajay Sudhir Radke<br/>Er. Arvind Jadhao</td>
          </tr>
              <br/>
              <tr>
          <td>5.</td>
          <td>Hospitality and media</td>
          <td>Ms.Archana ( IT) -Chair<br/> Mr.Rahul J (Comp)<br/>Mr.Kamlesh (Mech)<br/>Mr. Biony Alex (IT)</td>
          </tr>
        </table>
	</div>
      <br/>
      
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
