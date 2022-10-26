import { AddIcon } from "@chakra-ui/icons";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

function Blogs() {
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
         pos={"relative"}
      >
         <HStack
            pb={4}
            pos={"sticky"}
            top={6}
            borderBottom={"1px solid"}
            borderColor={"blackAlpha.200"}
            color={"blackAlpha.700"}
            fontSize={"sm"}
            justify={"space-around"}
         >
            <Box>
               <AddIcon color={"blackAlpha.700"} />
            </Box>
            <Box
               onClick={() => setCurr(0)}
               color={curr === 0 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               For you
            </Box>
            <Box
               onClick={() => setCurr(1)}
               color={curr === 1 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               Following
            </Box>
            <Box
               onClick={() => setCurr(2)}
               color={curr === 2 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               Web Development
            </Box>
            <Box
               onClick={() => setCurr(3)}
               color={curr === 3 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               Data Science
            </Box>
            <Box
               onClick={() => setCurr(4)}
               color={curr === 4 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               React
            </Box>
            <Box
               onClick={() => setCurr(5)}
               color={curr === 5 ? "blackAlpha.900" : "blackAlpha.700"}
               cursor={"pointer"}
            >
               Software Engineering
            </Box>
         </HStack>
      </VStack>
   );
}

export default Blogs;
