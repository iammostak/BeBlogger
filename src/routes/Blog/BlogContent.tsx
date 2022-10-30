import { Text, VStack } from "@chakra-ui/react";
import BlogBullets from "./BlogBullets";
import BlogDescription from "./BlogDescription";
import BlogHeading from "./BlogHeading";
import BlogHighlight from "./BlogHighlight";
import BlogImg from "./BlogImg";
import BlogImportantNote from "./BlogImportantNote";
import BlogPoint from "./BlogPoint";
import BlogPointHeading from "./BlogPointHeading";

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

function BlogContent(blog: Props) {
   return (
      <VStack
         align={"stretch"}
         spacing={7}
         letterSpacing={0.4}
         cursor={"default"}
      >
         {blog.content.map((item) => {
            if (item[0] === "description")
               return <BlogDescription description={item[1]} />;
            if (item[0] === "heading") return <BlogHeading heading={item[1]} />;
            if (item[0] === "bullets") return <BlogBullets bullets={item[1]} />;
            if (item[0] === "point_heading")
               return <BlogPointHeading point_heading={item[1]} />;
            if (item[0] === "point") return <BlogPoint point={item[1]} />;
            if (item[0] === "img") return <BlogImg img={item[1]} />;
            if (item[0] === "important_note")
               return <BlogImportantNote important_note={item[1]} />;
            if (item[0] === "highlight")
               return <BlogHighlight highlight={item[1]} />;
         })}
      </VStack>
   );
}

export default BlogContent;
