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
   useToast,
   VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiHide, BiShow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/auth/auth.actions";
import { useNavigate } from "react-router-dom";

type Params = {
   isSigninWithEmailOpen: boolean;
   onSigninWithEmailClose: Function;
   onSigninOpen: Function;
};

const User: {
   email: string;
   password: string;
} = {
   email: "",
   password: "",
};

function SigninWithEmail({
   isSigninWithEmailOpen,
   onSigninWithEmailClose,
   onSigninOpen,
}: Params) {
   const [show, setShow] = useState<boolean>(false);
   const [user, setUser] = useState(User);
   const dispatch = useDispatch();
   const toast = useToast();
   const navigate = useNavigate();

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUser({
         ...user,
         [name]: value,
      });
   };

   const handleSubmit = () => {
      dispatch<any>(loginAction(user)).then((res: any) => {
         if (res) {
            onSigninWithEmailClose();
            toast({
               title: "Login Success.",
               description: "Hurray! You logged in to your account.",
               status: "success",
               duration: 3000,
               isClosable: true,
               position: "top",
            });
            navigate("/home");
         } else {
            toast({
               title: "Login Failed.",
               description: "Please try to login with valid credentials.",
               status: "error",
               duration: 3000,
               isClosable: true,
               position: "top",
            });
         }
      });
   };

   return (
      <Modal
         size={"4xl"}
         isOpen={isSigninWithEmailOpen}
         onClose={() => onSigninWithEmailClose()}
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
                  Sign in with email
               </Heading>
               <Text fontSize={"lg"} my={4} fontFamily={"Helvetica"}>
                  Enter your credentials to login to your account.
               </Text>
            </ModalHeader>

            <ModalCloseButton />

            <ModalBody>
               <FormControl
                  m={"auto"}
                  w={{ base: "90%", md: "55%", lg: "37%" }}
               >
                  <FormLabel textAlign="center" fontWeight={400}>
                     Your email
                  </FormLabel>
                  <Input
                     value={user.email}
                     onChange={handleChange}
                     mb={7}
                     px={4}
                     name="email"
                     type="email"
                     variant={"flushed"}
                     focusBorderColor={"gray.700"}
                     textAlign={"center"}
                  />
                  <FormLabel textAlign="center" fontWeight={400}>
                     Your password
                  </FormLabel>
                  <InputGroup>
                     <Input
                        value={user.password}
                        onChange={handleChange}
                        mb={10}
                        px={4}
                        name="password"
                        type={show ? "text" : "password"}
                        variant={"flushed"}
                        focusBorderColor={"gray.700"}
                        textAlign={"center"}
                     />
                     <InputRightElement>
                        {show ? (
                           <BiShow
                              size={20}
                              cursor={"pointer"}
                              onClick={() => setShow(!show)}
                           />
                        ) : (
                           <BiHide
                              size={20}
                              cursor={"pointer"}
                              onClick={() => setShow(!show)}
                           />
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
                     onClick={handleSubmit}
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
                     Sign in
                  </Button>
               </VStack>
               <Box textAlign="center" mt={10}>
                  <Button
                     onClick={() => {
                        onSigninWithEmailClose();
                        onSigninOpen();
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
                     All Sign in options
                  </Button>
               </Box>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
}

export default SigninWithEmail;
