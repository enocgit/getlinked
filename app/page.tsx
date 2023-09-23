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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Home landing */}
      <section className="relative flex justify-center text-white border-b mt-7 border-neutral-500/50">
        {/* Background effects */}

        <div className="relative min-h-max ">
          <h2
            className={`${style.revolution} text-lg text-center xl:text-right italic font-[700] tracking-wide sm:text-2xl`}
          >
            <BgAesthetic src="/svg/star-white.svg" className="left-12 top-8" />
            <BgAesthetic
              src="/svg/star-neutral.svg"
              className="right-96 top-20"
            />
            <Glow className="top-0 -left-20 lg:left-20" />
            <Glow className="z-10 hidden bottom-10 xl:right-10 xl:top-20 xl:block" />
            <Glow className="z-10 hidden -right-20 top-30 opacity-20 xl:block" />
            Igniting a Revolution in HR Innovation
          </h2>
          <div className="relative flex flex-col mt-14 xl:flex-row">
            <BgAesthetic
              src="/svg/star-neutral.svg"
              className="left-96 bottom-40"
            />
            <div className="flex flex-col items-center space-y-5 translate-y-[6%] xl:items-start">
              <h1
                className={`${clashDisplay.className} relative text-4xl sm:text-6xl font-[700] max-w-sm sm:max-w-xl leading-tight text-center xl:text-left`}
              >
                getlinked Te
                <span className={`${style.cChar} relative`}>
                  c
                  <Image
                    src="/svg/bulb.svg"
                    alt="chain"
                    width={60}
                    height={60}
                    className="absolute left-2 bottom-8 sm:bottom-14 sm:left-5"
                  />
                </span>
                h Hackathon <span className="text-tertiary-100">1.0</span>
                <div className="absolute bottom-0 -right-2 sm:-right-12 xl:right-2">
                  <Image
                    src="/svg/chain.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="inline ml-2 w-[25px] h-[25px] sm:w-[60px] sm:h-[60px]"
                  />
                  <Image
                    src="/svg/explosion.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="inline ml-2 w-[25px] h-[25px] sm:w-[60px] sm:h-[60px]"
                  />
                </div>
              </h1>
              <p className="max-w-sm translate-y-[-14%] leading-relaxed text-center xl:text-start">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <MainButton>Register</MainButton>
              {/* Countdown */}
              <div
                className={`${unicaOne.className} text-5xl mt-10 translate-y-[60%] space-x-5`}
              >
                <span>
                  00<span className="text-xs">H</span>
                </span>
                <span>
                  00<span className="text-xs">M</span>
                </span>
                <span>
                  00<span className="text-xs">S</span>
                </span>
              </div>
            </div>
            <div className="relative mt-14 xl:left-20 xl:mt-0">
              <Image
                src="/png/network-blue.png"
                alt=""
                width={450}
                height={450}
                // style={{objectFit: "contain"}}
                className="absolute left-14 z-10 -top-2 h-[200px] w-[200px] xs:h-[300px] xs:w-[300px] sm:h-[450px] sm:w-[450px]"
              />
              <div className="mx-auto xs:mx-0 w-[18rem] h-[15rem] xs:w-[25rem] xs:h-[22rem] sm:w-[35rem] sm:h-[30rem] relative ">
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
      <Section className="relative">
        <div className="relative flex flex-col items-center gap-y-8 gap-x-20 md:flex-row">
          <div className="relative w-60 h-60 md:w-[30rem] md:h-[30rem]">
            {/* <Glow className="bottom-0 -left-40 lg:left-60 opacity-20" /> */}
            <BgAesthetic
              src="/svg/star-gradient.svg"
              className="-left-10 top-32"
            />
            <BgAesthetic
              src="/png/arrow.png"
              className="bottom-0 w-16 -right-10"
            />
            <Image
              src="/svg/big-idea.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative space-y-3">
            <BgAesthetic
              src="/svg/star-purple.svg"
              className="right-10 top-10"
            />
            <h3
              className={`${clashDisplay.className} text-2xl max-w-sm text-center md:text-left`}
            >
              Introduction to getlinked
              <span className="text-tertiary-100"> tech Hackthon 1.0</span>
            </h3>
            <p className="max-w-lg text-sm leading-loose text-center md:text-left">
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
        <div className="relative flex flex-col items-center gap-y-8 gap-x-20 md:flex-row">
          <div className="relative order-2 space-y-3 md:order-1">
            <Glow className="-left-40 -top-60 lg:left-20" />
            <BgAesthetic
              src="/svg/star-neutral.svg"
              className="left-44 -top-5"
            />
            <BgAesthetic
              src="/svg/star-white.svg"
              className="-bottom-10 right-2"
            />
            <h3
              className={`${clashDisplay.className} text-2xl md:max-w-[200px] text-center md:text-left`}
            >
              Rules and
              <span className="text-tertiary-100"> Guidelines</span>
            </h3>
            <p className="max-w-lg text-sm leading-loose text-center md:text-left">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
          <div className="relative w-60 h-60 md:w-[30rem] md:h-[30rem] order-1 md:order-2">
            <Glow className="-right-80 -bottom-96 md:bottom-10" />
            <Image
              src="/svg/lady-with-book.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Section>
      {/* Judging Criteria and Key Attributes */}
      <Section className="relative">
        <div className="relative flex flex-col items-center gap-y-8 gap-x-20 md:flex-row">
          <div className="relative w-60 h-60 md:w-[30rem] md:h-[30rem]">
            <Glow className="-left-40 top-20 md:top-60 lg:-left-10" />
            <BgAesthetic src="/svg/star-purple.svg" className="top-0 left-24" />
            <BgAesthetic
              src="/svg/star-neutral.svg"
              className="right-44 bottom-40"
            />
            <BgAesthetic
              src="/svg/star-white.svg"
              className="bottom-0 right-5"
            />
            <Image
              src="/svg/two-people.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative space-y-3">
            <Glow className="-right-40 -bottom-32" />
            <h3
              className={`${clashDisplay.className} text-2xl md:max-w-[200px] text-center md:text-left`}
            >
              Judging Criteria
              <span className="text-tertiary-100"> Key attributes</span>
            </h3>
            <ul className="max-w-lg space-y-5 text-sm">
              <li className="leading-loose text-center md:text-left">
                <span className="text-tertiary-200 font-[700]">
                  Innovation and Creativity
                </span>
                : Evaluate the uniqueness and creativity of the solution.
                Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.
              </li>
              <li className="leading-loose text-center md:text-left">
                <span className="text-tertiary-200 font-[700]">
                  Functionality
                </span>
                : Assess how well the solution works. Does it perform its
                intended functions effectively and without major issues? Judges
                would consider the completeness and robustness of the solution.
              </li>
              <li className="leading-loose text-center md:text-left">
                <span className="text-tertiary-200 font-[700]">
                  Impact and Relevance
                </span>
                : Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </li>
              <li className="leading-loose text-center md:text-left">
                <span className="text-tertiary-200 font-[700]">
                  Technical Complexity
                </span>
                : Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </li>
              <li className="leading-loose text-center md:text-left">
                <span className="text-tertiary-200 font-[700]">
                  Adherence to Hackathon Rules
                </span>
                : Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </li>
            </ul>
            <MainButton className="flex justify-center mx-auto capitalize">
              Read more
            </MainButton>
          </div>
        </div>
      </Section>
      {/* Frequently Asked Questions */}
      <Section className="relative text-sm">
        <div className="relative flex flex-col items-center gap-y-8 gap-x-5 md:flex-row">
          <div className="relative md:flex-[2] space-y-12">
            <div className="relative flex flex-col items-center space-y-3 md:items-start">
              <BgAesthetic
                src="/svg/star-purple.svg"
                className="-top-10 -left-10"
              />
              <BgAesthetic
                src="/svg/star-neutral.svg"
                className="top-52 -right-20"
              />
              <h3
                className={`${clashDisplay.className} text-2xl md:max-w-[250px] text-center md:text-left`}
              >
                Frequently Ask
                <span className="text-tertiary-100"> Question</span>
              </h3>
              <p className="max-w-md text-sm leading-loose text-center md:text-left">
                We got answers to the questions that you might want to ask about
                <span className="font-[700]"> getlinked Hackathon 1.0</span>
              </p>
            </div>
            <div className="">
                <FAQAccordion />
            </div>
          </div>
          <div className="relative w-60 h-60 md:w-[20rem] md:h-[35rem] md:flex-[3]">
            <BgAesthetic
              src="/svg/star-white.svg"
              className="-bottom-10 right-20"
            />
            <BgAesthetic
              src="/svg/star-neutral.svg"
              className="right-20 bottom-20"
            />
            <BgAesthetic
              src="/svg/star-gradient.svg"
              className="top-40 left-20"
              width={10}
              height={10}
            />
            <BgAesthetic
              src="/svg/star-gradient.svg"
              className="top-20 right-60"
              width={10}
              height={10}
            />
            <Image
              src="/svg/guy-on-cloud.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Section>
      {/* Prizes and Rewards */}
      <Section className="relative">
        <div className="relative flex flex-col items-center md:items-end gap-y-8 gap-x-20 md:max-[1090px]:gap-x-8 md:flex-row">
          <div className="relative space-y-3 md:hidden">
            <h3
              className={`${clashDisplay.className} text-2xl md:max-w-[200px] text-center md:text-left`}
            >
              Prizes and
              <span className="text-tertiary-100"> Rewards</span>
            </h3>
            <p className="max-w-sm text-sm leading-loose text-center md:text-left">
              Highlights of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className="relative w-60 h-60 md:w-[30rem] md:h-[30rem]">
            <Glow className="top-0 -left-40 lg:left-20" />

            <BgAesthetic
              src="/svg/star-gradient.svg"
              className="left-60 -top-10"
            />
            <BgAesthetic
              src="/svg/star-white.svg"
              className="left-60 -bottom-10"
              width={10}
              height={10}
            />
            <Image
              src="/svg/trophy.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="md:max-[1090px]:scale-75"
            />
          </div>
          <div className="relative flex flex-col items-center md:space-y-20">
            <Glow className="-right-80 -bottom-5" />
            <BgAesthetic
              src="/svg/star-gradient.svg"
              className="right-0 top-40"
            />
            <div className="hidden space-y-3 md:block">
              <h3
                className={`${clashDisplay.className} text-2xl md:max-w-[200px] text-center md:text-left`}
              >
                Prizes and
                <span className="text-tertiary-100"> Rewards</span>
              </h3>
              <p className="max-w-sm text-sm leading-loose text-center md:text-left md:max-[1090px]:max-w-[300px]">
                Highlights of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="relative flex flex-col min-[400px]:flex-row min-[400px]:max-sm:scale-75 -gap-2 md:max-[1090px]:scale-75 md:max-[1090px]:right-20">
              <BgAesthetic
                src="/svg/star-neutral.svg"
                className="right-40 -bottom-10"
              />
              <BgAesthetic
                src="/svg/star-white.svg"
                className="-right-20 top-20"
              />
              <BgAesthetic
                src="/svg/star-white.svg"
                className="left-0 -top-12"
              />
              <div className="relative w-48 min-[400px]:w-32 mt-5 min-[400px]:mt-14 h-80 min-[400px]:h-60 md:mt-0 order-2 min-[400px]:order-1">
                <Image
                  src="/svg/2nd-position.svg"
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
              <div className="relative w-48 mt-14 h-80 min-[400px]:bottom-14 md:mt-0 order-1 min-[400px]:order-2">
                <Image
                  src="/svg/1st-position.svg"
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
              <div className="relative w-48 h-80 min-[400px]:w-32 mt-5 min-[400px]:mt-14 min-[400px]:h-60 md:mt-0 order-3 min-[400px]:order-3">
                <Image
                  src="/svg/3rd-position.svg"
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
            <h3 className={`${clashDisplay.className} text-2xl text-center`}>
              Partners and Sponsors
            </h3>
            <p className="max-w-md text-sm leading-loose text-center">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <div className="relative w-60 h-60 md:w-[30rem] md:h-[30rem]">
            <Glow className="-right-40 -bottom-32" />
            <Glow className="-left-40 top-20 md:top-60 lg:-left-10" />
            <BgAesthetic src="/svg/star-purple.svg" className="top-0 left-24" />
            <BgAesthetic
              src="/svg/star-neutral.svg"
              className="right-44 bottom-40"
            />
            <BgAesthetic
              src="/svg/star-white.svg"
              className="bottom-0 right-5"
            />
            <div className="flex items-center justify-center mt-2">
              <div className="grid border border-tertiary-100">
                <div className="relative w-32 h-20">
                  <Image
                    src="/svg/liberty-assured.svg"
                    alt="liberty assured"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Privacy Policy and Terms */}
      <Section className="relative text-sm border-none">
        <div className="relative flex flex-col items-center gap-y-8 gap-x-5 md:flex-row">
          <div className="relative order-2 space-y-12 md:order-1">
            <div className="relative flex flex-col items-center space-y-3 md:items-start">
              <BgAesthetic
                src="/svg/star-neutral.svg"
                className="top-0 right-48"
              />
              <BgAesthetic
                src="/svg/star-purple.svg"
                className="top-20 right-2"
              />
              <h3
                className={`${clashDisplay.className} text-2xl md:max-w-[250px] text-center md:text-left`}
              >
                Privacy Policy and
                <span className="text-tertiary-100"> Terms</span>
              </h3>
              <small className="inline-block text-center text-white/75 md:text-left">
                Last updated on September 12, 2023
              </small>
              <p className="max-w-md text-sm leading-loose text-center md:text-left">
                Below are our privacy & policy, which outline a lot of goodies.
                it&apos;s our aim to always take of our participant
              </p>
            </div>
            <div className="relative max-w-[480px] border rounded-md p-5 pb-10 xs:p-14 border-tertiary-100 space-y-6">
              <Glow className="-bottom-10 -left-40 lg:-left-40" />
              <BgAesthetic
                src="/svg/star-gradient.svg"
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
                <h3 className="text-base text-tertiary-100 font-[700]">
                  Licensing Policy
                </h3>
                <p className="leading-loose font-[700]">
                  Here are terms of our Standard License:
                </p>
                <ul className="mt-4 space-y-5">
                  <li className="flex gap-2">
                    <FaCheck className="relative top-1.5 shrink-0 rounded-full p-1 text-white bg-[#2DE100]" />
                    <p>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <FaCheck className="relative top-1.5 shrink-0 rounded-full p-1 text-white bg-[#2DE100]" />
                    <p>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </li>
                </ul>
                <MainButton className="flex justify-center mx-auto mt-5">
                  Read more
                </MainButton>
              </div>
            </div>
          </div>
          <div className="relative w-60 h-60 md:w-[30rem] md:h-[45rem] order-1 md:order-2">
            <BgAesthetic
              src="/svg/star-white.svg"
              className="right-32 top-40"
              width={10}
              height={10}
            />
            <BgAesthetic
              src="/svg/star-neutral.svg"
              className="right-0 bottom-20"
            />
            <BgAesthetic
              src="/svg/star-white.svg"
              className="left-20 bottom-32"
              width={10}
              height={10}
            />
            <BgAesthetic
              src="/svg/star-gradient.svg"
              className="left-40 bottom-52"
              width={10}
              height={10}
            />
            <Image
              src="/svg/guy-on-lock.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
