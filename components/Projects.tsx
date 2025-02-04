import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { mapLinear } from "three/src/math/MathUtils.js";
import { projects } from "@/data";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FaGithub, FaGithubAlt } from "react-icons/fa6";

const Projects = () => {
    return (
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10" id="projects">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">Recent Projects</span>
            </h1>
            {projects.map((item) => (
                <CardContainer className="inter-var" key={item.id}>
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-200 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {item.title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            {item.des}
                        </CardItem>


                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src={item.img}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />


                        </CardItem>
                        <CardItem translateZ="100" className="flex gap-2 mt-4 items-center">
                            <AnimatedTooltip items={item.tech} />
                        </CardItem>

                        <div className="flex justify-between items-center mt-4">
                            <CardItem
                                translateZ={40}
                                as="button"
                                onClick={() => window.open(item.link)}
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Live Site →
                            </CardItem>
                            <CardItem
                                translateZ={40}
                                as="button"
                                onClick={() => window.open(item.git)}
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Git Code<FaGithub className="inline-block ml-2" />
                            </CardItem>
                        </div>
                    </CardBody>

                </CardContainer>
            ))}
        </div>

    );
};
export default Projects;