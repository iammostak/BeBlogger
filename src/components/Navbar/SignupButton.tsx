import {
   Box,
   Button,
   HStack,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   Text,
   VStack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

type Params = {
   isSignupOpen: boolean;
   onSignupOpen: Function;
   onSignupClose: Function;
   onSigninOpen: Function;
   onSignupWithEmailOpen: Function;
};

function SignupButton({
   isSignupOpen,
   onSignupOpen,
   onSignupClose,
   onSigninOpen,
   onSignupWithEmailOpen,
}: Params) {
   return (
      <>
         <Button
            onClick={() => onSignupOpen()}
            size={{ base: "md", md: "lg" }}
            bg={"#191918"}
            color={"white"}
            fontWeight={500}
            fontSize={18}
            borderRadius={30}
            _hover={{ bg: "#191918" }}
         >
            Get started
         </Button>

         <Modal
            size={"4xl"}
            isOpen={isSignupOpen}
            onClose={() => onSignupClose()}
         >
            <ModalOverlay />
            <ModalContent h={"100vh"} m={0} borderRadius={0}>
               <ModalHeader
                  mt={{ base: 10, md: 28 }}
                  mb={{ base: 0, md: 10 }}
                  textAlign="center"
                  fontFamily={"Times New Roman"}
                  fontSize={38}
                  fontWeight={400}
                  letterSpacing={1}
               >
                  Join Medium.
               </ModalHeader>

               <ModalCloseButton />

               <ModalBody mt={7}>
                  <VStack
                     m={"auto"}
                     w={{ base: "80%", md: "50%", lg: "33%" }}
                     align={"stretch"}
                     spacing={4}
                  >
                     <Button
                        py={6}
                        leftIcon={<FcGoogle size={27} />}
                        borderColor={"blackAlpha.400"}
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={30}
                        fontWeight={500}
                        fontSize={{ base: "md", md: "lg" }}
                        color={"blackAlpha.800"}
                        iconSpacing={4}
                        _hover={{
                           bg: "transparent",
                           borderColor: "blackAlpha.600",
                        }}
                     >
                        Sign up with Google
                     </Button>
                     <Button
                        py={6}
                        leftIcon={
                           <FaFacebookSquare size={27} color={"#4267B2"} />
                        }
                        borderColor={"blackAlpha.400"}
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={30}
                        fontWeight={500}
                        fontSize={{ base: "md", md: "lg" }}
                        color={"blackAlpha.800"}
                        iconSpacing={4}
                        _hover={{
                           bg: "transparent",
                           borderColor: "blackAlpha.600",
                        }}
                     >
                        Sign up with Facebook
                     </Button>
                     <Button
                        onClick={() => {
                           onSignupClose();
                           onSignupWithEmailOpen();
                        }}
                        py={6}
                        leftIcon={<TfiEmail size={24} />}
                        borderColor={"blackAlpha.400"}
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={30}
                        fontWeight={500}
                        fontSize={{ base: "md", md: "lg" }}
                        color={"blackAlpha.800"}
                        iconSpacing={4}
                        _hover={{
                           bg: "transparent",
                           borderColor: "blackAlpha.600",
                        }}
                     >
                        Sign up with E-mail
                     </Button>
                  </VStack>
                  <HStack
                     my={10}
                     justify={"center"}
                     fontSize={{ base: "lg", md: "xl" }}
                  >
                     <Text>Already have an account?</Text>
                     <Button
                        onClick={() => {
                           onSignupClose();
                           onSigninOpen();
                        }}
                        color={"green"}
                        fontSize={{ base: "lg", md: "xl" }}
                        variant={"unstyled"}
                     >
                        Sign In
                     </Button>
                  </HStack>
                  <Box
                     w={{ base: "90%", md: "70%" }}
                     m={"auto"}
                     mt={20}
                     color={"blackAlpha.700"}
                     fontWeight={500}
                     textAlign={"center"}
                     fontSize={{ base: "sm", md: "md" }}
                  >
                     Click “Sign Up” to agree to Medium’s{" "}
                     <span
                        style={{
                           textDecoration: "underline",
                           cursor: "pointer",
                        }}
                     >
                        Terms of Service
                     </span>{" "}
                     and acknowledge that Medium’s{" "}
                     <span
                        style={{
                           textDecoration: "underline",
                           cursor: "pointer",
                        }}
                     >
                        Privacy Policy
                     </span>{" "}
                     applies to you.
                  </Box>
               </ModalBody>
            </ModalContent>
         </Modal>
      </>
   );
}

export default SignupButton;
