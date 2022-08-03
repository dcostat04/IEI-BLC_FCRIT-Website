import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';


export default function AcademicRolesNational() {

    return (
        <div>
            <FormControl isRequired>
                <FormLabel>Select your Role</FormLabel>
                <Select id="applicant-role">
                    <option value="Student">Student</option>
                    <option value="Teacher">Teaching Faculty</option>
                    <option value="HOD">Head of the Department</option>
                    <option value="Principal">Principal/Director</option>
                    <option value="Institute">Institute</option>
                </Select>
            </FormControl>
        </div>
    );
}