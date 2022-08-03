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
            <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
                Research Excellence (National/Regional)
            </Text>
            <br />
            <Text fontSize="xl" color="black" marginStart={"350"}>
                <Text fontSize="2xl" fontWeight="bold">
                    Students <br />
                </Text>
                <Text fontSize="xl" color="black" marginStart={"50"}>
                    -	Students (UG) <br />
                    -	Students (PG)<br />
                    -	Students (PhD)<br />
                </Text>
                <br />
                UG: Third Year and Final Year  in 2022 <br />
                PG: Second year, ME in 2022 <br />
                PhD: Registered scholars preferably on the verge of completion, exceptional PhD work in earlier stage is also welcome. <br /><br />
                <Text fontSize="3xl" fontWeight="bold">
                    Document to be uploaded as a single .pdf
                </Text>
                1. Research Narration document (Limit 200 words)<br />
                2. A PPT comprising of Research work concisely ( Max of 10 slides)<br />
                3. Endorsement letter from HOD<br />
                4. Publications  <br />
                (List of publications including Link and front page of journal papers).<br />
                5. Photographs for innovative laboratory set-ups developed if any <br />
                6. Patents filed documents if any <br />
                7.Conference paper presentation certificates if any <br />
                8.  Any other achievement <br />
                9. Recommendation by Supervisor for PhD Scholar <br />
                <br /><br /><Text fontSize="3xl" fontWeight="bold">
                    EVALUATION CRITERIA
                </Text>
                <br />
                <u>CATEGORY: Research Excellence (Student_UG)</u>
                <br />
                <b>•	Research Project/s (Quantitative)</b>
                <br />
                ✓	List of projects with their titles, funding source, duration, expected outcomes and achievements
                <br />
                <b>•	Research Publications in indexed conferences/journals (Quantitative)</b>
                <br />
                ✓	List research publications with verifiable DOI link.
                <br />
                <b>•	Competitions participated (Quantitative)</b>
                <br />
                ✓	List of competitions with their names, work presented, organizing body, venue, date
                <br />
                ✓	and document of participation
                <br />
                <b>•	Prizes for research (Quantitative)</b>
                <br />
                ✓	List with supporting proofs.
                <br />
                <b>•	Applicant's contribution in the research claimed for this award</b>
                <br />
                ✓	A qualitative write-up certified by HOD
                <br />
                <b>•	 Patent/s submitted/awarded (Quantitative)</b>
                <br />
                ✓	List with supporting proofs.
                <br />
                <b>•	Any other achievement</b>
                <br />
                ✓	Significant achievements of the candidate, other than listed above, with supporting documents
                <br />
                In case of joint patent or publication, nominee should clearly mention his/her contribution in the narrative
                <br />
                <br />

                <u>CATEGORY: Research Excellence (Student_PG)</u>
                <br />
                <b>•	Innovation of research including Interdisciplinary component</b>
                <br />
                ✓	Descriptive document endorsed by HOD/Principal
                <br />
                <b>•	Impact of work</b>
                <br />
                ✓	Expected outcomes of research, impact of the work in the community.
                <br />
                <b>•	Research Publications in indexed conferences/journals</b>
                <br />
                ✓	List of research publications with verifiable DOI links.
                <br />
                <b>•	Applicant's contribution</b>
                <br />
                ✓	Qualitative description of applicant’s contributions in the listed research
                <br />
                <b>•	 Patent/s submitted/awarded</b>
                <br />
                ✓	List with supporting proofs.
                <br />
                <b>•	Any other achievement</b>
                <br />
                ✓	Significant achievements not listed above, with supporting proofs.
                <br />
                In case of joint patent or publication, nominee should clearly mention his/her contribution in the narrative.
                <br />
                <br />

                <u>CATEGORY: Research Excellence (Student_PhD) Regional and National</u>
                <br />
                <b>•	Innovation of research including Interdisciplinary component</b>
                <br />
                ✓	Descriptive document endorsed by HOD/Principal
                <br />
                <b>•	Impact of work in domain</b>
                <br />
                ✓	Expected outcomes of research, impact of the work in the community.
                <br />
                <b>•	Research Publications in indexed conferences/Journals and patents</b>
                <br />
                ✓	List of research publications with verifiable DOI links.
                <br />
                ✓	Supporting proof for the patents submitted/ awarded
                <br />
                ✓	Applicant's contribution in listed research
                <br />
                <b>•	 Funding for travel/conference/ equipment purchase or any other</b>
                <br />
                ✓	Quantitative narrative with supporting proofs.
                <br />
                <b>•	Any other achievement</b>
                <br />
                ✓	Significant achievements related to research, not listed above with supporting proofs.
                <br />

                <br /><br />
            </Text>
            <br />
            <br />
            <br />


            <Footer />
        </div>
    );
};

export default researchExcellence;