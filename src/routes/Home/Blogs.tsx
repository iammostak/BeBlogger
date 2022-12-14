import { AddIcon } from "@chakra-ui/icons";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import BlogList from "./BlogList";

function Blogs() {
   const [curr, setCurr] = useState(0);

   return (
      <VStack
         px={12}
         pb={10}
         w={{ base: "100%", lg: "67%" }}
         h={"100%"}
         align={"stretch"}
         pos={"relative"}
      >
         <HStack
            pb={4}
            pt={10}
            pos={"sticky"}
            top={-6}
            borderBottom={"1px solid"}
            borderColor={"blackAlpha.200"}
            color={"blackAlpha.700"}
            fontSize={"sm"}
            justify={"space-around"}
            display={{ base: "none", md: "flex" }}
            bg={"white"}
         >
            <Box>
               <AddIcon color={"blackAlpha.600"} />
            </Box>
            <Box
               onClick={() => setCurr(0)}
               color={curr === 0 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               For you
            </Box>
            <Box
               onClick={() => setCurr(1)}
               color={curr === 1 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Following
            </Box>
            <Box
               onClick={() => setCurr(2)}
               color={curr === 2 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Web Development
            </Box>
            <Box
               onClick={() => setCurr(3)}
               color={curr === 3 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Data Science
            </Box>
            <Box
               onClick={() => setCurr(4)}
               color={curr === 4 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               React
            </Box>
            <Box
               onClick={() => setCurr(5)}
               color={curr === 5 ? "blackAlpha.900" : "blackAlpha.600"}
               cursor={"pointer"}
            >
               Software Engineering
            </Box>
         </HStack>
         <BlogList />
      </VStack>
   );
}

export default Blogs;
