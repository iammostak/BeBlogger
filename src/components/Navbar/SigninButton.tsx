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
   isSigninOpen: boolean;
   onSigninOpen: Function;
   onSigninClose: Function;
   onSignupOpen: Function;
   onSigninWithEmailOpen: Function;
};

function SigninButton({
   isSigninOpen,
   onSigninOpen,
   onSigninClose,
   onSignupOpen,
   onSigninWithEmailOpen,
}: Params) {
   return (
      <>
         <Button
            onClick={() => onSigninOpen()}
            variant={"unstyled"}
            fontWeight={400}
            fontSize={18}
            _hover={{ bg: "transparent" }}
         >
            Sign In
         </Button>

         <Modal
            size={"4xl"}
            isOpen={isSigninOpen}
            onClose={() => onSigninClose()}
         >
            <ModalOverlay />
            <ModalContent h={"100vh"} m={0} borderRadius={0}>
               <ModalHeader
                  mt={{ base: 10, md: 28 }}
                  mb={{ base: 0, md: 10 }}
                  textAlign="center"
                  fontFamily={"Times New Roman"}
                  fontSize={38}
                  fontWeight={500}
                  letterSpacing={1}
               >
                  Welcome back.
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
                        Sign in with Google
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
                        Sign in with Facebook
                     </Button>
                     <Button
                        onClick={() => {
                           onSigninClose();
                           onSigninWithEmailOpen();
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
                        Sign in with E-mail
                     </Button>
                  </VStack>
                  <HStack
                     my={10}
                     justify={"center"}
                     fontSize={{ base: "lg", md: "xl" }}
                  >
                     <Text>No account?</Text>
                     <Button
                        onClick={() => {
                           onSigninClose();
                           onSignupOpen();
                        }}
                        color={"green"}
                        fontSize={{ base: "lg", md: "xl" }}
                        variant={"unstyled"}
                     >
                        Create one
                     </Button>
                  </HStack>
                  <Box
                     textAlign={"center"}
                     my={14}
                     color={"blackAlpha.700"}
                     fontWeight={500}
                  >
                     Forgot email or trouble signing in?{" "}
                     <span style={{ textDecoration: "underline" }}>
                        Get help.
                     </span>
                  </Box>
                  <Box
                     w={{ base: "90%", md: "70%" }}
                     m={"auto"}
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

export default SigninButton;
