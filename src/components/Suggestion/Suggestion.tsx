import { SearchIcon } from "@chakra-ui/icons";
import {
   Box,
   Button,
   Heading,
   HStack,
   Icon,
   Input,
   InputGroup,
   InputLeftElement,
   Text,
   VStack,
} from "@chakra-ui/react";
import AdCard from "./AdCard";
import StaffPicks from "./StaffPicks";

function Suggestion() {
   return (
      <VStack
         px={8}
         py={10}
         w={"33%"}
         // h={"200vh"}
         align={"stretch"}
         spacing={10}
         pos={"sticky"}
         // top={"-100vh"}
      >
         <Button
            w={"100%"}
            color={"white"}
            fontWeight={"normal"}
            fontSize={"sm"}
            bg={"#191918"}
            borderRadius={30}
            _hover={{ bg: "#191918" }}
            letterSpacing={0.5}
         >
            Get unlimited access
         </Button>
         <InputGroup>
            <InputLeftElement
               ml={1}
               pointerEvents="none"
               children={<SearchIcon color="blackAlpha.800" />}
            />
            <Input
               borderRadius={30}
               type="search"
               placeholder="Search"
               _placeholder={{ fontSize: "sm", color: "blackAlpha.700" }}
               focusBorderColor={"none"}
               letterSpacing={0.5}
            />
         </InputGroup>
         <VStack align={"stretch"} spacing={5} cursor={"default"}>
            <HStack mb={1}>
               <Icon boxSize={3} viewBox="0 0 200 200" color="green.600">
                  <path
                     fill="currentColor"
                     d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
               </Icon>
               <Heading textAlign={"left"} size={"sm"}>
                  Staff Picks
               </Heading>
            </HStack>
            {new Array(3).fill("").map((item) => (
               <StaffPicks />
            ))}
            <Text
               w={"30%"}
               align={"left"}
               fontSize={"sm"}
               color={"green.600"}
               cursor={"pointer"}
               _hover={{ color: "blackAlpha.800" }}
            >
               See the full list
            </Text>
         </VStack>
         <AdCard />
      </VStack>
   );
}

export default Suggestion;
