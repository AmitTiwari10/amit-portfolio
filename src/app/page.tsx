import Header from "@/components/Header";
import Image from "next/image";
import GithubDark from "../../public/logos/GitHubDark.svg";
import GmailDark from "../../public/logos/GmailDark.svg";
import MediumDark from "../../public/logos/MediumDark.svg";
import LinkedInDark from "../../public/logos/LinkedInDark.svg";
import ExternalLink from "../../public/logos/ExternalLink.svg";
import contact from "../../public/images/contact.svg";
import Intro from "../../public/images/Intro.svg";
import Academics from "@/components/Academics";
import Link from "next/link";
import { getProjects } from "@/actions/projectAction";

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects: any = await getProjects();
  return (
    <>
      <section id="#" className="h-screen w-full flex">
        <Header />
        <div className="md:inline-block hidden w-1/4 h-full bg-lightBlue">
          <div className="flex flex-col gap-6 justify-center h-full fixed px-4">
            <Link
              className="cursor-pointer"
              target="_blank"
              href="https://medium.com/@amit.tiwari.dev.it"
            >
              <Image src={MediumDark} alt="medium" width={38} height={38} />
            </Link>

            <Link
              className="cursor-pointer"
              target="_blank"
              href="mailto:amit.tiwari.dev.it@gmail.com"
            >
              <Image src={GmailDark} alt="gmail" width={38} height={38} />
            </Link>

            <Link
              className="cursor-pointer"
              target="_blank"
              href="https://github.com/AmitTiwari10"
            >
              <Image src={GithubDark} alt="github" width={33} height={33} />
            </Link>

            <Link
              className="cursor-pointer"
              target="_blank"
              href="https://www.linkedin.com/in/amit-tiwari-6799bb213/"
            >
              <Image src={LinkedInDark} alt="linkedin" width={38} height={38} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:px-16 md:mt-20 mt-10 sm:px-10 px-6">
          <div className="flex flex-col flex-1 text-medGrey items-start justify-center gap-4 lg:px-20">
            <p className="text-4xl lg:text-5xl font-medium">
              Hi, I am <span className="text-darkBlue">Amit, a Full Stack Developer</span>
            </p>

            <p className="text-xl lg:text-2xl lg:leading-[2.4rem] leading-[2rem] tracking-wide 2xl:w-11/12 w-full">
              I design, code and engineer software applications focusing on creating efficient scalable solutions while writing
              about code
            </p>

            <Link
              href="https://drive.google.com/file/d/1BKEXTWjhZtiaCvthpQTY04QTqNyLg6zL/view?usp=sharing"
              className="border border-darkBlue md:px-9 md:py-3 px-6 py-2 rounded-full text-xl text-darkBlue mt-6"
              target="_blank"
            >
              Resume
            </Link>
          </div>
          <Image className="lg:w-80 w-72" src={Intro} alt="github" />
        </div>
      </section>

      <></>
    </>
  );
}
