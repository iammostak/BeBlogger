import {
   Box,
   Flex,
   HStack,
   Image,
   Text,
   useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import medium_logo from "../../assets/medium_logo.png";
import SigninButton from "./SigninButton";
import SigninWithEmail from "./SigninWithEmail";
import SignupButton from "./SignupButton";
import SignupWithEmail from "./SignupWithEmail";

const Auth: {
   mainToken: string;
   refreshToken: string;
} = {
   mainToken: "",
   refreshToken: "",
};

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

   const [offset, setOffset] = useState(0);
   let auth = JSON.parse(`${localStorage.getItem("jwt")}`) || Auth;
   const [token, setToken] = useState<string>("");

   useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   useEffect(() => {
      setToken(auth.mainToken);
   }, []);

   return (
      <Flex
         p={{ base: 2, md: 4 }}
         px={{ base: 4, md: 7, lg: 16 }}
         align={"center"}
         justify={"space-between"}
         borderBottom={"1px solid"}
         bg={offset > 450 ? "white" : "#ffc118"}
         pos={"sticky"}
         top={0}
         zIndex={7}
      >
         <Box as={NavLink} to={"/"}>
            <Image
               h={{ base: "20px", md: "24px" }}
               src={medium_logo}
               alt="medium_logo"
            />
         </Box>
         <HStack fontSize={14} spacing={{ base: 3, lg: 7 }} fontWeight={500}>
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
                     token={token}
                     setToken={() => setToken("")}
                     isSigninOpen={isSigninOpen}
                     onSigninOpen={onSigninOpen}
                     onSigninClose={onSigninClose}
                     onSignupOpen={onSignupOpen}
                     onSigninWithEmailOpen={onSigninWithEmailOpen}
                  />
               </Box>
               <SignupButton
                  token={token}
                  offset={offset}
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
