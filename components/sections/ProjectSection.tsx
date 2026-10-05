"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import Mac from "@/public/assets/projects/macbook.png"
import MantineBoards from "@/public/assets/projects/mantine-boards.png"
import Travily from "@/public/assets/projects/travily.png"
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
              <div>
                Building interfaces that look polished, perform well, and
                support real product goals.
              </div>
              <div>
                Frontend engineering rooted in usability, clarity, and
                maintainability.
              </div>
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
    title: "Travily",
    description:
      "Travily is an AI-powered travel planning platform that helps users discover destinations, explore points of interest, and generate personalized itineraries and budgets in one seamless experience.",
    techStacks: ["ReactJS", "Javascript", "Node js"],
    image: Travily,
    githubURL: "https://github.com/devKono Agyemang/vscode-portfolio",
    liveURL: "https://travily-frontend.vercel.app/",
    githubApi: "https://api.github.com/repos/devKono Agyemang/vscode-portfolio",
  },

  {
    id: 2,
    title: "Macbook",
    description:
      "A refined and enhanced showcase of my work, designed to highlight my skills and projects with a sleek and modern interface.",
    techStacks: ["ReactJS", "GSAP", "ThreeJS"],
    image: Mac,
    githubURL: "https://github.com/devKono Agyemang/Kono Agyemang.dev",
    liveURL: "https://gsap-macbook-project.vercel.app/",
    githubApi:
      "https://api.github.com/repos/devKono Agyemang/Kono Agyemang.dev",
  },
]
