import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { server } from "../config";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactForm({ hireRef }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [info, setInfo] = useState({});
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", duration: 1, bounce: 0.4 },
      });
    } else {
      animation.start({ x: "-100vw", opacity: 0.5 });
    }
  }, [inView]);

  const handleForm = (e) => {
    let namePattern = /^[A-Za-z\s]*$/;
    if (e.target.name === "email") setEmailErr(false);
    if (e.target.name === "name" && !namePattern.test(e.target.value)) {
      setNameErr(true);
    }
    else {

      setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    if (namePattern.test(e.target.value)) setNameErr(false)
  };

  const handleFormSubmit = async (e) => {
    let pattern = /^[A-Za-z\s]*$/;
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailPattern.test(info?.email)) {
      setEmailErr(true);
      return;
    }
    if (
      Object.keys(info).includes("name") &&
      Object.keys(info).includes("email") &&
      pattern.test(info?.name) &&
      !nameErr
    ) {
      setEmailErr(false);
      setNameErr(false);
      info?.message?.toString().trim() === "" &&
        setInfo((prev) => ({ ...prev, message: "" }));
      const response = await fetch(`${server}/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      const data = await response.json();
      document.getElementById("my-modal").classList.remove("hidden");
      document
        .getElementById("modal-content")
        .classList.contains("modal-animation-close") &&
        document
          .getElementById("modal-content")
          .classList.remove("modal-animation-close");
      document
        .getElementById("modal-content")
        .classList.add("modal-animation-open");
      setInfo(() => { });
      if (data?.statusCode === 200) {
        setMessageSent(true);
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.status);
            },
            (error) => {
              console.log(error.text);
            }
          )
          .finally(() => { setMessageSent(false); document.getElementById("form").reset(); reset() });
      }
    } else {
      setNameErr(true);
    }
  };

  return (
    <>
      <div ref={ref}>
        <motion.div
          animate={animation}
          ref={hireRef}
          className="border-4  rounded-4 border-darkGolden  rounded w-[95%] lg:w-[80%] mx-auto py-8 px-6 flex flex-col md:flex-row items-start md:items-center md:mb-20 mb-10"
        >
          <div className="font-heading text-center  text-4xl capitalize text-customBlack tracking-wide md:w-[50%] mb-10 md:mb-0 ">
            want to get in touch ?
          </div>
          <div className="font-content w-full md:w-auto md:grow">
            <form id="form" autoComplete="off" ref={form}>
              <div className="flex flex-col md:flex-row gap-4 md:px-7 justify-around md:mb-5">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name">Full Name</label>
                  <input
                    autoComplete="new-password"
                    className="form-input rounded-md text-sm outline-none"
                    onInput={handleForm}
                    type="text"
                    id="name"
                    placeholder="Enter your Full name"
                    title="Enter your full name"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name cannot be empty",
                      },
                    })}
                  />
                  {errors?.name && (
                    <div className="text-customRed font-heading tracking-wider text-xs">
                      {errors?.name?.message}
                    </div>
                  )}
                  {nameErr && (
                    <div className="text-customRed font-heading tracking-wider text-xs">
                      Name is incorrect
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    autoComplete="new-password"
                    className="form-input rounded-md text-sm outline-none"
                    onInput={handleForm}
                    type="email"
                    placeholder="Enter your email"
                    title="Enter your primary email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email cannot be empty",
                      },
                    })}
                  />
                  {errors?.email && (
                    <div className="text-customRed font-heading tracking-wider text-xs">
                      {errors?.email?.message}
                    </div>
                  )}
                  {emailErr && (
                    <div className="text-customRed font-heading tracking-wider text-xs">
                      Email is incorrect
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:px-7 mt-6 md:mt-4 lg:mt-0">
                <label htmlFor="message">Message</label>
                <textarea
                  spellCheck="off"
                  onInput={handleForm}
                  placeholder="Enter your message"
                  className="rounded-md resize-none outline-none"
                  name="message"
                  id="message"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message cannot be empty",
                    },
                  })}
                />
                {errors?.message && (
                  <div className="text-customRed font-heading tracking-wider text-xs">
                    {errors?.message?.message}
                  </div>
                )}
              </div>

              <div className="flex justify-center lg:justify-end md:px-7 md:mt-5 mt-6 lg:mt-4">
                {messageSent ? (
                  <button
                    type="button"
                    disabled
                    className="px-4 animate-bounce uppercase font-sans border-2 border-darkGolden rounded-md p-2 cursor-not-allowed transition ease-in-out delay-50  tracking-widest"
                  >
                    sending...
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit(handleFormSubmit)}
                    id="open-btn"
                    className="px-4 uppercase font-sans border-2 border-darkGolden rounded-md p-2 hover:bg-orange-400 hover:text-white transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 tracking-widest"
                  >
                    send message
                  </button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}
