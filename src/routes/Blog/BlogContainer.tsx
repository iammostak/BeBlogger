import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import BlogContent from "./BlogContent";

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

function BlogContainer(blog: Props) {
   return (
      <VStack px={12} pb={4} align={"stretch"}>
         <Heading textAlign={"left"} fontSize={"3xl"} fontWeight={800}>
            {blog.blog_title}
         </Heading>
         <Text fontSize={"xl"} textAlign={"left"} color={"blackAlpha.700"}>
            {blog.blog_sub_title}
         </Text>
         <Image src={blog.blog_img} py={10} />
         <BlogContent {...blog} />
      </VStack>
   );
}

export default BlogContainer;
