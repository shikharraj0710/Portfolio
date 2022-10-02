import React, { useState } from "react";

export default function ContactForm() {
  const [info, setInfo] = useState({});
  const [nameErr, setNameErr] = useState(false);

  const handleForm = (e) => {
    let pattern = /^[a-z]+$/i;
    console.log(!pattern.test(e.target.value))
    if(e.target.name == "name" && !pattern.test(e.target.value) && e.target.value?.trim() != '')  setNameErr(true) 
    else {
        setNameErr(false)
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let pattern = /^[a-z]+$/i;

    Object.keys(info).includes("name") &&
      Object.keys(info).includes("email") &&
      pattern.test(info?.name) ?
    (  setNameErr(false),
       (info?.message?.toString().trim() == '' && setInfo(prev => ({...prev, message : ''}))),
       console.log(info),
      fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then(() => {
          document.getElementById("form").reset();
          setNameErr(false);
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
            setInfo(prev => {})
        })) :
        setNameErr(true)

  };

  return (
    <>
      <div className="border-4 rounded-4 border-darkGolden  rounded-lg w-[80%] mx-auto py-8 px-6 flex flex-col md:flex-row items-start md:items-center md:mb-20 mb-10">
        <div className="font-heading text-4xl capitalize text-customBlack tracking-wide md:w-[50%] mb-10 md:mb-0 ">
          want to get in touch ?
        </div>
        <div className="grow font-content">
          <form id="form" onSubmit={handleSubmit} autoComplete="off">
            <div className="flex justify-around md:mb-5">
              <div className="flex flex-col gap-2">
                <label for="name">Full Name</label>
                <input
                  autoComplete="new-password"
                  className="form-input rounded-md text-sm outline-none"
                  onInput={handleForm}
                  type="text"
                  id="name"
                  placeholder="Enter your Full name"
                  title="Enter your full name"
                  required
                  name="name"
                />
                {nameErr && (
                  <div
                    id="nameError"
                    className="text-customRed font-heading tracking-wider "
                  >
                    Name is incorrect
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label for="email">Email</label>
                <input
                  autoComplete="new-password"
                  className="form-input rounded-md text-sm outline-none"
                  onInput={handleForm}
                  type="email"
                  placeholder="Enter your email"
                  title="Enter your primary email"
                  required
                  name="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:px-7">
              <label for="message">Message</label>
              <textarea
                spellCheck="off"
                onInput={handleForm}
                placeholder="Enter your message"
                className="rounded-md resize-none outline-none"
                name="message"
              />
            </div>

            <div className="flex justify-end md:px-7 md:mt-5">
              <button
                type="submit"
                id="open-btn"
                className="uppercase font-sans border-2 border-darkGolden rounded-md p-2 hover:bg-orange-400 hover:text-white transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 tracking-widest"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
