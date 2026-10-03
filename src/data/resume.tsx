import { Icons } from "@/components/icons";
import { HomeIcon, Code, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jomon Joy",
  initials: "JJ",
  url: "https://itsjomon.vercel.app",
  location: "Kerala, IN",
  locationLink: "https://www.google.com/maps/place/Kerala",
  description: "Computer Science graduate with a passion for Software Engineering.",
  summary: "I am a Computer Science graduate with a strong foundation in Java and full-stack web development. I enjoy building applications from the ground up to understand how they work beneath the surface. Looking to leverage my development skills in a collaborative team and continue growing as an engineer.",
  avatarUrl: "/user.png",
  skills: [
    "Java",
    "JavaScript",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "React",
    "Redux/Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/#projects", icon: Code, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/itsjomon/",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itsjomon/",
        icon: Icons.github,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: `#`,
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Company Name",
  //     href: "https://example.com",
  //     badges: [],
  //     location: "Location",
  //     title: "Job Title",
  //     logoUrl: "/logo.png",
  //     start: "Month Year",
  //     end: "Month Year",
  //     description: "Brief description of what you did, the technologies used, and the impact of your work.",
  //   }
  // ],
  education: [
    {
      school: "JCT CET",
      href: "https://jct.ac.in/",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      logoUrl: "/jct.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "St. Thomas HSS",
      href: "#",
      degree: "Higher Secondary Education (HSE), Computer Science",
      logoUrl: "/hss.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "St. Joseph's HS",
      href: "#",
      degree: "Secondary School Leaving Certificate (SSLC), General Studies",
      logoUrl: "/hs.jpeg",
      start: "2018",
      end: "2019",
    },
  ],
  // projects: [
  //   {
  //     title: "Project Name",
  //     href: "https://project-website.com",
  //     active: true,
  //     description: "Description of your project detailing what it does and how you built it.",
  //     technologies: [
  //       "Technology 1",
  //       "Technology 2",
  //       "Technology 3",
  //       "Technology 4",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://project-website.com",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/username/repository",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "/project.png",
  //     video: "",
  //   },
  // ],
  certifications: [
    {
      title: "ApnaCollege",
      description: "Covered data structures and full-stack development.",
      image: "/apnacollege.png",
      links: [
        {
          title: "DSA with Java",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1yMSyeuXIdUOxgyzDztAfkYErW8gd6k6sswsfmfXIbkK06/view?usp=sharing",
        },
        {
          title: "Full-stack web development with MERN",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/rMijhuew7jfr7rk63793pghyhdry280psmnarayn48dreik3y730e/view?usp=sharing",
        }
      ],
    },
    {
      title: "GeeksforGeeks",
      description: "Completed problem-solving and professional training.",
      image: "/gfg.png",
      links: [
        {
          title: "GfG 160",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://media.geeksforgeeks.org/courses/certificates/b7f6d443c4e9cda7fcf69c2159fb115a.pdf",
        },
        {
          title: "Professional Development",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://media.geeksforgeeks.org/courses/certificates/099058063413545fcbd19b4cf506be61.pdf",
        },
      ],
    },
    {
      title: "LinkedIn Learning",
      description: "Learned ethical and reliable AI coding workflows.",
      image: "/linkedin.png",
      links: [
        {
          title: "GitHub Copilot",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://www.linkedin.com/learning/certificates/ae20243195ef6820e82dcaf4765f44cecd25a9f9fac0650fc7707369633fd3e8",
        },
      ],
    },
    {
      title: "Edunet Foundation",
      description: "Completed full-stack Django training as part of the college curriculum through the Naan Mudhalvan program (TNSDC).",
      image: "/edunet.jpg",
      links: [
        {
          title: "Web Technologies (Full Stack with DJANGO)",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://nextgen.edunetworld.com/verify-tn-certificate/TNEP24_20273",
        },
      ]
    },
    {
      title: "Cisco Networking Academy",
      description: "Completed cybersecurity and networking training as part of the college curriculum through the Naan Mudhalvan program (TNSDC).",
      image: "/netacad.jpeg",
      links: [
        {
          title: "Cybersecurity Essentials",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1BukREFXalQOkFF2aKzzmRxxzUYtwkWL5d/view?usp=sharing",
        },
        {
          title: "Networking Essentials",
          icon: <Icons.cert className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1TyGqRhLnMfetAt_BcgQ1hFjwl7V7InX/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
