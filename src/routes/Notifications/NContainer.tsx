import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

function NContainer() {
   const [curr, setCurr] = useState(0);

   return (
      <VStack
         px={{ base: 4, md: 12 }}
         py={10}
         w={{ base: "100%", lg: "67%" }}
         h={"100%"}
         align={"stretch"}
      >
         <Heading
            textAlign={"left"}
            fontSize={{ base: 33, md: 44 }}
            fontWeight={800}
            color={"blackAlpha.800"}
         >
            Notifications
         </Heading>
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
               All
            </Box>
            <Box
               onClick={() => setCurr(1)}
               color={curr === 1 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Responses
            </Box>
         </HStack>
         <HStack
            p={5}
            fontSize={"sm"}
            color={"blackAlpha.700"}
            justify={"space-between"}
         >
            <Box>You're all catch up.</Box>
            <Box
               color={"green.600"}
               _hover={{ color: "blackAlpha.800", cursor: "pointer" }}
            >
               Your stats
            </Box>
         </HStack>
      </VStack>
   );
}

export default NContainer;
