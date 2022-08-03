// import Head from 'next/head'
// import { Center,Text,Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
// import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
// import { useTable, useSortBy } from 'react-table'
// import VideoBackground from '../components/VideoBackground';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import NavBa from '../components/Navba';
// import * as React from 'react'


// function App() {
// return (
// 	<div className="App">
// 	<table>
// 		<tr>
// 		<th>Sr.No</th>
// 		<th>Committee</th>
//         <th>Faculty In – Charge (FCRIT)</th>
//         <th>External Members ( IEI BLC)</th>
// 		</tr>
// 		<tr>
// 		<td>1.</td>
// 		<td>Venue</td>
// 		<td>Dr. Mini .N (Elec)-Chair<br/>Mr. Abhishek (Elec)<br/>Ms. Smitha R (IT)<br/>Mr. Vipin Sawant (Elec)</td>
// 		</tr>
//         <br/>
// 		<tr>
// 		<td>2.</td>
// 		<td>Publicity</td>
// 		<td>Dr. Aqleem (Mech)-Chair<br/>Mr. Mritunjay (Comp)<br/>Ms. Ruchi (Elec)<br/>Mr. Sandeep (Mech)</td>
// 		</tr>
//         <br/>
// 		<tr>
// 		<td>3.</td>
// 		<td>Registration & finance</td>
// 		<td>Dr.Jyoti More(Comp) -Chair<br/>Ms.Rupali D (IT)<br/>Ms.Anitha J (EXTC)<br/>Mr.Pramod More( Comp)</td>
// 		</tr>
//         <br/>
//         <tr>
// 		<td>4.</td>
// 		<td>Scrutiny(Internal and IEI members)</td>
// 		<td>Ms.Megha K (EXTC) -Chair<br/>Dr.Anant K (EXTC)<br/>Dr.Sanjay R (Mech)<br/>Dr.Pritha (HUM)<br/>Mr. Prashant (EXTC)</td>
//         <td>Er. S.P. Singh<br/>Er. Prabhakar Phulari<br/>Er. Ashish S. Shrivastava<br/>Dr. Ajay Sudhir Radke<br/>Er. Arvind Jadhao</td>
// 		</tr>
//         <br/>
//         <tr>
// 		<td>5.</td>
// 		<td>Hospitality and media</td>
// 		<td>Ms.Archana ( IT) -Chair<br/> Mr.Rahul J (Comp)<br/>Mr.Kamlesh (Mech)<br/>Mr. Biony Alex (IT)</td>
// 		</tr>
// 	</table>
// 	</div>
// );
// }

// export default App;
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
        </Menu>
    )
}