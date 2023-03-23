import React, { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { server } from '../../../config';
import { useRouter } from 'next/router';
import Link from 'next/link';

function addEducation() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [educationValues, setEducationValues] = useState({});
    function handleEducationValues(e) {
        setEducationValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleAddFormSubmit() {
        try {
            const info = { ...educationValues };
            const response = await fetch(`${server}/api/education`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            });
            const dataBack = await response.json();
        } catch (error) {
            console.error(error);
        } finally {
            document.getElementById("educationAddForm").reset();
            reset();
            setEducationValues({});
            router.push("/admin/educationOperation")
        }
    }

    return (
        <>
            <Head><title>Add Education</title></Head>
            <div className='min-h-[70%]'>
                <div className='grid place-items-center my-16 '>
                    <Link href='/admin/educationOperation'>
                        <a className=' ml-auto mx-auto text-right border-2 border-solid border-darkGolden rounded-md px-5 py-1 uppercase text-customBlack tracking-wider font-medium transition-all focus:outline-none  hover:text-white hover:font-medium hover:bg-[#eba352] ' >View All Educations</a>
                    </Link>
                </div>

                <form id="educationAddForm" className="mb-8 md:mb-16 ">
                    <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
                        <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden py-5">
                            <div className="text-md text-center uppercase font-heading font-bold">
                                add Education
                            </div>
                            <div className="overflow-x-auto w-full">
                                <div className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                                    <div className="divide-y divide-gray-200 capitalize">
                                        <div className="grid ">
                                            <div className="flex flex-col">
                                                <label htmlFor="course" className="px-6 py-2">Course/Degree</label>
                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='course'
                                                        id="course"
                                                        placeholder="Course/Degree"
                                                        title="Course/Degree"
                                                        onInput={handleEducationValues}
                                                        {...register("course", {
                                                            required: {
                                                                value: true,
                                                                message: "Course cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.course && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.course?.message}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="college" className="px-6 py-2">College/Institute </label>
                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='college'
                                                        id="college"
                                                        placeholder="College/Institute "
                                                        title="College/Institute "
                                                        onInput={handleEducationValues}
                                                        {...register("college", {
                                                            required: {
                                                                value: true,
                                                                message: "College cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.college && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.college?.message}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="Percentage" className="px-6 py-2">Percentage </label>
                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='percentage'
                                                        id="Percentage"
                                                        placeholder="Percentage"
                                                        title="Percentage"
                                                        defaultValue={educationValues?.percentage ?? ""}
                                                        onInput={handleEducationValues}
                                                        {...register("percentage", {
                                                            required: {
                                                                value: true,
                                                                message: "Percentage cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.percentage && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.percentage?.message}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="session" className="px-6 py-2">Session </label>
                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='session'
                                                        id="session"
                                                        placeholder="Session"
                                                        title="Session"
                                                        onInput={handleEducationValues}
                                                        {...register("session", {
                                                            required: {
                                                                value: true,
                                                                message: "Session cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.session && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.session?.message}
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

export default addEducation
