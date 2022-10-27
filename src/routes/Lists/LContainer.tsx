import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CreateListCard from "./CreateListCard";
import ReadingListCard from "./ReadingListCard";

function LContainer() {
   const [curr, setCurr] = useState(0);

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
               Your lists
            </Heading>
            <Button
               px={5}
               size={{ base: "sm", md: "md" }}
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
               color={curr === 0 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Saved
            </Box>
            <Box
               onClick={() => setCurr(1)}
               color={curr === 1 ? "blackAlpha.900" : "blackAlpha.600"}
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
