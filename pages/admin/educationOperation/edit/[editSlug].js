import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { server } from '../../../../config';
import { useRouter } from 'next/router';
import Link from 'next/link';

function editEducation({ data, length }) {
    const router = useRouter();
    const { editSlug: id } = router.query;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [educationValues, setEducationValues] = useState({
        course: data?.course,
        college: data?.college,
        percentage: data?.percentage,
        session: data?.session
    });

    function handleExperienceValues(e) {
        setEducationValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleEditFormSubmit() {
        try {
            const info = { ...educationValues };
            const response = await fetch(`${server}/api/education?id=${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            });
            const dataBack = await response.json();
        } catch (error) {
            console.error(error);
        } finally {
            document.getElementById("educationEditForm").reset();
            reset();
            setEducationValues({});
            router.back();
        }
    }

    return (
        <>
            <Head><title>Edit Eucation/Courses</title></Head>
            <div className='min-h-[70%]'>
                <div className='grid place-items-center my-16 '>
                    <Link href='/admin/experienceOperation/'>
                        <a className=' ml-auto mx-auto text-right border-2 border-solid border-darkGolden rounded-md px-5 py-1 uppercase text-customBlack tracking-wider font-medium transition-all focus:outline-none  hover:text-white hover:font-medium hover:bg-[#eba352]'>View All Education</a>
                    </Link>
                </div>
                <form id="educationEditForm" className="my-8 md:my-12">
                    <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
                        <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden py-5">
                            <div className="text-md text-center uppercase font-heading font-bold">
                                edit Education
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
                                                        defaultValue={educationValues?.course ?? ""}
                                                        onInput={handleExperienceValues}
                                                        {...register("course", {
                                                            required: {
                                                                value: true,
                                                                message: "Course/Degree cannot be empty",
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
                                                        placeholder="College/Institute"
                                                        title="College/Institute"
                                                        defaultValue={educationValues?.college ?? ""}
                                                        onInput={handleExperienceValues}
                                                        {...register("college", {
                                                            required: {
                                                                value: true,
                                                                message: "College/Institute cannot be empty",
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

                                                <label htmlFor="percentage" className="px-6 py-2">Percentage </label>

                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        name='percentage'
                                                        id="percentage"
                                                        placeholder="Percentage"
                                                        title="Percentage"
                                                        defaultValue={educationValues?.percentage ?? ""}
                                                        onInput={handleExperienceValues}
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
                                                        defaultValue={educationValues?.session ?? ""}
                                                        onInput={handleExperienceValues}
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
                                onClick={handleSubmit(handleEditFormSubmit)}
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

export default editEducation;

export async function getServerSideProps(context) {

    const { editSlug } = context.params;

    const res = await fetch(`${server}/api/education?id=${editSlug}`, {
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
            data: data?.data,
            length: data?.data?.length ?? 0,
        },
    };
}
