//@ts-nocheck

"use client";
import BgAesthetic from "@/components/BgAesthetic";
import Glow from "@/components/Glow";
import Section from "@/components/Section";
import Image from "next/image";
import React, { useState } from "react";
import { clashDisplay } from "../font";
import Link from "next/link";
import MainButton from "@/components/MainButton";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { baseUrl } from "@/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { FaSmileWink, FaThumbsUp, FaTimes } from "react-icons/fa";

const schema = z.object({
  first_name: z.string().min(1, { message: "Please enter first name" }),
  phone_number: z
    .string()
    .max(13, { message: "Please enter a valid phone number" })
    .min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message field should not be empty" }),
});

type FormValues = {
  first_name: string;
  email: string;
  phone_number: string;
  message: string;
};

const ContactPage = (props: Props) => {
  const [submitState, setSubmitState] = useState<string>("submit");

  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitState("submitting...");

    try {
      const res = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast("Message wasn't sent", {
          icon: <FaTimes className="text-red-400" />,
        });
        setSubmitState("submit");
        console.log("Could not submit form");
        return "Could not submit form";
      }
      const createdData = await res.json();
      if (createdData) {
        toast("Thanks for reaching out", {
          icon: <FaSmileWink className="text-yellow-400" />,
        });
        reset();
        setSubmitState("submit");
      }
    } catch (error) {
      toast("Message wasn't sent", {
        icon: <FaTimes className="text-red-400" />,
      });
      setSubmitState("submit");
      console.log(error);
      return error;
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { backgroundColor: "#100B20", color: "#FFF" },
        }}
      />
      <Section className="relative overflow-x-hidden pt-32 text-white md:py-32">
        <div className="relative items-center gap-x-40 md:flex md:gap-y-8 md:max-lg:gap-x-20">
          <div className="relative order-2 hidden space-y-3 md:order-1 md:block">
            <Glow className="vibrate-1 -left-40 top-0 opacity-30 sm:-left-48" />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="-top-20 left-0"
            />
            <h3
              className={`${clashDisplay.className} text-center text-2xl font-[700] text-tertiary-100 md:max-w-[200px] md:text-left`}
            >
              Get in touch
            </h3>
            <div className="space-y-3">
              <p className="max-w-[150px] leading-relaxed">
                Contact Information
              </p>
              <p className="max-w-[150px] leading-relaxed">
                27,Alara Street Yaba 100012 Lagos State
              </p>
              <p>
                Call Us: <Link href="tel: 07076981819">07076981819</Link>
              </p>
              <p className="">
                we are open from Monday-Friday
                <br />
                <span>08:00am - 05:00pm</span>
              </p>
              <p className="text-tertiary-100">Share on</p>
              <span className="flex gap-3">
                <Link href="" target="_blank">
                  <Image
                    src="/svg/instagram.svg"
                    alt="instagram"
                    width={14}
                    height={14}
                    className="shrink-0"
                  />
                </Link>
                <Link href="" target="_blank">
                  <Image
                    src="/svg/xtwitter.svg"
                    alt="xtwitter"
                    width={14}
                    height={14}
                    className="shrink-0"
                  />
                </Link>
                <Link href="" target="_blank">
                  <Image
                    src="/svg/facebook.svg"
                    alt="facebook"
                    width={8}
                    height={8}
                    className="shrink-0"
                  />
                </Link>
                <Link href="" target="_blank">
                  <Image
                    src="/svg/linkedin.svg"
                    alt="linkedin"
                    width={14}
                    height={14}
                    className="shrink-0"
                  />
                </Link>
              </span>
            </div>
          </div>
          <div className="relative order-1 w-full max-w-[30rem] rounded-md bg-transparent md:order-2 md:bg-white/3 md:p-14 md:shadow-md">
            <BgAesthetic
              src="/png/star-white.png"
              className="-right-6 bottom-40 h-5 w-5 md:-right-20 md:bottom-0 md:h-[initial] md:w-[initial]"
            />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="bottom-20 left-0 h-5 w-5 md:-left-2 md:bottom-40 md:h-[initial] md:w-[initial]"
            />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="right-0 top-10 h-5 w-5 md:-top-20 md:right-5 md:h-[initial] md:w-[initial]"
            />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="-top-8 right-32 h-5 w-5 md:hidden"
            />
            <Glow className="vibrate-1 bottom-[28rem] right-60 opacity-40 md:-right-40 md:bottom-0" />
            <Image
              src="/svg/back.svg"
              alt="close menu"
              width={24}
              height={24}
              className="relative bottom-14 md:hidden"
              onClick={() => router.back()}
            />
            <h3 className={`${clashDisplay.className} text-tertiary-100`}>
              Questions or need assistance
            </h3>
            <h3 className={`${clashDisplay.className} text-tertiary-100`}>
              Let us know about it!
            </h3>
            <p className="mt-5 text-xs leading-loose md:hidden">
              Email us below to any question related to our event
            </p>
            <form
              action=""
              className="mt-5 space-y-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register("first_name")}
                type="text"
                name="first_name"
                placeholder="First Name"
                className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white"
              />
              <small className="text-xs italic text-red-500">
                {errors.first_name && <p>{errors.first_name?.message}</p>}
              </small>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="Mail"
                className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white"
              />
              <small className="text-xs italic text-red-500">
                {errors.email && <p>{errors.email?.message}</p>}
              </small>
              <input
                {...register("phone_number")}
                type="phone_number"
                name="phone_number"
                placeholder="Phone number"
                className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white"
              />
              <small className="text-xs italic text-red-500">
                {errors.phone_number && <p>{errors.phone_number?.message}</p>}
              </small>
              <textarea
                {...register("message")}
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Message"
                className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white"
              ></textarea>
              <small className="text-xs italic text-red-500">
                {errors.message && <p>{errors.message?.message}</p>}
              </small>
              {/* <MainButton className="mx-auto flex justify-center">
                Submit
              </MainButton> */}
              <button
                className="mx-auto flex w-32 justify-center rounded-sm bg-primary px-5 py-3 text-xs text-white"
                type="submit"
              >
                {submitState}
              </button>
              <div className="mx-auto flex flex-col items-center gap-y-2 md:hidden">
                <p className="text-tertiary-100">Share on</p>
                <span className="flex gap-3">
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/instagram.svg"
                      alt="instagram"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                  </Link>
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/xtwitter.svg"
                      alt="xtwitter"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                  </Link>
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/facebook.svg"
                      alt="facebook"
                      width={8}
                      height={8}
                      className="shrink-0"
                    />
                  </Link>
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/linkedin.svg"
                      alt="linkedin"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
