import MainButton from "@/components/MainButton";
import Image from "next/image";
import style from "./Home.module.css";
import { clashDisplay } from "./font";
import Glow from "@/components/Glow";
import Section from "@/components/Section";
import BgAesthetic from "@/components/BgAesthetic";
import { montserrat, unicaOne } from "./layout";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import FAQAccordion from "@/components/FAQAccordion";
import Timeline from "@/components/Timeline";
import Partners from "@/components/Partners";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Home landing */}
      <section className="relative mt-7 flex justify-center border-b border-neutral-500/50 text-white">
        {/* Background effects */}

        <div className="relative min-h-max ">
          <h2
            className={`${style.revolution} text-center text-lg font-[700] italic tracking-wide sm:text-2xl xl:text-right`}
          >
            <BgAesthetic src="/png/star-white.png" className="left-12 top-8" />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="right-96 top-20"
            />
            <Glow className="left-0 top-0 lg:left-20" />
            <Glow className="bottom-10 z-10 hidden xl:right-10 xl:top-20 xl:block" />
            <Glow className="top-30 -right-20 z-10 hidden xl:block" />
            Igniting a Revolution in HR Innovation
          </h2>
          <div className="relative mt-14 flex flex-col xl:flex-row">
            <BgAesthetic
              src="/png/star-neutral.png"
              className="bottom-40 left-96"
            />
            <div className="flex translate-y-[6%] flex-col items-center space-y-5 xl:items-start">
              <h1
                className={`${clashDisplay.className} text-flicker-in-glow relative max-w-sm text-center text-4xl font-[700] leading-tight sm:max-w-xl sm:text-6xl xl:text-left`}
              >
                getlinked Te
                <span className={`${style.cChar} relative`}>
                  c
                  <Image
                    src="/png/bulb.png"
                    alt="chain"
                    width={60}
                    height={60}
                    className="absolute bottom-8 left-2 sm:bottom-14 sm:left-5"
                  />
                </span>
                h Hackathon <span className="text-tertiary-100">1.0</span>
                <div className="-right-2 bottom-0 xs:absolute sm:-right-12 xl:right-2">
                  <Image
                    src="/png/chain.png"
                    alt=""
                    width={60}
                    height={60}
                    className="ml-2 inline h-[25px] w-[25px] sm:h-[60px] sm:w-[60px]"
                  />
                  <Image
                    src="/png/explosion.png"
                    alt=""
                    width={40}
                    height={40}
                    className="ml-2 inline h-[25px] w-[25px] sm:h-[60px] sm:w-[60px]"
                  />
                </div>
              </h1>
              <p className="max-w-sm translate-y-[-14%] text-center leading-relaxed xl:text-start">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <MainButton href="register">Register</MainButton>
              {/* Countdown */}
              <Countdown />
            </div>
            <div className="relative mt-14 xl:left-20 xl:mt-0">
              <Image
                src="/png/network-blue.png"
                alt=""
                width={450}
                height={450}
                className="absolute -top-2 left-14 z-10 h-[200px] w-[200px] xs:h-[300px] xs:w-[300px] sm:h-[450px] sm:w-[450px]"
              />
              <div className="relative mx-auto h-[15rem] w-[18rem] xs:mx-0 xs:h-[22rem] xs:w-[25rem] sm:h-[30rem] sm:w-[35rem] ">
                <Image
                  src="/png/man-smart-glasses.png"
                  alt="male with smart glasses"
                  fill
                  style={{ objectFit: "cover" }}
                  className="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction to getLinked */}
      <Section className="relative" id="overview">
        <div className="relative flex flex-col items-center gap-x-20 gap-y-8 md:flex-row">
          <div className="relative h-60 w-60 md:h-[30rem] md:w-[30rem]">
            <BgAesthetic
              src="/png/star-gradient.png"
              className="-left-10 top-32"
            />
            <BgAesthetic
              src="/png/arrow.png"
              className="-right-10 bottom-0 w-16"
            />
            <Image
              src="/png/big-idea.png"
              alt="Big idea"
              fill
              style={{ objectFit: "contain" }}
              className="vibrate-1"
            />
          </div>
          <div className="relative space-y-3">
            <BgAesthetic
              src="/png/star-purple.png"
              className="right-10 top-10"
            />
            <h3
              className={`${clashDisplay.className} max-w-sm text-center text-2xl md:text-left`}
            >
              Introduction to getlinked
              <span className="text-tertiary-100"> tech Hackthon 1.0</span>
            </h3>
            <p className="max-w-lg text-center text-sm leading-loose md:text-left">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
        </div>
      </Section>
      {/* Rules and Guidelines */}
      <Section className="relative">
        <div className="relative flex flex-col items-center gap-x-20 gap-y-8 md:flex-row">
          <div className="relative order-2 space-y-3 md:order-1">
            <Glow className="-left-10 -top-60 sm:left-20" />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="-top-5 left-44"
            />
            <BgAesthetic
              src="/png/star-white.png"
              className="-bottom-10 right-2"
            />
            <h3
              className={`${clashDisplay.className} text-center text-2xl md:max-w-[200px] md:text-left`}
            >
              Rules and
              <span className="text-tertiary-100"> Guidelines</span>
            </h3>
            <p className="max-w-lg text-center text-sm leading-loose md:text-left">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
          <div className="relative order-1 h-60 w-60 md:order-2 md:h-[30rem] md:w-[30rem]">
            <Glow className="-bottom-96 -right-80 md:bottom-10" />
            <Image
              src="/png/lady-with-book.png"
              alt="Lady with book"
              fill
              style={{ objectFit: "contain" }}
              className="vibrate-1"
            />
          </div>
        </div>
      </Section>
      {/* Judging Criteria and Key Attributes */}
      <Section className="relative">
        <div className="relative flex flex-col items-center gap-x-20 gap-y-8 md:flex-row">
          <div className="relative h-60 w-60 md:h-[30rem] md:w-[30rem]">
            <Glow className="-left-40 top-20 md:top-60 lg:-left-10" />
            <BgAesthetic src="/png/star-purple.png" className="left-24 top-0" />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="bottom-40 right-44"
            />
            <BgAesthetic
              src="/png/star-white.png"
              className="bottom-0 right-5"
            />
            <Image
              src="/png/two-people.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="vibrate-1"
            />
          </div>
          <div className="relative space-y-3">
            {/* <Glow className="-bottom-32 -right-40" /> */}
            <h3
              className={`${clashDisplay.className} text-center text-2xl md:max-w-[200px] md:text-left`}
            >
              Judging Criteria
              <span className="text-tertiary-100"> Key attributes</span>
            </h3>
            <ul className="max-w-lg space-y-5 text-sm">
              <li className="text-center leading-loose md:text-left">
                <span className="font-[700] text-tertiary-200">
                  Innovation and Creativity
                </span>
                : Evaluate the uniqueness and creativity of the solution.
                Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.
              </li>
              <li className="text-center leading-loose md:text-left">
                <span className="font-[700] text-tertiary-200">
                  Functionality
                </span>
                : Assess how well the solution works. Does it perform its
                intended functions effectively and without major issues? Judges
                would consider the completeness and robustness of the solution.
              </li>
              <li className="text-center leading-loose md:text-left">
                <span className="font-[700] text-tertiary-200">
                  Impact and Relevance
                </span>
                : Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </li>
              <li className="text-center leading-loose md:text-left">
                <span className="font-[700] text-tertiary-200">
                  Technical Complexity
                </span>
                : Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </li>
              <li className="text-center leading-loose md:text-left">
                <span className="font-[700] text-tertiary-200">
                  Adherence to Hackathon Rules
                </span>
                : Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </li>
            </ul>
            <MainButton className="mx-auto flex justify-center capitalize">
              Read more
            </MainButton>
          </div>
        </div>
      </Section>
      {/* Frequently Asked Questions */}
      <Section className="relative text-sm" id="faqs">
        <div className="relative flex flex-col items-center gap-x-5 gap-y-8 md:flex-row">
          <div className="relative space-y-12 md:flex-[2]">
            <div className="relative flex flex-col items-center space-y-3 md:items-start">
              <BgAesthetic
                src="/png/star-purple.png"
                className="-left-10 -top-10"
              />
              <BgAesthetic
                src="/png/star-neutral.png"
                className="-right-20 top-52"
              />
              <h3
                className={`${clashDisplay.className} text-center text-2xl md:max-w-[250px] md:text-left`}
              >
                Frequently Ask
                <span className="text-tertiary-100"> Question</span>
              </h3>
              <p className="max-w-md text-center text-sm leading-loose md:text-left">
                We got answers to the questions that you might want to ask about
                <span className="font-[700]"> getlinked Hackathon 1.0</span>
              </p>
            </div>
            <div className="">
              <FAQAccordion />
            </div>
          </div>
          <div className="relative h-60 w-60 md:h-[35rem] md:w-[20rem] md:flex-[3]">
            <Glow className="-right-40 -top-44" />

            <BgAesthetic
              src="/png/star-white.png"
              className="-bottom-10 right-20"
            />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="bottom-20 right-20"
            />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="left-20 top-40"
              width={10}
              height={10}
            />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="right-60 top-20"
              width={10}
              height={10}
            />
            <Image
              src="/png/guy-on-cloud.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="vibrate-1"
            />
          </div>
        </div>
      </Section>
      {/* Timeline */}
      <Section className="relative text-sm" id="timeline">
        <div className="relative flex flex-col items-center gap-y-14 sm:gap-y-32">
          <div className="relative space-y-3 text-center">
            <BgAesthetic
              src="/png/star-purple.png"
              className="-left-20 top-40"
            />
            <BgAesthetic
              src="/png/star-white.png"
              className="-right-44 top-[34rem]"
            />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="-left-52 top-[60rem]"
            />
            <h3 className={`${clashDisplay.className} text-center text-2xl`}>
              Timeline
            </h3>
            <p className="max-w-md text-center text-sm leading-loose">
              Here is a breakdown of the time we anticipate using for the
              upcoming event
            </p>
          </div>
          <div className="">
            <Timeline />
          </div>
        </div>
      </Section>
      {/* Prizes and Rewards */}
      <Section className="relative">
        <div className="relative flex flex-col items-center gap-x-20 gap-y-8 md:flex-row md:items-end md:max-[1090px]:gap-x-8">
          <div className="relative space-y-3 md:hidden">
            <h3
              className={`${clashDisplay.className} text-center text-2xl md:max-w-[200px] md:text-left`}
            >
              Prizes and
              <span className="text-tertiary-100"> Rewards</span>
            </h3>
            <p className="max-w-sm text-center text-sm leading-loose md:text-left">
              Highlights of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className="relative h-60 w-60 md:h-[30rem] md:w-[30rem]">
            <Glow className="-left-40 top-0 lg:left-20" />

            <BgAesthetic
              src="/png/star-gradient.png"
              className="-top-10 left-60"
            />
            <BgAesthetic
              src="/png/star-white.png"
              className="-bottom-10 left-60"
              width={10}
              height={10}
            />
            <Image
              src="/png/trophy.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="vibrate-1 md:max-[1090px]:scale-75"
            />
          </div>
          <div className="relative flex flex-col items-center md:space-y-20">
            <Glow className="-bottom-5 -right-80" />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="right-0 top-40"
            />
            <div className="hidden space-y-3 md:block">
              <h3
                className={`${clashDisplay.className} text-center text-2xl md:max-w-[200px] md:text-left`}
              >
                Prizes and
                <span className="text-tertiary-100"> Rewards</span>
              </h3>
              <p className="max-w-sm text-center text-sm leading-loose md:text-left md:max-[1090px]:max-w-[300px]">
                Highlights of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="-gap-2 relative flex flex-col min-[400px]:flex-row min-[400px]:max-sm:scale-75 md:max-[1090px]:right-20 md:max-[1090px]:scale-75">
              <BgAesthetic
                src="/png/star-neutral.png"
                className="-bottom-10 right-40"
              />
              <BgAesthetic
                src="/png/star-white.png"
                className="-right-20 top-20"
              />
              <BgAesthetic
                src="/png/star-white.png"
                className="-top-12 left-0"
              />
              <div className="relative order-2 mt-5 h-80 w-48 min-[400px]:order-1 min-[400px]:mt-14 min-[400px]:h-60 min-[400px]:w-32 md:mt-0">
                <Image
                  src="/png/2nd-position.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
              <div className="relative order-1 mt-14 h-80 w-48 min-[400px]:bottom-14 min-[400px]:order-2 md:mt-0">
                <Image
                  src="/png/1st-position.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
              <div className="relative order-3 mt-5 h-80 w-48 min-[400px]:order-3 min-[400px]:mt-14 min-[400px]:h-60 min-[400px]:w-32 md:mt-0">
                <Image
                  src="/png/3rd-position.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Partners and Sponsors */}
      <Section className="relative">
        <div className="relative flex flex-col items-center gap-y-8">
          <div className="relative space-y-3">
            <h3 className={`${clashDisplay.className} text-center text-2xl`}>
              Partners and Sponsors
            </h3>
            <p className="max-w-md text-center text-sm leading-loose">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <Partners />
        </div>
      </Section>
      {/* Privacy Policy and Terms */}
      <Section className="relative border-none text-sm">
        <div className="relative flex flex-col items-center gap-x-5 gap-y-8 md:flex-row">
          <div className="relative order-2 space-y-12 md:order-1">
            <div className="relative flex flex-col items-center space-y-3 md:items-start">
              <BgAesthetic
                src="/png/star-neutral.png"
                className="right-48 top-0"
              />
              <BgAesthetic
                src="/png/star-purple.png"
                className="right-2 top-32 md:top-20"
              />
              <h3
                className={`${clashDisplay.className} text-center text-2xl md:max-w-[250px] md:text-left`}
              >
                Privacy Policy and
                <span className="text-tertiary-100"> Terms</span>
              </h3>
              <small className="inline-block text-center text-white/75 md:text-left">
                Last updated on September 12, 2023
              </small>
              <p className="max-w-md text-center text-sm leading-loose md:text-left">
                Below are our privacy & policy, which outline a lot of goodies.
                it&apos;s our aim to always take of our participant
              </p>
            </div>
            <div className="relative max-w-[480px] space-y-6 rounded-md border border-tertiary-100 p-5 pb-10 xs:p-14">
              <Glow className="-right-[40rem] -top-[32rem]" />

              <Glow className="-bottom-10 -left-40 lg:-left-40" />

              <BgAesthetic
                src="/png/star-gradient.png"
                className="-left-20 bottom-48"
              />
              <p className="leading-loose">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className="leading-loose">
                <h3 className="text-base font-[700] text-tertiary-100">
                  Licensing Policy
                </h3>
                <p className="font-[700] leading-loose">
                  Here are terms of our Standard License:
                </p>
                <ul className="mt-4 space-y-5">
                  <li className="flex gap-2">
                    <FaCheck className="relative top-1.5 shrink-0 rounded-full bg-[#2DE100] p-1 text-white" />
                    <p>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <FaCheck className="relative top-1.5 shrink-0 rounded-full bg-[#2DE100] p-1 text-white" />
                    <p>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </li>
                </ul>
                <MainButton className="mx-auto mt-5 flex justify-center">
                  Read more
                </MainButton>
              </div>
            </div>
          </div>
          <div className="relative order-1 h-60 w-60 md:order-2 md:h-[45rem] md:w-[30rem]">
            <BgAesthetic
              src="/png/star-white.png"
              className="right-32 top-40"
              width={10}
              height={10}
            />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="bottom-20 right-0"
            />
            <BgAesthetic
              src="/png/star-white.png"
              className="bottom-32 left-20"
              width={10}
              height={10}
            />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="bottom-52 left-40"
              width={10}
              height={10}
            />
            <Image
              src="/png/guy-on-lock.png"
              alt="Guy sitting on padlock"
              fill
              style={{ objectFit: "contain" }}
              className="vibrate-1"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
