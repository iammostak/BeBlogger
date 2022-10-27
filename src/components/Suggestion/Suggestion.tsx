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
import Connect from "./Connect";
import ExtraInfo from "./ExtraInfo";
import Follow from "./Follow";
import StaffPicks from "./StaffPicks";
import Topics from "./Topics";

const staffPicks = [
   {
      avatar: "https://avatars.githubusercontent.com/u/101392142?v=4",
      name: "Suraj Kumar Mishra",
      heading:
         "Want to Communicate Effectively at Work? Eliminate these 5 Cognitive Distortions",
   },
   {
      avatar: "https://avatars.githubusercontent.com/u/102856087?v=4",
      name: "Madhukesh Kumar Thakur",
      heading: "So When, Exactly, Did Conspiracy Culture Stop Being Fun?",
   },
   {
      avatar: "https://avatars.githubusercontent.com/u/99809028?v=4",
      name: "Md Mostafijur Rahman",
      heading: "If You Try To Do Everything, You Won't Do Anything",
   },
];

function Suggestion() {
   return (
      <VStack
         px={8}
         py={10}
         w={"33%"}
         h={"300vh"}
         align={"stretch"}
         borderLeft={"1px solid"}
         borderColor={"blackAlpha.200"}
         spacing={10}
         pos={"sticky"}
         top={"-200vh"}
         display={{ base: "none", lg: "flex" }}
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
               <Heading
                  textAlign={"left"}
                  size={"sm"}
                  fontFamily={"Helvetica"}
                  letterSpacing={0.3}
               >
                  Staff Picks
               </Heading>
            </HStack>
            {staffPicks.map((item) => (
               <StaffPicks {...item} />
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
         <Connect />
         <Topics />
         <Follow />
         <ExtraInfo />
      </VStack>
   );
}

export default Suggestion;
