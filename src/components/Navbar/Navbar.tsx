import {
   Box,
   Flex,
   HStack,
   Image,
   Text,
   useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import medium_logo from "../../assets/medium_logo.png";
import SigninButton from "./SigninButton";
import SigninWithEmail from "./SigninWithEmail";
import SignupButton from "./SignupButton";
import SignupWithEmail from "./SignupWithEmail";

function Navbar() {
   const {
      isOpen: isSigninOpen,
      onOpen: onSigninOpen,
      onClose: onSigninClose,
   } = useDisclosure();
   const {
      isOpen: isSignupOpen,
      onOpen: onSignupOpen,
      onClose: onSignupClose,
   } = useDisclosure();
   const {
      isOpen: isSignupWithEmailOpen,
      onOpen: onSignupWithEmailOpen,
      onClose: onSignupWithEmailClose,
   } = useDisclosure();
   const {
      isOpen: isSigninWithEmailOpen,
      onOpen: onSigninWithEmailOpen,
      onClose: onSigninWithEmailClose,
   } = useDisclosure();

   return (
      <Flex
         p={{ base: 4, md: 6 }}
         px={{ base: 7, md: 10, lg: 20 }}
         align={"center"}
         justify={"space-between"}
         borderBottom={"1px solid"}
         bg={"#ffc118"}
      >
         <Box as={NavLink} to={"/"}>
            <Image
               h={{ base: "25px", md: "30px" }}
               src={medium_logo}
               alt="medium_logo"
            />
         </Box>
         <HStack fontSize={18} spacing={{ base: 3, lg: 7 }} fontWeight={500}>
            <HStack
               display={{ base: "none", md: "flex" }}
               m={"auto"}
               spacing={{ base: 3, lg: 7 }}
            >
               <Text>Our Story</Text>
               <Text>Membership</Text>
               <Text>Write</Text>
            </HStack>
            <HStack m={"auto"} spacing={{ base: 4, lg: 7 }}>
               <Box display={{ base: "none", sm: "flex" }}>
                  <SigninButton
                     isSigninOpen={isSigninOpen}
                     onSigninOpen={onSigninOpen}
                     onSigninClose={onSigninClose}
                     onSignupOpen={onSignupOpen}
                     onSigninWithEmailOpen={onSigninWithEmailOpen}
                  />
               </Box>
               <SignupButton
                  isSignupOpen={isSignupOpen}
                  onSignupOpen={onSignupOpen}
                  onSignupClose={onSignupClose}
                  onSigninOpen={onSigninOpen}
                  onSignupWithEmailOpen={onSignupWithEmailOpen}
               />
               <SigninWithEmail
                  isSigninWithEmailOpen={isSigninWithEmailOpen}
                  onSigninWithEmailClose={onSigninWithEmailClose}
                  onSigninOpen={onSigninOpen}
                  />
               <SignupWithEmail
                  isSignupWithEmailOpen={isSignupWithEmailOpen}
                  onSignupWithEmailClose={onSignupWithEmailClose}
                  onSignupOpen={onSignupOpen}
                  onSigninWithEmailOpen={onSigninWithEmailOpen}
               />
            </HStack>
         </HStack>
      </Flex>
   );
}

export default Navbar;
