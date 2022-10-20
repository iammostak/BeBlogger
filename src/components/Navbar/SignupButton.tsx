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
import { useNavigate } from "react-router-dom";

type Params = {
   isSignupOpen: boolean;
   onSignupOpen: Function;
   onSignupClose: Function;
   onSigninOpen: Function;
   onSignupWithEmailOpen: Function;
   offset: number;
   token: string;
};

function SignupButton({
   isSignupOpen,
   onSignupOpen,
   onSignupClose,
   onSigninOpen,
   onSignupWithEmailOpen,
   offset,
   token,
}: Params) {
   const navigate = useNavigate();

   return (
      <>
         <Button
            onClick={() => {
               token.length === 0 ? onSignupOpen() : navigate("/home");
            }}
            bg={offset > 450 ? "#1b8918" : "#191918"}
            color={"white"}
            fontWeight={400}
            fontSize={14}
            borderRadius={30}
            letterSpacing={0.5}
            _hover={offset > 483 ? { bg: "#1b8918" } : { bg: "#191918" }}
         >
            {token.length === 0 ? "Get started" : "My Account"}
         </Button>

         <Modal
            size={{ base: "3xl", lg: "2xl" }}
            isOpen={isSignupOpen}
            onClose={() => onSignupClose()}
         >
            <ModalOverlay />
            <ModalContent h={"100vh"} m={0} borderRadius={0}>
               <ModalHeader
                  mt={{ base: 10, md: 40, lg: 20 }}
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
                     w={{ base: "80%", md: "40%", lg: "36%" }}
                     align={"stretch"}
                     spacing={4}
                  >
                     <Button
                        py={4}
                        leftIcon={<FcGoogle size={24} />}
                        borderColor={"blackAlpha.400"}
                        variant={"outline"}
                        borderRadius={30}
                        fontWeight={400}
                        color={"blackAlpha.800"}
                        iconSpacing={2}
                        _hover={{
                           bg: "transparent",
                           borderColor: "blackAlpha.600",
                        }}
                     >
                        Sign up with Google
                     </Button>
                     <Button
                        py={4}
                        leftIcon={
                           <FaFacebookSquare size={22} color={"#4267B2"} />
                        }
                        borderColor={"blackAlpha.400"}
                        variant={"outline"}
                        borderRadius={30}
                        fontWeight={400}
                        color={"blackAlpha.800"}
                        iconSpacing={2}
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
                        py={4}
                        leftIcon={<TfiEmail size={19} />}
                        borderColor={"blackAlpha.400"}
                        variant={"outline"}
                        borderRadius={30}
                        fontWeight={400}
                        color={"blackAlpha.800"}
                        iconSpacing={2}
                        _hover={{
                           bg: "transparent",
                           borderColor: "blackAlpha.600",
                        }}
                     >
                        Sign up with E-mail
                     </Button>
                  </VStack>
                  <HStack my={10} justify={"center"}>
                     <Text>Already have an account?</Text>
                     <Button
                        onClick={() => {
                           onSignupClose();
                           onSigninOpen();
                        }}
                        color={"green"}
                        variant={"unstyled"}
                     >
                        Sign In
                     </Button>
                  </HStack>
                  <Box
                     w={{ base: "90%", md: "70%" }}
                     m={"auto"}
                     mt={14}
                     color={"blackAlpha.600"}
                     fontWeight={500}
                     textAlign={"center"}
                     fontSize={"sm"}
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
