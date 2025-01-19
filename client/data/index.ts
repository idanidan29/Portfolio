import { u } from "framer-motion/client";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "test ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "maybe a earth animation ",
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
      title: "Currently building a JS finance tracking app system",
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
      des: "be able to make a lottery, visualize data, generate files and more",
      img: "/ParkingP.png",
      iconLists: ["/next.svg", "/tail.svg", "js.svg", "/express.png", "/Mongodb.png","/vercel.png","/render.png"],
      link: "https://bs-fse-2025.vercel.app",
    },
    {
      id: 2,
      title: "this Portfolio website", 
      des: "A website to showcase my work and skills",
      img: "/Portfolio.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/aceternity.png","/vercel.png"],
      link: "https://portfolio-idan-levi-website.vercel.app/",
    }
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

  export const testimonials = [
    {
      quote:
        "recomandation 1",
      name: "test",
      title: "test",
    },
    {
      quote:
        "recomandation 2",
      name: "test",
      title: "test",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "test",
      img: "/",
      nameImg: "/",
    },
    {
      id: 2,
      name: "test",
      img: "/",
      nameImg: "/",
    },
    {
      id: 3,
      name: "test",
      img: "/",
      nameImg: "/",
    },
  ];