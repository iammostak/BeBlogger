import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import BlogHeader from "./BlogHeader";
import BlogContainer from "./BlogContainer";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

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

const blog = {
   avatar: "https://avatars.githubusercontent.com/u/101392142?v=4",
   name: "Suraj Kumar Mishra",
   role: "Aspiring Full Stack Web Developer",
   date: `${months[new Date().getMonth()]} ${new Date().getDate()}`,
   blog_on: "Better Programming",
   blog_on_img:
      "https://miro.medium.com/fit/c/48/48/1*QNoA3XlXLHz22zQazc0syg.png",
   blog_img: "https://miro.medium.com/max/1100/1*HSY4FKxw0M7jlre9zKXLjA.jpeg",
   blog_title:
      "Study Plan to Land Senior Software Engineer Positions at Meta, Google, and More",
   blog_tag: "Programming",
   blog_sub_title:
      "My 3-month plan to better prepare for Sr. Software Engineer interviews.",
   reading_time: "5 min read",
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
      ["heading", "Before Preparation"],
      ["point_heading", "1. Determine how much preparation you need"],
      [
         "description",
         "The first step I took was solving popular easy questions on LeetCode without timing how long it took to solve each problem. I solved about 70% of the questions without paying attention to the time. This also provided a great refresher course for certain data structures like PriorityQueue (Heap) that I never used in my daily job. Based on the outcome, I noticed that at least 3 months were required for me to pass the onsite interviews.",
      ],
      ["point_heading", "2. Find out the target companies"],
      [
         "description",
         "It’s important to research and compile a list of companies that you want to apply for. For each company, I read descriptions for available positions to determine if they were aligned with my interests and check whether I met the requirements. This step can be also done weeks before your preparation and gives you a better idea of what to expect from certain companies and positions.",
      ],
      ["heading", "Week 1–4, Before phone interviews"],
      ["point_heading", "1. Focus on Algorithms/Coding"],
      [
         "description",
         "In my former position, I was already designing large-scale systems. The challenging part is the coding questions that required more time for practice. In terms of the difficulty of the questions, I spent 20% of my time on easy, 70% on medium, and 10% on popular, hard questions (e.g. Word Ladder 2, Alien Dictionary, Minimum Window Substring, and Word Break 2). Again, I didn’t time myself but made sure I thoroughly did my best to solve the problems before jumping to the solutions. To make more use of the limited preparation time, I created a 10 Not-To-Do list when solving questions on LeetCode.",
      ],
      [
         "description",
         "Another strategy was booking mock interview sessions on TechMockInterview to better understand which areas I needed to improve from a professional’s point of view. I booked coding sessions with Google and Meta interviewers which ended up being quite beneficial.",
      ],
      ["point_heading", "2. Apply for the positions"],
      [
         "description",
         "I applied to my targeted positions during the first 2 weeks. The response time varied with some companies responding in a matter of days, some in 1–2 weeks, a few never responded and others sent rejections within the resume evaluation phase.",
      ],
      [
         "description",
         "During this period, I took the initiative to set up the phone screening around the 6th week with the recruiters. Once the phone screening dates were finalized, I created a doc for each company and gathered all coding, system design, and behavioral questions I could via searches on Glassdoor, LeetCode discussion section, and preparation materials that those companies had provided.",
      ],
      ["heading", "Week 5–6: Final preparation for phone screens"],
      [
         "description",
         "The phone screens are heavily focused on coding and perhaps a few behavioral questions. It’s good practice to have a margin of at least 2–3 days between each interview and use it for reading the company-specific docs mentioned in the previous section. This time, I timed myself during the coding preparations.",
      ],
      [
         "description",
         "An important but commonly overlooked part is the behavioral questions. A company like Snap mentions that one of the must-know questions would be “Why Snap?” and fair enough this was the first question asked. I also gathered a list of behavioral questions and tried to answer each precisely in a STAR manner.",
      ],
      ["heading", "Week 7–12: OnSite Preparation"],
      [
         "description",
         "I managed to pass all the phone screens except for one. Ironically, it was the same interview I felt most confident about. It’s important to note that you will encounter disappointments during the process. However, instead of trying to analyze the reasons behind any rejection, it’s more feasible to shift your focus to the rest of the interviews that you have lined up.",
      ],
      ["img", "https://miro.medium.com/max/1100/1*y7TwupwaoWMPeYNHYOlQHQ.jpeg"],
      ["point_heading", "1. System Design"],
      [
         "description",
         "For the senior position interviews, you should expect at least one system design round. This plays a significant role in determining your seniority level in the final offer. Note that",
      ],
      [
         "important_note",
         "If you do a commendable job in coding but perform mediocre in the system design round, they might reject you or offer an intermediate position.",
      ],
      [
         "description",
         "If you consider yourself a senior engineer based on the minimum requirements previously mentioned, then you should be familiar with basic system design concepts and have led design sessions in your current position. For system design, I studied the following materials:",
      ],
      [
         "point",
         [
            "Tech Dummies",
            "Youtube Channel: His videos are based on his research on many technical blogs. The designs that he explains are very close to the architecture of real-world services. Some videos might look lengthy but there are many concepts to be learned (e.g. Count–min sketch) from watching the videos.",
         ],
      ],
      [
         "point",
         [
            "Gaurav Sen",
            "Youtube Channel: The explanation style of this particular channel is very close to what is expected in a system design interview. One downside for me, however, was that he sped up the voice on some videos which may be a little frustrating to some viewers.",
         ],
      ],
      [
         "point",
         [
            "Grokking the System Design Interviews:",
            "My personal preference is videos over text so the tutorials were a task for me to endure. Also, they are highly focused on gathering a lot of numbers and calculations which isn’t truly necessary. Unless you are specifically asked about something like the number of needed servers, you simply just need a rough idea about the scale of the system from the gathered numbers. For instance, you should know whether storing data in memory is a feasible option considering the requirement or if you need another way or even a hybrid approach to store your data. It’s solely dependent on the question and the interviewer’s preference.",
         ],
      ],
      [
         "description",
         "I followed a very simple structure in my system design interviews unless the interviewer wanted to lead me in a different direction. In a nutshell, these are the methods that worked for me:",
      ],
      [
         "bullets",
         [
            "Clarifying questions, gathering functional, and non-functional (e.g. availability, consistency, latency, durability, numbers related to the usage of the system, etc.): 10 mins",
            "API Design: 5 mins",
            "High-level design (most of the cases following a micro-service architecture): 10 mins",
            "Data Model (e.g. table designs): 5 mins",
            "Answering follow-up questions or going into details of a component: 10–15 mins",
         ],
      ],
      ["point_heading", "2. Coding"],
      [
         "description",
         "Regardless of your position, the software engineer interviews are heavily focused on coding. You should expect on-site questions to be somewhat more difficult than phone screens. At this stage, more focus should be placed on timing.",
      ],
      [
         "description",
         "During my preparation, I noticed 6 really popular topics in the questions asked by the interviewers. I spent extra time pursuing the relevant questions to these topics.",
      ],
      [
         "highlight",
         "There are also algorithms/concepts that are highly recommended to review in case they appear in hard questions, these include Dijkstra shortest distance, Bellman-Ford, Prim algorithm on MSP, Fisher-Yates Shuffle, Quick Select, Graph Coloring, Interval Tree, and Segment Tree.",
      ],
      ["point_heading", "3. Behavioral"],
      [
         "description",
         "Never underestimate the importance of behavioral questions. Failure in this section is a failure in the interview regardless of your performance in the technical part. At Amazon, I saw many candidates (although they performed well in the technical part) got rejected solely because they didn’t provide acceptable scenarios in the behavioral section.",
      ],
      ["point_heading", "4. Mock Interviews"],
      [
         "description",
         "There are some mock interview platforms online. As mentioned before I used TechMockInterview.com and was quite happy with it. Before the onsite round, I booked a couple of more sessions with Google/Meta interviewers and received valuable feedback on my performance. It should be noted that their questions were more interesting and more challenging than what played out in my real-life interviews. They were so efficient that I felt more stressed in the mocks compared to the real interviews! This is why having mock interviews with friends or sessions with professional services are essential to assess your performance in real interview situations.",
      ],
      ["heading", "Negotiations and Final Offer"],
      ["img", "https://miro.medium.com/max/1100/1*8lKDJjoqRNfDTtffPo0-ng.jpeg"],
      [
         "description",
         "My personal goal was to get multiple offers from the companies I admired and wanted to work for. Multi-offer situation gives you more power to negotiate and choose your happy path more confidently. In the end, getting a good position is not all about the money. It’s about what makes you feel satisfied in the new role. If you turn down an offer just because another company offered you a higher salary, you might end up working in a role you don’t like. This could potentially lead to working in an environment that is frustrating and misaligned with your career goals. Think deeply about what you want (growth opportunity, work-life balance, learning new tech stacks, etc.) and negotiate until you reach a final decision that presents the closest representation of your expectations.",
      ],
   ],
};

function BlogItem() {
   const navigate = useNavigate();

   return (
      <VStack w={{ base: "100%", lg: "67%" }} h={"100%"} align={"stretch"}>
         <HStack
            px={12}
            py={3}
            borderBottom={"1px solid"}
            borderColor={"blackAlpha.200"}
            justify={"space-between"}
         >
            <HStack spacing={4}>
               <Image
                  src={blog.blog_on_img}
                  boxSize={30}
                  borderRadius={50}
                  border={"1px solid"}
                  borderColor={"blackAlpha.200"}
               />
               <HStack spacing={1}>
                  <Text fontSize={"sm"} color={"blackAlpha.600"}>
                     Published in
                  </Text>
                  <Text fontSize={"sm"} color={"blackAlpha.900"}>
                     {blog.blog_on}
                  </Text>
               </HStack>
            </HStack>
            <Button
               leftIcon={<BiArrowBack />}
               variant={"ghost"}
               borderRadius={30}
               fontWeight={"normal"}
               color={"blackAlpha.700"}
               _hover={{ bg: "blackAlpha.100" }}
               size={"sm"}
               onClick={() => navigate("/home")}
            >
               Go back
            </Button>
         </HStack>
         <BlogHeader {...blog} />
         <BlogContainer {...blog} />
      </VStack>
   );
}

export default BlogItem;
