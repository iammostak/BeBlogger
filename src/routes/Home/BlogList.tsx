import {
   Heading,
   HStack,
   Image,
   StackDivider,
   Tag,
   TagLabel,
   Text,
   VStack,
} from "@chakra-ui/react";
import BlogCard from "./BlogCard";

const months = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec",
];

const blogs = [
   {
      avatar: "https://avatars.githubusercontent.com/u/101392142?v=4",
      name: "Suraj Kumar Mishra",
      role: "Aspiring Full Stack Web Developer",
      date: `${months[new Date().getMonth()]} ${new Date().getDate()}`,
      blog_on: "Better Programming",
      blog_img:
         "https://miro.medium.com/max/1100/1*HSY4FKxw0M7jlre9zKXLjA.jpeg",
      blog_title:
         "Study Plan to Land Senior Software Engineer Positions at Meta, Google, and More",
      blog_tag: "Programming",
      blog_sub_title:
         "My 3-month plan to better prepare for Sr. Software Engineer interviews.",
      content: [
         [
            "description",
            "First, I have to mention that this preparation plan is based on my own experience and might not necessarily work for others, however, there are general recommendations that can be beneficial to anyone interested in the process.",
         ],
         ["heading", "TL;DR"],
         [
            "description",
            "Here’s a little background story about myself. I worked at Amazon for 7.5+ years. At the time of my departure from the company, more than 97% of Amazonians were subsequently hired. The decision to leave came as a result of wanting to look for opportunities elsewhere, explore new challenges, and increase my total income. I was a semi-active interviewer at Amazon, but apart from that, I haven’t prepared for technical interviews in several years. After a couple of months of preparation and interviews with some software companies, I received multiple offers. Then, after some negotiations, I signed an offer and accepted a senior engineer position at Meta (formerly Facebook).",
         ],
         ["heading", "Determine if you are really a senior engineer"],
         [
            "description",
            "If you do a quick Google search, you’ll find many articles talking about the definition of seniority for software engineer positions. However, years of experience don’t necessarily translate to a seniority level. For example, if you have done any of the following, consider yourself a senior engineer:",
         ],
         [
            "bullets",
            [
               "Led a project with a larger scope than your immediate team which included a large amount of communication with external teams.",
               "Are familiar with System Design concepts and independently designed a semi-complicated system.",
               "Your code is clean, well-documented, and with proper test cases.",
               "Mentored other engineers/interns. Mentorship can have different forms and range from reviewing others’ code, active participation in design meetings, or setting up learning sessions to fully mentoring engineers from the beginning till the ramp-up goal is reached.",
               "Proactively look for ways to solve a problem without being told",
            ],
         ],
         [
            "description",
            "Personally, I consider the above items to be the basic or the minimum requirements a senior engineer should possess. If you are missing one or more of the above items in your experience, you should actively plan to gain that valuable experience before applying for any senior position. Landing a senior position at other companies also requires a preparation strategy as well as consistency and commitment. Here is a breakdown of what my preparation plan looked like.",
         ],
      ],
      reading_time: "5 min read",
   },
];

function BlogList() {
   return (
      <VStack
         py={10}
         align={"stretch"}
         spacing={7}
         divider={<StackDivider borderColor="gray.200" />}
      >
         {blogs.map((item) =>
            new Array(20).fill("").map(() => <BlogCard {...item} />)
         )}
      </VStack>
   );
}

export default BlogList;
