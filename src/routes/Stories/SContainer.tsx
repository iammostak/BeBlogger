import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function SContainer() {
   const [curr, setCurr] = useState(0);

   useEffect(() => {
      document.title = "Your stories - Medium";
   }, []);

   return (
      <VStack
         px={{ base: 4, md: 12 }}
         py={10}
         w={{ base: "100%", lg: "67%" }}
         h={"100%"}
         align={"stretch"}
      >
         <HStack justify={"space-between"}>
            <Heading
               textAlign={"left"}
               fontSize={{ base: 33, md: 44 }}
               fontWeight={800}
               color={"blackAlpha.800"}
            >
               Your stories
            </Heading>
            <HStack display={{ base: "none", md: "flex" }}>
               <Button
                  px={5}
                  fontSize={"sm"}
                  bg={"#1b8918"}
                  color={"white"}
                  fontWeight={"normal"}
                  borderRadius={30}
                  _hover={{ bg: "#1b8918" }}
               >
                  Write a story
               </Button>
               <Button
                  px={5}
                  fontSize={"sm"}
                  fontWeight={"normal"}
                  borderRadius={30}
                  variant={"outline"}
                  borderColor={"blackAlpha.600"}
               >
                  Import a story
               </Button>
            </HStack>
         </HStack>
         <HStack
            py={4}
            pt={7}
            borderBottom={"1px solid"}
            borderColor={"blackAlpha.200"}
            fontSize={"sm"}
            gap={7}
         >
            <Box
               onClick={() => setCurr(0)}
               color={curr === 0 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Drafts
            </Box>
            <Box
               onClick={() => setCurr(1)}
               color={curr === 1 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Published
            </Box>
            <Box
               onClick={() => setCurr(2)}
               color={curr === 2 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Responses
            </Box>
         </HStack>
         <VStack py={10} align={"stretch"} spacing={{ base: 4, md: 7 }}>
            {curr === 0 ? (
               <>
                  <Text mt={{ base: 0, md: 10 }}>You have no drafts.</Text>
                  <Text>
                     <span
                        style={{
                           textDecoration: "underline",
                           cursor: "pointer",
                        }}
                     >
                        Write
                     </span>{" "}
                     a story or{" "}
                     <span
                        style={{
                           textDecoration: "underline",
                           cursor: "pointer",
                        }}
                     >
                        read
                     </span>{" "}
                     on Medium.
                  </Text>
               </>
            ) : curr === 1 ? (
               <Text>You haven’t published any public stories yet.</Text>
            ) : (
               <></>
            )}
         </VStack>
      </VStack>
   );
}

export default SContainer;
