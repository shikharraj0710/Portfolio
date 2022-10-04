import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { server } from "../../config";

export default function AddSkills({ data, length }) {
  const [dataState, setDataState] = useState(data.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [skills, setSkills] = useState({
    skill: "",
    rating: "",
  });
  const handleNewSkill = (e) => {
    setSkills((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    const info = {
      skill: skills.skill,
      progress: skills.rating,
    };
    fetch(`${server}/api/skill`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then(function (data1) {
        console.log(data1);
        setDataState((prev) => [...prev, info]);
      });
    document.getElementById("skillsForm").reset();
    setSkills((prev) => ({ ...prev, skill: "", rating: "" }));
  };
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-wrap  gap-3 justify-left md:justify-center w-[80%] ">
        {dataState.map((d, i) => (
          <button
            className=" border-2 border-solid border-darkGolden rounded-md px-3 py-2 uppercase text-customBlack tracking-wider font-medium  focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] "
            key={i}
          >
            {d.skill}
          </button>
        ))}
      </div>
      <form id="skillsForm">
        <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
          <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden">
            <div className="overflow-x-auto w-full">
              <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <tbody className="divide-y divide-gray-200 capitalize">
                  <tr className="grid ">
                    <div className="flex flex-col">
                      <td className="px-6 py-2">
                        <label htmlFor="skill">Enter new Skill </label>
                      </td>
                      <td className="px-6 py-2 grid gap-3">
                        <input
                          required
                          type="text"
                          placeholder="Enter Your New Skill"
                          title="Enter your New Skill"
                          id="skill"
                          name="skill"
                          onInput={handleNewSkill}
                          autoFocus
                          {...register("skill", {
                            required: {
                              value: true,
                              message: "Skill cannot be empty",
                            },
                          })}
                          className="w-full  bg-gray-100 text-black outline-none px-5 py-2 rounded-sm"
                        />
                        {errors?.skill && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors?.skill?.message}
                          </span>
                        )}
                      </td>
                    </div>
                    <div className="flex flex-col">
                      <td className="px-6 py-2">
                        <label htmlFor="skill">Enter rating </label>
                      </td>
                      <td className="px-6 py-2 grid gap-3">
                        <input
                          required
                          type="number"
                          min="1"
                          step="0.5"
                          max="10"
                          placeholder="Enter Skill Rating"
                          title="Enter Skill Rating"
                          id="rating"
                          name="rating"
                          onInput={handleNewSkill}
                          autoFocus
                          {...register("rating", {
                            required: {
                              value: true,
                              message: "Skill must have a rating",
                            },
                          })}
                          className="w-full  bg-gray-100 text-black outline-none px-5 py-2 rounded-sm"
                        />
                        {errors?.rating && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors?.rating?.message}
                          </span>
                        )}
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              className=" bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline mb-5"
              type="button"
              onClick={handleSubmit(handleFormSubmit)}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export async function getServerSideProps({ params, req }) {

  const res = await fetch(`${server}/api/skill`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      length: data.length ?? 0,
    },
  };
}
