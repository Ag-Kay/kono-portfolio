"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import Loopy from "@/public/assets/projects/loopy.png"
import MantineBoards from "@/public/assets/projects/mantine-boards.png"
import MiroClone from "@/public/assets/projects/miro-clone.png"
import MotionScape from "@/public/assets/projects/motion-scape.png"
import PortfolioV2 from "@/public/assets/projects/portfolio-v2.png"
import TheRealHotels from "@/public/assets/projects/therealhotels.png"
import ValentinCarousel from "@/public/assets/projects/valentin-carousel.png"
import VSCode from "@/public/assets/projects/vscode.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Selected Work
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation md:w-full text-center font-medium flex flex-col items-center">
              <div>Building interfaces that look polished, perform well, and support real product goals.</div>
              <div>Frontend engineering rooted in usability, clarity, and maintainability.</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Explore more of my work in{" "}
          <Link
            href="https://github.com/Kono1889"
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor navlink dark:hover:text-black"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
  liveURL: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "VSCode Portfolio",
    description:
      "My portfolio website in vscode version developed with React and TypeScript.",
    techStacks: ["ReactJS", "TypeScript"],
    image: VSCode,
    githubURL: "https://github.com/devKono Agyemang/vscode-portfolio",
    liveURL: "https://devKono Agyemang-v1.vercel.app",
    githubApi: "https://api.github.com/repos/devKono Agyemang/vscode-portfolio",
  },

  {
    id: 2,
    title: "Portfolio V2",
    description:
      "A refined and enhanced showcase of my work, designed to highlight my skills and projects with a sleek and modern interface.",
    techStacks: ["NextJS", "ShadnUI", "GSAP"],
    image: PortfolioV2,
    githubURL: "https://github.com/devKono Agyemang/Kono Agyemang.dev",
    liveURL: "https://devKono Agyemang.vercel.app",
    githubApi: "https://api.github.com/repos/devKono Agyemang/Kono Agyemang.dev",
  },
  {
    id: 3,
    title: "Mantine Boards",
    description:
      "Responsive Dashboards, perfect for admin dashboards, analytics platforms, or any project that requires a clean, modern interface.",
    techStacks: ["RemixJS", "MantineUI"],
    image: MantineBoards,
    githubURL: "https://github.com/devKono Agyemang/mantine-boards",
    liveURL: "https://mantine-boards.vercel.app",
    githubApi: "https://api.github.com/repos/devKono Agyemang/mantine-boards",
  },
  {
    id: 4,
    title: "Motion Scape",
    description:
      "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design.",
    techStacks: ["NextJS", "GSAP", "TypeScript"],
    image: MotionScape,
    githubURL: "https://github.com/devKono Agyemang/motion-scape",
    liveURL: "https://motion-gsap.vercel.app",
    githubApi: "https://api.github.com/repos/devKono Agyemang/motion-scape",
  },
  {
    id: 5,
    title: "Loopy",
    description:
      "Loopy is a modern video conferencing app designed for seamless virtual meetings with real-time video, audio, and chat features. Built for speed, simplicity, and collaboration.",
    techStacks: ["ReactJs", "WebRTC", "Mediasoup", "Socket.io"],
    image: Loopy,
    githubURL: "https://github.com/devKono Agyemang/loopy",
    liveURL: "https://loopy-ashen.vercel.app/",
    githubApi: "https://api.github.com/repos/devKono Agyemang/loopy",
  },
  {
    id: 6,
    title: "Valentin Carousel",
    description:
      "An animated carousel inspired by Valentin Awward Winning Website",
    techStacks: ["ReactJs", "GSAP"],
    image: ValentinCarousel,
    githubURL: "https://github.com/devKono Agyemang/valentin-carousel",
    liveURL: "https://valentin-carousel.vercel.app",
    githubApi: "https://api.github.com/repos/devKono Agyemang/valentin-carousel",
  },
  {
    id: 7,
    title: "TheRealHotels",
    description:
      "A Landing Website Inspired by awwarded website,therealhotels.com",
    techStacks: ["ReactJs", "GSAP"],
    image: TheRealHotels,
    githubURL: "https://github.com/devKono Agyemang/therealhotels",
    liveURL: "https://therealhotels.vercel.app",
    githubApi: "https://api.github.com/repos/devKono Agyemang/therealhotels",
  },
  {
    id: 8,
    title: "Miro Clone",
    description:
      "Enjoy a wide range of brushes, colors, and effects, along with layers, undo/redo functionality, and easy sharing options.",
    techStacks: ["NextJS", "ShadnUI", "Convex", "Clerk", "Liveblocks"],
    image: MiroClone,
    githubURL: "https://github.com/devKono Agyemang/realtime-miro-clone",
    liveURL: "https://realtime-miro-clone.vercel.app",
    githubApi: "https://api.github.com/repos/devKono Agyemang/realtime-miro-clone",
  },
]
