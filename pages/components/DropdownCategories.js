import NextLink from "next/link"
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import Dropdown from '@trendmicro/react-dropdown';
import './Buttons'; // Ensure CSS dependency
import {
    DropdownToggle,
    DropdownMenu,
    MenuItem
} from '@trendmicro/react-dropdown';

import React from 'react';
import { Box, Link } from '@chakra-ui/react';

const DropdownCategories = () => {
    return (
        // <Box bgColor="gray" color={"black"}>
            <Dropdown  autoOpen={true}>
                <DropdownToggle color={"gray"} title="Categories" />
                <DropdownMenu>


                    <MenuItem>
                        Research Excellence

                        <MenuItem>
                            Regional

                            <MenuItem>
                                <NextLink href='/categories/researchExcellenceStudent' passHref>
                                    <Link>Students</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/researchExcellenceTeacher' passHref>
                                    <Link>Teaching Faculty</Link>
                                </NextLink>
                            </MenuItem>

                        </MenuItem>

                        <MenuItem>
                            National

                            <MenuItem>
                                <NextLink href='/categories/researchExcellenceStudent' passHref>
                                    <Link>Students</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/researchExcellenceTeacher' passHref>
                                    <Link>Teaching Faculty</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/researchExcellenceIndustry' passHref>
                                    <Link> Researchers from
                                        Industry</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/researchExcellenceGovt' passHref>
                                    <Link>Researcher from Govt. Organization</Link>
                                </NextLink>
                            </MenuItem>

                        </MenuItem>

                    </MenuItem>


                    <MenuItem>
                        Academic Excellence

                        <MenuItem>
                            Regional

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceStudent' passHref>
                                    <Link>Students</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceTeacher' passHref>
                                    <Link>Teaching Faculty</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceHOD' passHref>
                                    <Link>Head of the
                                        Department</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellencePrincipal' passHref>
                                    <Link>Principal/Director</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceInstitute' passHref>
                                    <Link>Institute</Link>
                                </NextLink>
                            </MenuItem>

                        </MenuItem>

                        <MenuItem>
                            National

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceStudent' passHref>
                                    <Link>Students</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceTeacher' passHref>
                                    <Link>Teaching Faculty</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceHOD' passHref>
                                    <Link>Head of the
                                        Department</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellencePrincipal' passHref>
                                    <Link>Principal/Director</Link>
                                </NextLink>
                            </MenuItem>

                            <MenuItem>
                                <NextLink href='/categories/academicExcellenceInstitute' passHref>
                                    <Link>Institute</Link>
                                </NextLink>
                            </MenuItem>

                        </MenuItem>

                    </MenuItem>

                    <MenuItem>
                        <NextLink href='/categories/industryExcellence' passHref>
                            <Link>Industry Excellence Award</Link>
                        </NextLink>
                    </MenuItem>

                    <MenuItem>
                        <NextLink href='/categories/startupExcellence' passHref>
                            <Link> Startup Excellence Award</Link>
                        </NextLink>
                    </MenuItem>


                </DropdownMenu>
            </Dropdown>
        // </Box>
    );
};

export default DropdownCategories;




