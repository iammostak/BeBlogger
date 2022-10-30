import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { HiPlay } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiLink, FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import { BsBookmarkCheckFill, BsFillBookmarkFill } from "react-icons/bs";

type Props = {
   avatar: string;
   name: string;
   role: string;
   date: string;
   blog_on: string;
   blog_on_img: string;
   blog_img: string;
   blog_title: string;
   blog_tag: string;
   blog_sub_title: string;
   reading_time: string;
   content: (string | string[])[][];
};

function BlogHeader(blog: Props) {
   const [state, setState] = useState<boolean>(false);

   return (
      <VStack p={12} pb={5} w={"100%"} align={"stretch"}>
         <HStack justify={"space-between"}>
            <HStack spacing={4}>
               <Image
                  src={blog.avatar}
                  boxSize={50}
                  borderRadius={50}
                  border={"1px solid"}
                  borderColor={"blackAlpha.200"}
                  bg={"blackAlpha.200"}
               />
               <VStack align={"stretch"} spacing={1}>
                  <Text textAlign={"left"}>{blog.name}</Text>
                  <HStack color={"blackAlpha.700"} spacing={2}>
                     <Text fontSize={"sm"}>{blog.date}</Text>
                     <Text fontSize={"sm"} color={"blackAlpha.400"}>
                        •
                     </Text>
                     <Text fontSize={"sm"}>{blog.reading_time}</Text>
                     <Text fontSize={"sm"} color={"blackAlpha.400"}>
                        •
                     </Text>
                     <HStack spacing={1} color={"green.500"} cursor={"pointer"}>
                        <HiPlay size={17} />
                        <Text fontSize={"sm"}>Listen</Text>
                     </HStack>
                  </HStack>
               </VStack>
            </HStack>
            <HStack spacing={10}>
               <HStack spacing={4}>
                  <FaTwitter
                     size={19}
                     className="blogIcon"
                     style={{ cursor: "pointer" }}
                  />
                  <FaFacebook
                     size={18}
                     className="blogIcon"
                     style={{ cursor: "pointer" }}
                  />
                  <FaLinkedin
                     size={17}
                     className="blogIcon"
                     style={{ cursor: "pointer" }}
                  />
                  <FiLink
                     size={17}
                     className="blogIcon"
                     style={{ cursor: "pointer" }}
                  />
               </HStack>
               <HStack spacing={7}>
                  {state ? (
                     <BsBookmarkCheckFill
                        onClick={() => setState(!state)}
                        size={16}
                        style={{ cursor: "pointer" }}
                     />
                  ) : (
                     <BsFillBookmarkFill
                        onClick={() => setState(!state)}
                        size={16}
                        className="blogIcon"
                        style={{ cursor: "pointer" }}
                     />
                  )}
                  <FiMoreHorizontal
                     size={18}
                     className="blogIcon"
                     style={{ cursor: "pointer" }}
                  />
               </HStack>
            </HStack>
         </HStack>
      </VStack>
   );
}

export default BlogHeader;
