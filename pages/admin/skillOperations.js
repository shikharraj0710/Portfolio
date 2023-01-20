import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { server } from "../../config";

export default function SkillOperations({ data, length }) {
  const [dataState, setDataState] = useState(data.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: reset2
  } = useForm();
  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
    reset: reset3
  } = useForm();
  const [editRatingInfo, setEditRatingInfo] = useState({});
  const [deleteSkill, setDeleteSkill] = useState({});
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
    reset();
  };

  function handleEditSelectChange(e) {
    setEditRatingInfo(prev => ({ ...prev, selectedSkillId: e.target.value }))
  }

  function handleEditFormSubmit() {
    const info = { ...editRatingInfo }
    fetch(`${server}/api/skill`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then(function (data1) {
        console.log(data1)
      }).finally(() => {
        document.getElementById("skillsEditForm").reset();
        setEditRatingInfo({});
        setDataState(prev => {
          const ar = prev.filter(e => e._id !== info.selectedSkillId);
          const obj = prev.find(e => e._id === info.selectedSkillId);
          const newObj = { ...obj, skill: info.newSkillName, progress: info.newRating }
          ar.push(newObj);
          return ar
        })
        reset2();
      })
  }

  async function handleDeleteFormSubmit() {
    try {
      const info = { id: deleteSkill.selectedSkillId };
      const response = await fetch(`${server}/api/skill`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      const data = await response.json();
      console.log(data);
      document.getElementById("skillsDeleteForm").reset();
      reset3();
      setDeleteSkill({});
      setDataState(prev => prev.filter(e => e._id !== info.id))
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
      <Head><title>Skill Operations</title> </Head>
      <div className="text-md text-center uppercase font-heading font-bold my-8">
        skills
      </div>
      <div className="lg:flex-grow md:w-1/2  mx-auto flex flex-wrap bg-white rounded-md px-5 py-3 gap-3 justify-left md:justify-center w-[80%] ">

        {dataState.map((d, i) => (
          <div className="flex items-center text-xs md:text-sm">
            <button
              className=" border-2 border-solid border-darkGolden rounded-l-md px-3 py-2 uppercase text-customBlack tracking-wider font-medium bg-gray-100 focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] "
              key={i}
            >
              {d.skill}
            </button>
            <span className="text-slate-800 tracking-wider font-bold bg-darkGolden rounded-r-md h-full px-2 grid place-items-center">{d?.progress}</span>
          </div>
        ))}
      </div>
      <form id="skillsForm" className="my-8 md:my-12">
        <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
          <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden py-5">
            <div className="text-md text-center uppercase font-heading font-bold">
              add new skill
            </div>
            <div className="overflow-x-auto w-full">
              <div className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <div className="divide-y divide-gray-200 capitalize">
                  <div className="grid ">
                    <div className="flex flex-col">

                      <label htmlFor="skill" className="px-6 py-2">Enter new Skill </label>

                      <p className="px-6 py-2 grid gap-3">
                        <input
                          required
                          type="text"
                          placeholder="Enter Your  Skill"
                          title="Enter your  Skill"
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
                          className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                        />
                        {errors?.skill && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors?.skill?.message}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col">

                      <label htmlFor="rating" className="px-6 py-2">Enter rating </label>

                      <p className="px-6 py-2 grid gap-3">
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
                          className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                        />
                        {errors?.rating && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors?.rating?.message}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className=" bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit(handleFormSubmit)}
            >
              Save
            </button>
          </div>
        </div>
      </form>

      <form id="skillsEditForm" className="my-8 md:my-12">
        <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
          <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden py-5">
            <div className="text-md text-center uppercase font-heading font-bold">
              edit skill
            </div>
            <div className="overflow-x-auto w-full">
              <div className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <div className="divide-y divide-gray-200 capitalize">
                  <div className="grid ">
                    <div className="flex flex-col">

                      <label htmlFor="editskillselect" className="px-6 py-2">Select Skill to edit</label>

                      <p className="px-6 py-2 grid gap-3">
                        <select className="text-sm" value={setEditRatingInfo?.selectedSkillId} required onChange={handleEditSelectChange} id="editskillselect">
                          <option value="default" >Select Skill to Edit</option>
                          {dataState?.map((e) => (
                            <option value={e._id} key={e._id}>{e.skill}</option>
                          ))
                          }
                        </select>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="selectedSkillProgressEdit" className="px-6 py-2">Enter New Skill Name </label>

                      <p className="px-6 py-2 grid gap-3">
                        <input
                          type="number"
                          id="selectedSkillProgressEdit"
                          placeholder="Selected Skill's Progress will appear here"
                          title="Select Skill to see the progress"
                          defaultValue={(editRatingInfo?.selectedSkillId && dataState.find(e => e._id === editRatingInfo?.selectedSkillId)?.progress) ?? ""}
                          readOnly
                          className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                        />

                      </p>
                    </div>
                    <div className="flex flex-col">

                      <label htmlFor="skillEdit" className="px-6 py-2">Enter New Skill Name </label>

                      <p className="px-6 py-2 grid gap-3">
                        <input
                          required
                          type="text"
                          placeholder="Enter Your New Skill"
                          title="Enter your New Skill"
                          id="skillEdit"
                          name="skillEdit"
                          onInput={(e) => setEditRatingInfo((prev) => ({ ...prev, newSkillName: e.target.value }))}
                          autoFocus
                          {...register2("skillEdit", {
                            required: {
                              value: true,
                              message: "Skill cannot be empty",
                            },
                          })}
                          className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                        />
                        {errors2?.skillEdit && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors2?.skillEdit?.message}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col">

                      <label htmlFor="ratingEdit" className="px-6 py-2">Enter new rating </label>

                      <p className="px-6 py-2 grid gap-3">
                        <input
                          required
                          type="number"
                          min="1"
                          step="0.5"
                          max="10"
                          placeholder="Enter New Skill Rating"
                          title="Enter New Skill Rating"
                          id="ratingEdit"
                          name="ratingEdit"
                          onInput={(e) => setEditRatingInfo((prev) => ({ ...prev, newRating: e.target.value }))}
                          autoFocus
                          {...register2("ratingEdit", {
                            required: {
                              value: true,
                              message: "New Skill must have a rating",
                            },
                          })}
                          className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                        />
                        {errors2?.ratingEdit && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors2?.ratingEdit?.message}
                          </span>
                        )}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <button
              className=" bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit2(handleEditFormSubmit)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>

      <form id="skillsDeleteForm" className="my-8 md:my-12">
        <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
          <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden py-5">
            <div className="text-md text-center uppercase font-heading font-bold">
              Delete skill
            </div>
            <div className="overflow-x-auto w-full">
              <div className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <div className="divide-y divide-gray-200 capitalize">
                  <div className="grid ">
                    <div className="flex flex-col">

                      <label htmlFor="deleteSkillSelect" className="px-6 py-2">Select Skill to delete</label>

                      <p className="px-6 py-2 grid gap-3">
                        <select className="text-sm" id="deleteSkillSelect" value={setDeleteSkill?.selectedSkillId} required onChange={(e) => setDeleteSkill(prev => ({ ...prev, selectedSkillId: e.target.value }))}>
                          <option value="default" >Select Skill to Delete</option>
                          {dataState?.map((e) => (
                            <option value={e._id} key={e._id}>{e.skill}</option>
                          ))
                          }
                        </select>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="deletedSkillId" className="px-6 py-2">Skill Id </label>

                      <p className="px-6 py-2 grid gap-3">
                        <input
                          type="number"

                          placeholder="Selected Skill's Progress will appear here"
                          title="Select Skill to see the progress"
                          value={(deleteSkill?.selectedSkillId && dataState.find(e => e._id === deleteSkill.selectedSkillId)?.progress) ?? " "}
                          readOnly
                          name="deletedSkillId"
                          id="deletedSkillId"
                          {...register3("deletedSkillId", {
                            required: {
                              value: true,
                              message: "Select Skill to see its Progress",
                            },
                          })}
                          className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                        />
                        {errors3?.deletedSkillId && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors3?.deletedSkillId?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="confirmDeleteSkill" className="px-6 py-2">Confirm Again</label>

                      <p className="px-6 py-2 grid gap-3">
                        <input
                          type="text"
                          placeholder="Confirm Deleting by writing the Skill Name"
                          title="Confirm Deleting by writing the Skill Name"
                          onInput={e => setDeleteSkill(prev => ({ ...prev, confirmText: e.target.value }))}
                          name="confirmDeleteSkill"
                          id="confirmDeleteSkill"
                          {...register3("confirmDeleteSkill", {
                            required: {
                              value: true,
                              message: "Confirm Deleting by writing the Skill Name",
                            },
                          })}
                          className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                        />
                        {errors3?.confirmDeleteSkill && (
                          <span className="text-xs text-red-500 font-helvetica">
                            {errors3?.confirmDeleteSkill?.message}
                          </span>
                        )}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <button
              className="  bg-red-700 hover:bg-red-600 text-white font-medium py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline tracking-widest disabled:cursor-not-allowed disabled:bg-red-300"
              type="submit"
              disabled={dataState.find(e => e._id === deleteSkill.selectedSkillId)?.skill?.toString().toLowerCase() !== deleteSkill?.confirmText?.toLowerCase()}
              onClick={handleSubmit3(handleDeleteFormSubmit)}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export async function getServerSideProps() {

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
