import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import ResearchRolesNational from './ResearchRolesNational';
import ResearchRolesRegional from './ResearchRolesRegional';
import AcademicRolesNational from './AcademicRolesNational';
import AcademicRolesRegional from './AcademicRolesRegional';
// import StartupDocs from '../Startup-Excellence/Startup';
// import IndustryDocs from '../Industry-Excellance/Industry.js';

export default function AwardCategories() {

    const onChange = (event) => {
        var optionsElement = document.getElementById("SelectOptions");
        // uploadElement.style.visibility = "hidden";
        switch (event.target.value) {
            case "Research Excellence National":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "visible";
                ReactDOM.render(<ResearchRolesNational />, document.getElementById("SelectOptions"));
                break;

            case "Research Excellence Regional":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "visible";
                ReactDOM.render(<ResearchRolesRegional />, document.getElementById("SelectOptions"));
                break;

            case "Academic Excellence National":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "visible";
                ReactDOM.render(<AcademicRolesNational />, document.getElementById("SelectOptions"));
                break;

            case "Academic Excellence Regional":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "visible";
                ReactDOM.render(<AcademicRolesRegional />, document.getElementById("SelectOptions"));
                break;

        }
    }

    return (
            <FormControl isRequired>
                <FormLabel>Select Award Category</FormLabel>
                <Select id="Category" onChange={onChange}>
                    <option value="Research Excellence National">Research Excellence National</option>
                    <option value="Research Excellence Regional">Research Excellence Regional</option>
                    <option value="Academic Excellence National">Academic Excellence National</option>
                    <option value="Academic Excellence Regional">Academic Excellence Regional</option>
                    <option value="Industry Excellence">Industry Excellence</option>
                    <option value="Startup Excellence">Startup Excellence</option>
                </Select>
            </FormControl>
    );
}

