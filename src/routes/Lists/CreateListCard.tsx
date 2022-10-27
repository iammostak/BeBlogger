import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { CiBookmarkPlus } from "react-icons/ci";

function CreateListCard() {
   return (
      <HStack
         h={{ base: 140, md: 190 }}
         overflow={"hidden"}
         bg={"#1b8918"}
         borderRadius={"md"}
      >
         <VStack p={{ base: 3, md: 7 }} w={"50%"} align={"stretch"} spacing={5}>
            <Heading
               textAlign={"left"}
               size={{ base: "xs", md: "md" }}
               color={"white"}
               fontFamily={"Helvetica"}
               fontWeight={800}
            >
               Create a list to easily organize and share stories
            </Heading>
            <Box textAlign={"left"}>
               <Button
                  size={{ base: "xs", md: "md" }}
                  borderRadius={30}
                  fontWeight={"normal"}
                  fontSize={{ base: "xs", md: "sm" }}
                  bg={"#191918"}
                  color={"white"}
                  _hover={{ bg: "#191918" }}
               >
                  Start a list
               </Button>
            </Box>
         </VStack>
         <HStack
            w={{ base: "45%", md: "40%" }}
            h={"140%"}
            borderRadius={{ base: 0, md: 140 }}
            bg={"#389937"}
            justify={"center"}
         >
            <Box p={5} bg={"white"} borderRadius={50}>
               <CiBookmarkPlus size={30} color="#1b8918" />
            </Box>
         </HStack>
         <VStack
            py={5}
            px={7}
            w={"6%"}
            h={"100%"}
            color={"white"}
            display={{ base: "none", md: "flex" }}
         >
            <CloseIcon boxSize={3} cursor={"pointer"} />
         </VStack>
      </HStack>
   );
}

export default CreateListCard;
