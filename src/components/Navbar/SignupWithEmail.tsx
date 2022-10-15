import {
   Box,
   Button,
   FormControl,
   FormLabel,
   Heading,
   HStack,
   Input,
   InputGroup,
   InputRightElement,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   Text,
   useDisclosure,
   VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiHide, BiShow } from "react-icons/bi";

type Params = {
   isSignupWithEmailOpen: boolean;
   onSignupWithEmailClose: Function;
   onSignupOpen: Function;
};

function SignupWithEmail({
   isSignupWithEmailOpen,
   onSignupWithEmailClose,
   onSignupOpen,
}: Params) {
   const [show, setShow] = useState<boolean>(false);

   return (
      <Modal
         size={"4xl"}
         isOpen={isSignupWithEmailOpen}
         onClose={() => onSignupWithEmailClose()}
      >
         <ModalOverlay />
         <ModalContent h={"100vh"} m={0} borderRadius={0}>
            <ModalHeader
               mt={{ base: 10, md: 28 }}
               mb={{ base: 0, md: 10 }}
               textAlign="center"
               letterSpacing={1}
               fontWeight={400}
            >
               <Heading
                  fontWeight={400}
                  fontFamily={"Times New Roman"}
                  fontSize={"4xl"}
               >
                  Sign up with email
               </Heading>
               <Text fontSize={"lg"} my={4} fontFamily={"Helvetica"}>
                  Enter your email address to create an account.
               </Text>
            </ModalHeader>

            <ModalCloseButton />

            <ModalBody mt={7}>
               <FormControl
                  m={"auto"}
                  w={{ base: "90%", md: "55%", lg: "37%" }}
               >
                  <FormLabel textAlign="center" fontWeight={400}>
                     Enter email
                  </FormLabel>
                  <Input
                     mb={7}
                     px={4}
                     name="email"
                     type="email"
                     variant={"flushed"}
                     focusBorderColor={"gray.700"}
                  />
                  <FormLabel textAlign="center" fontWeight={400}>
                     Set password
                  </FormLabel>
                  <InputGroup>
                     <Input
                        mb={10}
                        px={4}
                        name="password"
                        type={show ? "text" : "password"}
                        variant={"flushed"}
                        focusBorderColor={"gray.700"}
                     />
                     <InputRightElement>
                        {show ? (
                           <BiShow size={20} onClick={() => setShow(!show)} />
                        ) : (
                           <BiHide size={20} onClick={() => setShow(!show)} />
                        )}
                     </InputRightElement>
                  </InputGroup>
               </FormControl>

               <VStack
                  m={"auto"}
                  w={{ base: "80%", md: "50%", lg: "33%" }}
                  align={"stretch"}
                  spacing={4}
               >
                  <Button
                     py={6}
                     bg={"#191918"}
                     color={"white"}
                     size={"lg"}
                     borderRadius={30}
                     fontWeight={400}
                     fontSize={{ base: "md", md: "lg" }}
                     iconSpacing={4}
                     _hover={{
                        bg: "#191918",
                     }}
                     letterSpacing={1}
                  >
                     Sign up
                  </Button>
               </VStack>
               <Box textAlign="center" mt={10}>
                  <Button
                     onClick={() => {
                        onSignupWithEmailClose();
                        onSignupOpen();
                     }}
                     color={"green"}
                     fontSize={{ base: "lg" }}
                     variant={"ghost"}
                     letterSpacing={1}
                     leftIcon={<IoIosArrowBack size={20} />}
                     _hover={{ bg: "transparent" }}
                     borderRadius={30}
                     size={{ base: "md", md: "lg" }}
                  >
                     All Sign up options
                  </Button>
               </Box>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
}

export default SignupWithEmail;
