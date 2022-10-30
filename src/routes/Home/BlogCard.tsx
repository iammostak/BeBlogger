import {
   Heading,
   HStack,
   Image,
   Tag,
   TagLabel,
   Text,
   VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type Props = {
   id: number;
   avatar: string;
   name: string;
   role: string;
   date: string;
   blog_on: string;
   blog_img: string;
   blog_title: string;
   blog_tag: string;
   blog_sub_title: string;
   content: (string | string[])[][];
   reading_time: string;
};

function BlogCard(item: Props) {
   const [state, setState] = useState<boolean>(false);
   const navigate = useNavigate();
   const {
      id,
      avatar,
      name,
      date,
      blog_on,
      blog_img,
      blog_title,
      blog_tag,
      blog_sub_title,
      reading_time,
   } = item;

   return (
      <VStack
         align={"stretch"}
         spacing={3}
         cursor={"pointer"}
         onClick={() => navigate(`/home/${id}`)}
      >
         <HStack spacing={4}>
            <Image src={avatar} alt={name} boxSize={30} borderRadius={50} />
            <HStack spacing={1.5}>
               <Text>{name}</Text>
               <Text fontSize={"sm"} color={"blackAlpha.600"}>
                  in
               </Text>
               {blog_on && <Text fontSize={"sm"}>{blog_on}</Text>}
               <Text fontSize={"sm"} color={"blackAlpha.400"}>
                  •
               </Text>
               <Text fontSize={"sm"} color={"blackAlpha.700"}>
                  {date}
               </Text>
            </HStack>
         </HStack>
         <HStack justify={"space-between"} spacing={63}>
            <VStack align={"stretch"} spacing={4}>
               <Heading textAlign={"left"} size={"md"}>
                  {blog_title}
               </Heading>
               <Text textAlign={"left"} fontFamily={"Times"}>
                  {blog_sub_title}
               </Text>
            </VStack>
            <Image src={blog_img} alt="blog_img" boxSize={111} w={127} />
         </HStack>
         <HStack justify={"space-between"} w={"73%"}>
            <HStack spacing={3}>
               <Tag
                  borderRadius={"full"}
                  bg={"blackAlpha.100"}
                  color={"blackAlpha.900"}
               >
                  <TagLabel>{blog_tag}</TagLabel>
               </Tag>
               <Text fontSize={"sm"} color={"blackAlpha.600"}>
                  {reading_time}
               </Text>
            </HStack>
            <HStack spacing={5}>
               {state ? (
                  <BsBookmarkCheckFill
                     onClick={() => setState(!state)}
                     size={20}
                     style={{ cursor: "pointer" }}
                  />
               ) : (
                  <BsBookmarkPlus
                     onClick={() => setState(!state)}
                     size={20}
                     style={{ cursor: "pointer" }}
                  />
               )}
               <FiMoreHorizontal size={22} style={{ cursor: "pointer" }} />
            </HStack>
         </HStack>
      </VStack>
   );
}

export default BlogCard;
