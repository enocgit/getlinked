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
import { Checkbox, useDisclosure } from "@nextui-org/react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { baseUrl } from "@/baseUrl";
import useSWR from "swr";
import { FaSmileWink, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import RegisterSuccessModal from "@/components/registerSuccessModal";

type Props = {};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  phone_number: z
    .string()
    .max(13, { message: "Please enter a valid phone number" })
    .min(10, { message: "Please enter a valid phone number" }),
  team_name: z.string().min(1, { message: "Please enter team name" }),
  group_size: z.coerce.number().gt(0, { message: "Group size can't be zero" }),
  project_topic: z.string().min(1, { message: "Please enter Project topic" }),
  category: z.coerce.number(),
  privacy_poclicy_accepted: z.boolean(),
});

type FormValues = {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
};

const RegisterPage = (props: Props) => {
  const router = useRouter();

  const {
    data: categoriesList,
    error: categoriesListError,
    isLoading: categoriesListLoading,
  } = useSWR(`${baseUrl}/hackathon/categories-list`, fetcher);

  const [submitState, setSubmitState] = useState<"submit" | "submitting...">("submit");

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
      const res = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast("Email already taken", {
          icon: <FaTimes className="text-red-400" />,
        });
        setSubmitState("submit");
        console.log(res);
        return "Email already taken";
      }
      const createdData = await res.json();
      if (createdData) {
        onOpen();
        reset();
        setSubmitState("submit");
      }
    } catch (error) {
      toast("Failed to register", {
        icon: <FaTimes className="text-red-400" />,
      });
      setSubmitState("submit");

      console.log(error);
      return error;
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { backgroundColor: "#100B20", color: "#FFF" },
        }}
      />
      <Section className="relative overflow-x-hidden text-white">
        <div className="relative flex flex-col items-center gap-x-20 md:flex-row md:gap-y-8">
          <div className="relative space-y-3">
            <Glow className="vibrate-1 -left-40 top-0 opacity-30 sm:-left-48" />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="-top-20 left-0 hidden md:block"
            />
            <div className="swing-in-top-fwd relative order-1 h-60 w-60 md:order-2 md:max-lg:h-80 md:max-lg:w-80 lg:h-[30rem] lg:w-[30rem]">
              <Image
                src="/png/guy-thumbs-up.png"
                alt="Gentleman behind table"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="relative w-full max-w-[35rem] rounded-md bg-transparent md:bg-white/3 md:p-14 md:shadow-md">
            <BgAesthetic
              src="/png/star-white.png"
              className="-right-6 bottom-40 h-5 w-5 md:-right-32 md:bottom-0 md:h-10 md:w-10"
            />
            <BgAesthetic
              src="/png/star-purple.png"
              className="bottom-20 left-0 hidden md:-left-10 md:bottom-40 md:block"
            />
            <BgAesthetic
              src="/png/star-neutral.png"
              className="right-0 top-10 h-5 w-5 md:right-20 md:top-5 md:h-[initial] md:w-[initial]"
            />
            <BgAesthetic
              src="/png/star-gradient.png"
              className="-top-8 right-32 h-5 w-5 md:hidden"
            />
            <Glow className="vibrate-1 bottom-[28rem] right-60 opacity-40 md:-right-40 md:bottom-0" />

            <h3
              className={`${clashDisplay.className} text-2xl text-tertiary-100`}
            >
              Register
            </h3>
            <p className="relative mt-5 inline-flex items-center text-xs leading-loose">
              Be a part of this moment
              <span className="absolute -bottom-5 -right-24 inline-block h-20 w-20">
                <Image
                  src="/png/people-on-robe.png"
                  alt="People on robe"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </span>
            </p>
            <p className="text-lg uppercase leading-loose md:text-2xl">
              Create your Account
            </p>
            <form
              action=""
              className="mt-5 grid grid-cols-2 gap-5 text-sm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-span-2 space-y-1 sm:col-span-1 md:max-xl:col-span-2">
                <label htmlFor="team-name" className="capitalize">
                  Team&apos;s name
                </label>
                <input
                  {...register("team_name")}
                  type="text"
                  name="team_name"
                  id="team_name"
                  placeholder="Enter the name of your group"
                  className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white/30"
                />
                <small className="text-xs italic text-red-500">
                  {errors.team_name && <p>{errors.team_name?.message}</p>}
                </small>
              </div>
              <div className="col-span-2 space-y-1 sm:col-span-1 md:max-xl:col-span-2">
                <label htmlFor="phone_number" className="capitalize">
                  Phone
                </label>
                <input
                  {...register("phone_number")}
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Enter your phone number"
                  className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white/30"
                />
                <small className="text-xs italic text-red-500">
                  {errors.phone_number && <p>{errors.phone_number?.message}</p>}
                </small>
              </div>
              <div className="col-span-2 space-y-1 sm:col-span-1 md:max-xl:col-span-2">
                <label htmlFor="email" className="capitalize">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white/30"
                />
                <small className="text-xs italic text-red-500">
                  {errors.email && <p>{errors.email?.message}</p>}
                </small>
              </div>
              <div className="col-span-2 space-y-1 sm:col-span-1 md:max-xl:col-span-2">
                <label htmlFor="project_topic" className="capitalize">
                  Project Topic
                </label>
                <input
                  {...register("project_topic")}
                  type="text"
                  name="project_topic"
                  id="project_topic"
                  placeholder="What is your group project topic"
                  className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white/30"
                />
                <small className="text-xs italic text-red-500">
                  {errors.project_topic && (
                    <p>{errors.project_topic?.message}</p>
                  )}
                </small>
              </div>
              <div className="col-span-2 space-y-1 xs:max-sm:col-span-1 sm:col-span-1 md:max-xl:col-span-2">
                <label htmlFor="category" className="capitalize">
                  Category
                </label>
                <select
                  {...register("category")}
                  id="category"
                  name="category"
                  placeholder="What is your group project topic"
                  className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white/30"
                >
                  <option
                    value=""
                    className={`text-neutral-800 ${
                      categoriesListError && "text-red-500"
                    }`}
                    disabled
                  >
                    {categoriesListError && "Couldn't get categories"}
                    {categoriesListLoading
                      ? " Loading categories..."
                      : "Select your category"}
                  </option>
                  {categoriesList?.map((category) => {
                    return (
                      <option
                        key={category.id}
                        value={category.id}
                        className="text-neutral-800"
                      >
                        {category.id} ({category.name})
                      </option>
                    );
                  })}
                </select>
                <small className="text-xs italic text-red-500">
                  {errors.category && <p>{errors.category?.message}</p>}
                </small>
              </div>
              <div className="col-span-2 space-y-1 xs:max-sm:col-span-1 sm:col-span-1 md:max-xl:col-span-2">
                <label htmlFor="group_size" className="capitalize">
                  Group size
                </label>
                <select
                  {...register("group_size")}
                  id="group_size"
                  name="group_size"
                  placeholder="What is your group project topic"
                  className="w-full rounded-sm border border-white bg-transparent p-2 placeholder:text-white/30"
                >
                  <option value="" className="text-neutral-800" disabled>
                    Select
                  </option>
                  <option value="1" className="text-neutral-800">
                    1
                  </option>
                  <option value="2" className="text-neutral-800">
                    2
                  </option>
                  <option value="3" className="text-neutral-800">
                    3
                  </option>
                  <option value="4" className="text-neutral-800">
                    4
                  </option>
                  <option value="5" className="text-neutral-800">
                    5
                  </option>
                  <option value="6" className="text-neutral-800">
                    6
                  </option>
                  <option value="7" className="text-neutral-800">
                    7
                  </option>
                  <option value="8" className="text-neutral-800">
                    8
                  </option>
                  <option value="9" className="text-neutral-800">
                    9
                  </option>
                  <option value="10" className="text-neutral-800">
                    10
                  </option>
                </select>
                <small className="text-xs italic text-red-500">
                  {errors.group_size && <p>{errors.group_size?.message}</p>}
                </small>
              </div>

              <p className="col-span-2 italic leading-loose text-tertiary-200">
                Please review your registration details before submitting
              </p>
              <div className="col-span-2 flex items-start gap-x-2">
                {/* <Checkbox
                  {...register("privacy_poclicy_accepted")}
                  size="sm"
                  type="checkbox"
                > */}
                <input
                  {...register("privacy_poclicy_accepted")}
                  id="privacy_poclicy_accepted"
                  type="checkbox"
                  className="translate-y-[2px] accent-tertiary-100 "
                />
                <label htmlFor="privacy_poclicy_accepted">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
              {/* <MainButton className="col-span-2 w-full">Submit</MainButton> */}
              <button
                className="col-span-2 mx-auto flex w-32 justify-center rounded-sm bg-primary px-5 py-3 text-xs text-white sm:w-full"
                type="submit"
              >
                {submitState}
              </button>
            </form>
          </div>
        </div>
      </Section>
      <RegisterSuccessModal
        modalIsOpen={isOpen}
        modalOnOpenChange={onOpenChange}
      />
    </>
  );
};

export default RegisterPage;
