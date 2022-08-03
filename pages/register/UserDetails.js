import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  SimpleGrid,
  Box,
  Center,
  GridItem,
  Select,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { ViewIcon } from "@chakra-ui/icons";
import { jsPDF } from "jspdf";
import $, { merge } from "jquery";
import AwardCategories from "./AwardCategories";

// const FormData = require('form-data');

const Details = () => {
  // var pdf_file;
  const [pdfFile, setPdfFile] = useState(null);
  const [fieldsPdf, setFieldsPdf] = useState(null);
  const [receiptPdf, setReceiptPdf] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [fieldsUrl, setFieldsUrl] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [checkVal2, setCheckVal2] = useState(Boolean(false));
  const [checkVal, setCheckVal] = useState(Boolean(false));
  const { isSubmitted, onFormSubmit } = useDisclosure({ defaultIsOpen: false });
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  function verify(){
    var applicantName = $("#name").val();
    var sem = $("#sem").val();
    var dept = $("#department").val();
    var insti = $("#institute").val();
    var award = $("#Category").val();
    // console.log("Verifying fields ");
    if (applicantName == '' || dept == '' || insti=='' || award == ''| pdfUrl == null || receiptPdf == null || !checkVal || !checkVal2){
      return false;
    }
    return true;
  }
  async function send() {
    var formData = new FormData();
    formData.append("userDoc", receiptPdf);
    formData.append("userDoc", fieldsPdf);
    formData.append("userDoc", pdfFile);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await fetch("http://localhost:3000/mergepdf", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.status != 202) {
          alert("Please Resubmit Form!!!");
          console.log("Error", res.json());
        } else {
          alert("Form submitted Successfully !!!");
          console.log("Success", res.json());
          window.location.reload(false);
        }
      });
    } catch (err) {
      alert("Backend is Down. Contact Administrator");
      console.log(err);
    }
  }
  const secondaryTextColor = "black";

  const handleChange = async (e) => {
    e.preventDefault();
    var pdf_file = e.target.files[0];
    setPdfFile(pdf_file);
    setPdfUrl(URL.createObjectURL(pdf_file));
    var doc = jsPDF();
    var pos = 20;
    var applicantName = $("#name").val();
    // if (document.getElementById("sem").val) {
      var sem = $("#sem").val();
    // }
    var dept = $("#department").val();
    var insti = $("#institute").val();
    var award = $("#Category").val();
    var contact = $('#contactNo').val();
    var role = $("#SelectOptions").find("#applicant-role").val();
    doc.text(20, 20, "Name : " + applicantName);
    if (sem.length!=0){
    doc.text(20,30, "Semester : "+sem);
    }
    else{
      doc.text(20,30, "Semester : Not filled");
    }
    doc.text(20, 40, "Department : " + dept);
    doc.text(20, 50, "Institute : " + insti);
    doc.text(20, 60, "Award Category : " + award);
    doc.text(20, 70, "Contact Details (Mobile Number and Email) : "+contact );
    if (!(typeof role === "undefined")) {
      doc.text(20, 80, "Applicant Role : " + role);
    }
    var blobPDF = new Blob(
      [doc.output("blob", { filename: "userDetails.pdf" })],
      { type: "application/pdf" }
    );
    var blobUrl = URL.createObjectURL(blobPDF);
    setFieldsPdf(blobPDF);
    setFieldsUrl(blobUrl);
  };
  const handleReceipt = (e) => {
    e.preventDefault();
    setReceiptPdf(e.target.files[0]);
  }
  const checkBoxChange = (e) => {
    e.preventDefault();
    setCheckVal(!checkVal);
  };
  const handleCheckDecision = (e) => {
    e.preventDefault();
    setCheckVal2(!checkVal2);
  }
  return (
    <Box>
      <Center
        backgroundColor="whiteAlpha.800"
        padding="10px"
        spacing={10}
        alignItems="center"
      >
        <form id="registration-form">
          <SimpleGrid
            boxShadow="dark-lg"
            borderColor="black"
            borderEnd="ActiveBorder"
            spacing="10px"
            padding="50px"
            border="2px"
            columns={1}
            rowGap={6}
          >
            <GridItem>
              <Heading textColor={secondaryTextColor} size="2xl">
                Registration/Proposal Submission Form
              </Heading>
              <Text fontSize={'20px'} textColor={secondaryTextColor}>
                Upload the proposal with all the supporting documents.
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Name of the Applicant
                </FormLabel>
                <Input id="name" placeholder="ABC" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Department Name of the Applicant
                </FormLabel>
                <Input id="department" placeholder="Computer" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Institute Name of Applicant
                </FormLabel>
                <Input id="institute" placeholder="FCRIT" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel textColor={secondaryTextColor}>
                  Semester (applicable only for students)
                </FormLabel>
                <Input id="sem"  placeholder="6" />
              </FormControl>
            </GridItem>
            
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Contact No.
                </FormLabel>
                <Input id="contactNo" />
              </FormControl>
            </GridItem>
            

            <GridItem colSpan={2}>
              <AwardCategories isRequired />
            </GridItem>

            <GridItem id="SelectOptions" colSpan={2}></GridItem>
            <GridItem id="receiptPdf" colSpan={2}>
            <FormControl isRequired={true}>
                <FormLabel>Upload Transaction Receipt here</FormLabel>
                <Input
                  isRequired
                  accept="application/pdf"
                  type="file"
                  id="receiptDoc"
                  onChange={handleReceipt}
                />
                </FormControl>
              
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl isRequired={true}>
                <FormLabel>Upload all documents as a single pdf here</FormLabel>
                <Input
                  isRequired
                  accept="application/pdf"
                  type="file"
                  id="userDoc"
                  onChange={handleChange}
                />
                <br></br>
                <Button
                  mt="5"
                  mb="5"
                  size="lg"
                  onClick={() => {
                    if (pdfUrl === null) {
                      toast({
                        title: "PDF has not been uploaded yet!",
                        description: "Please upload PDF for Preview",
                        status: "info",
                        duration: 3000,
                        isClosable: true,
                      });
                    } else {
                      onOpen();
                    }
                  }}
                >
                  Preview&nbsp;&nbsp;
                  <ViewIcon />
                </Button>
              </FormControl>
              <br></br>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                scrollBehavior="inside"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>PDF Document Preview</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe src={pdfUrl} width="500px" height="700px" />
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <Checkbox onChange={checkBoxChange} isRequired>
                    I have checked all the details. I confirm that the details
                    are true and I have uploaded all the documents.
                  </Checkbox>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <Checkbox onChange={handleCheckDecision} isRequired>
                  I/We hereby agree to the final decision of  judges.
                  </Checkbox>
                </FormControl>
              </GridItem>
              <br></br>
              <Button
                mt="5"
                mb="5"
                bgColor="green.500"
                onClick={ ()=>{
                  if (verify() == true){
                    send()}
                  else{
                    toast({
                      title: "Incomplete Form",
                      description: "Please Fill all the details",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                } }
              }
                size="lg"
              >
                Submit
              </Button>
            </GridItem>
            <br />
          </SimpleGrid>
        </form>
      </Center>
    </Box>
  );
};

export default Details;
