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
   useToast,
   VStack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/auth/auth.actions";
import { useNavigate } from "react-router-dom";

type Params = {
   isSigninOpen: boolean;
   onSigninOpen: Function;
   onSigninClose: Function;
   onSignupOpen: Function;
   onSigninWithEmailOpen: Function;
   token: string;
   setToken: Function;
};

function SigninButton({
   isSigninOpen,
   onSigninOpen,
   onSigninClose,
   onSignupOpen,
   onSigninWithEmailOpen,
   token,
   setToken,
}: Params) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const toast = useToast();

   const handleLogout = () => {
      dispatch<any>(logoutAction()).then((res: any) => {
         if (res) {
            toast({
               title: "You logged out from your account",
               // description: "You logged out from your account.",
               status: "warning",
               duration: 3000,
               isClosable: true,
               position: "top",
            });
         }
         setToken();
         navigate("/");
      });
   };

   return (
      <>
         <Button
            onClick={() => {
               token.length === 0 ? onSigninOpen() : handleLogout();
            }}
            variant={"unstyled"}
            fontWeight={400}
            fontSize={14}
            _hover={{ bg: "transparent" }}
         >
            {token.length === 0 ? "Sign In" : "Logout"}
         </Button>

         <Modal
            size={{ base: "3xl", lg: "2xl" }}
            isOpen={isSigninOpen}
            onClose={() => onSigninClose()}
         >
            <ModalOverlay />
            <ModalContent h={"100vh"} m={0} borderRadius={0}>
               <ModalHeader
                  mt={{ base: 10, md: 40, lg: 10 }}
                  textAlign="center"
                  fontFamily={"Times New Roman"}
                  fontSize={30}
                  fontWeight={400}
                  letterSpacing={1}
               >
                  Welcome back.
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
                        Sign in with Google
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
                        Sign in with Facebook
                     </Button>
                     <Button
                        onClick={() => {
                           onSigninClose();
                           onSigninWithEmailOpen();
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
                        Sign in with E-mail
                     </Button>
                  </VStack>
                  <HStack my={10} justify={"center"}>
                     <Text>No account?</Text>
                     <Button
                        onClick={() => {
                           onSigninClose();
                           onSignupOpen();
                        }}
                        color={"green"}
                        variant={"unstyled"}
                     >
                        Create one
                     </Button>
                  </HStack>
                  <Box
                     textAlign={"center"}
                     my={14}
                     color={"blackAlpha.600"}
                     fontWeight={500}
                     fontSize={"sm"}
                  >
                     Forgot email or trouble signing in?{" "}
                     <span
                        style={{
                           textDecoration: "underline",
                           cursor: "pointer",
                        }}
                     >
                        Get help.
                     </span>
                  </Box>
                  <Box
                     w={{ base: "90%", md: "70%" }}
                     m={"auto"}
                     color={"blackAlpha.600"}
                     fontWeight={500}
                     textAlign={"center"}
                     fontSize={"sm"}
                  >
                     Click “Sign Up” to agree to BeBlogger’s{" "}
                     <span
                        style={{
                           textDecoration: "underline",
                           cursor: "pointer",
                        }}
                     >
                        Terms of Service
                     </span>{" "}
                     and acknowledge that BeBlogger’s{" "}
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
