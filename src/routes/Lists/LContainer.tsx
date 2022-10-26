import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CreateListCard from "./CreateListCard";
import ReadingListCard from "./ReadingListCard";

function LContainer() {
   const [curr, setCurr] = useState(0);

   return (
      <VStack
         px={12}
         py={10}
         w={"67%"}
         h={"100%"}
         borderRight={"1px solid"}
         borderColor={"blackAlpha.200"}
         align={"stretch"}
      >
         <HStack justify={"space-between"}>
            <Heading
               textAlign={"left"}
               fontSize={44}
               fontWeight={800}
               color={"blackAlpha.800"}
            >
               Your lists
            </Heading>
            <Button
               px={5}
               bg={"#1b8918"}
               color={"white"}
               fontWeight={"normal"}
               borderRadius={30}
               _hover={{ bg: "#1b8918" }}
            >
               New list
            </Button>
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
               color={curr === 0 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               Saved
            </Box>
            <Box
               onClick={() => setCurr(1)}
               color={curr === 1 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               Highlights
            </Box>
         </HStack>
         <VStack align={"stretch"} py={10} spacing={7}>
            <CreateListCard />
            <ReadingListCard />
         </VStack>
      </VStack>
   );
}

export default LContainer;
