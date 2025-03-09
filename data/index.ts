import { profile } from "console";


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clear communication and collaboration. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "flex justify-center items-center text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "open for worlwide opportunities",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a password encryption system using steganography.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "form management system",
    short_title: "FMS",
    des: "be able to make a lottery, visualize data, generate files and more",
    img: "/FMS.png",
    iconLists: ["/next.svg", "/tail.svg", "js.svg", "express.png", "/Mongodb.svg", "vercel.png", "/render.png"],
    link: "https://bs-fse-2025.vercel.app/",
    git: "https://github.com/idanidan29/BS-FSE-2025-Team9",
    tech: [
      {
        id: 1,
        name: "Next.js",
        designation: "used for the frontend",
        image: "/next.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        designation: "used for styling",
        image: "/tail.svg",
      },
      {
        id: 3,
        name: "Javascript",
        designation: "used all around",
        image: "/js.svg",
      },
      {
        id: 4,
        name: "Express",
        designation: "for API",
        image: "/express.png",
      },
      {
        id: 5,
        name: "MongoDB",
        designation: "Database",
        image: "/Mongodb.svg",
      },
      {
        id: 6,
        name: "Vercel",
        designation: "used for frontend deployment",
        image: "/vercel.png",
      },
      {
        id: 7,
        name: "Render",
        designation: "used for backend deployment",
        image: "/render.png",
      },
    ],
  },
  {
    id: 2,
    title: "Password encryption system",
    short_title: "PES",
    des: "A system that encrypts passwords using steganography",
    img: "/PES.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/aceternity.png", "/vercel.png"],
    link: "https://lockpixel.vercel.app/",
    git: "https://github.com/idanidan29/steganography",
    tech: [{
      id: 1,
      name: "Next.js",
      designation: "for frontend",
      image: "/next.svg",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      designation: "for styling",
      image: "/tail.svg",
    },
    {
      id: 3,
      name: "Typescript",
      designation: "for frontend",
      image: "/ts.svg",
    },
    {
      id: 4,
      name: "Acternity",
      designation: "frontend library",
      image: "/aceternity.png",
    },
    {
      id: 5,
      name: "Vercel",
      designation: "frontend deployment",
      image: "/vercel.png",
    },
    {
      id: 6,
      name: "Flask",
      designation: "for API",
      image: "/flask.png",
    },
    {
      id: 7,
      name: "python",
      designation: "for backend",
      image: "/python.png",
    }
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Idan Levy, a former combat commander in the 47th Yalvia Battalion, demonstrated exceptional leadership, professionalism, and dedication during his military service. Over 21 months, he successfully commanded teams, handled high-pressure situations, and fulfilled responsibilities often beyond his rank. His adaptability, problem-solving skills, and commitment to excellence make him well-suited for challenging environments.",
    name: "Ariel Barbie",
    title: "Lieutenant Colonel and Commander of the Battalion 47 Battalion",
    profile: "/barbie.png"
  },
  {
    quote:
      "I highly recommend Idan Levi for any opportunity in development. During his Fullstack training at Sela College, he consistently demonstrated dedication, a strong passion for learning, and enthusiasm for both backend and frontend technologies. His motivation and skills make him a strong candidate for any role or training in the field.",
    name: "Sigal Nuriel Garoussi",
    title: "Vice President ,Director of Sela College",
    profile: "/sigal.png"
  },

];

export const companies = [
  {
    id: 1,
    name: "sela",
    img: "/",
    nameImg: "/sela.png",
  },
  {
    id: 2,
    name: "test",
    img: "/",
    nameImg: "/SCE_logo.png",
  },
  {
    id: 3,
    name: "test",
    img: "/",
    nameImg: "/idf.png",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Sela Fullstack Course",
    desc: "10 months of intensive fullstack development training, learning the latest technologies, tools, and methodologies.",
    className: "md:col-span-2",
    thumbnail: "/blueStar1.png",
  },
  {
    id: 2,
    title: "Hackathon Mentor",
    desc: "Mentored groups in a 48-hour hackathon, guiding them through the development process. and used as advisor",
    className: "md:col-span-2",
    thumbnail: "/blueStar2.png",
  },
  {
    id: 3,
    title: "Software Engineering",
    desc: "Currently pursuing a degree in software engineering, focusing on building a strong foundation in programming, system design, and modern software development practices.",
    className: "md:col-span-2",
    thumbnail: "/blueStar4.png",
  },
  {
    id: 4,
    title: "Handful of Projects",
    desc: "Developed multiple projects focusing on web development, backend systems, and database integration, with attention to performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/blueStar3.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/idanidan29",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/idan-levi-7a8506242",
  },
];

export const cards = [
  {
    title: "Forest Adventure",
    src: "",
  },
  {
    title: "Valley of life",
    src: "",
  },];