import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';

export default function ResearchRolesNational() {


    return (
        <div>
            <FormControl isRequired>
                <FormLabel>Select your Role</FormLabel>
                <Select id="applicant-role" >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teaching Faculty</option>
                    <option value="Researcher from Industry">Researcher from Industry</option>
                    <option value="Researcher from Govt. Organization">Researcher from Govt. Organization</option>
                </Select>
            </FormControl>
        </div>
    );
}