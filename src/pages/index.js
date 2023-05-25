import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                src={profilePic}
                alt="Ahmed Fathy"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={`Ahmed Fathy`}
                className="!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                "
              />
              <AnimatedText
                text={`Data scientist`}
                className="!text-5xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                "
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a Data scientist, I am a skilled professional with
                expertise in designing and implementing software solutions that
                leverage the power of machine learning to solve complex
                problems. I have experience with a range of ML techniques,
                including supervised and unsupervised learning, deep learning,
                reinforcement learning, and natural language processing. I am
                skilled at developing scalable, reliable, and maintainable
                software systems using a range of programming languages and
                frameworks. Overall, my skills as a software and ML engineer
                enable me to design and develop cutting-edge software solutions
                that drive business value.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={`/resume.pdf`}
                  target="_blank"
                  className={`flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  `}
                  download={true}
                >
                  Resume <LinkArrow className={`w-6 ml-1`} />
                </Link>
                <Link
                  href={`mailto:ahmed.fathy1445@gmail.com`}
                  target="_blank"
                  className={`ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Ahmed Fathy" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
