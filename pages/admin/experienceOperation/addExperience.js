import React, { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { server } from '../../../config';
import { useRouter } from 'next/router';
import Link from 'next/link';

function addExperience() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [experienceValues, setExperienceValues] = useState({});
    function handleExperienceValues(e) {
        setExperienceValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleAddFormSubmit() {
        try {
            const info = { ...experienceValues };
            const response = await fetch(`${server}/api/experience`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            });
            const dataBack = await response.json();
            console.log(dataBack)
        } catch (error) {
            console.error(error);
        } finally {
            document.getElementById("experienceAddForm").reset();
            reset();
            setExperienceValues({});
            router.push("/admin/experienceOperation")
        }
    }

    return (
        <>
            <Head><title>Add Experience</title></Head>
            <div className='min-h-[70%]'>
                <div className='grid place-items-center my-16 '>
                    <Link href='/admin/experienceOperation/'>
                        <a className=' ml-auto mx-auto text-right border-2 border-solid border-darkGolden rounded-md px-5 py-1 uppercase text-customBlack tracking-wider font-medium transition-all focus:outline-none  hover:text-white hover:font-medium hover:bg-[#eba352] ' >View All Experiences</a>
                    </Link>
                </div>

                <form id="experienceAddForm" className="mb-8 md:mb-16 ">
                    <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
                        <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden py-5">
                            <div className="text-md text-center uppercase font-heading font-bold">
                                add experience
                            </div>
                            <div className="overflow-x-auto w-full">
                                <div className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                                    <div className="divide-y divide-gray-200 capitalize">
                                        <div className="grid ">
                                            <div className="flex flex-col">

                                                <label htmlFor="title" className="px-6 py-2">Title</label>

                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='title'
                                                        id="title"
                                                        placeholder="Title"
                                                        title="Title"

                                                        onInput={handleExperienceValues}
                                                        {...register("title", {
                                                            required: {
                                                                value: true,
                                                                message: "Title cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.title && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.title?.message}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="duration" className="px-6 py-2">Duration </label>

                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='duration'
                                                        id="duration"
                                                        placeholder="Duration"
                                                        title="Duration"

                                                        onInput={handleExperienceValues}
                                                        {...register("duration", {
                                                            required: {
                                                                value: true,
                                                                message: "Duration cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.duration && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.duration?.message}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">

                                                <label htmlFor="organization" className="px-6 py-2">Organization </label>

                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='organization'
                                                        id="organization"
                                                        placeholder="Organization"
                                                        title="Organization"
                                                        defaultValue={experienceValues?.organization ?? ""}
                                                        onInput={handleExperienceValues}
                                                        {...register("organization", {
                                                            required: {
                                                                value: true,
                                                                message: "Organization cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.organization && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.organization?.message}
                                                        </span>
                                                    )}

                                                </p>
                                            </div>
                                            <div className="flex flex-col">

                                                <label htmlFor="designation" className="px-6 py-2">Designation </label>

                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='designation'
                                                        id="designation"
                                                        placeholder="Designation"
                                                        title="Designation"

                                                        onInput={handleExperienceValues}
                                                        {...register("designation", {
                                                            required: {
                                                                value: true,
                                                                message: "Designation cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.designation && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.designation?.message}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className=" bg-green-400 hover:bg-lime-500 hover:text-white focus:bg-lime-500 focus:text-white text-slate-800 font-extrabold tracking-wider py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={handleSubmit(handleAddFormSubmit)}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default addExperience
