import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { server } from '../../../../config';

function deleteExperience({ data }) {
    const router = useRouter();
    const { deleteSlug: id } = router.query;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const experienceValues = useMemo(() => ({
        title: data?.title,
        duration: data?.duration,
        organization: data?.institute,
        designation: data?.expertise
    }), [data]);
    const [confirmText, setConfirmText] = useState("");

    async function handleDeleteFormSubmit() {
        try {
            const info = { confirmText };
            const response = await fetch(`${server}/api/experience?id=${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            });
            const dataBack = await response.json();
            console.log(dataBack)
        } catch (error) {
            console.error(error);
        } finally {
            document.getElementById("experienceDeleteForm").reset();
            reset();
            setConfirmText("")
            router.back();
        }
    }

    return (
        <>
            <Head><title>Delete Experience</title></Head>
            <div className='min-h-[70%]'>
                <div className='grid place-items-center my-16 '>
                    <button className=''>
                        <a className=' ml-auto text-right border-2 border-solid border-darkGolden rounded-md px-5 py-1 uppercase text-customBlack tracking-wider font-medium transition-all focus:outline-none  hover:text-white hover:font-medium hover:bg-[#eba352] ' href='/admin/experienceOperation/'>View All Experiences</a>
                    </button>
                </div>

                <form id="experienceDeleteForm" className="mb-8 md:mb-16 ">
                    <div className="p-4 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
                        <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden py-5">
                            <div className="text-md text-center uppercase font-heading font-bold">
                                Delete experience
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
                                                        id="title"
                                                        placeholder="Title"
                                                        title="Title"
                                                        defaultValue={experienceValues.title}
                                                        readOnly
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="duration" className="px-6 py-2">Duration </label>

                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        placeholder="Duration"
                                                        title="Duration"
                                                        id='duration'
                                                        defaultValue={experienceValues.duration}
                                                        readOnly
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                </p>
                                            </div>
                                            <div className="flex flex-col">

                                                <label htmlFor="organization" className="px-6 py-2">Organization </label>

                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        id='organization'
                                                        placeholder="Organization"
                                                        title="Organization"
                                                        defaultValue={experienceValues.organization}
                                                        readOnly
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="designation" className="px-6 py-2">Designation </label>
                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        id='designation'
                                                        placeholder="Designation"
                                                        title="Designation"
                                                        defaultValue={experienceValues.designation}
                                                        readOnly
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="check" className="px-6 py-2">Type DELETE to confirm </label>
                                                <p className="px-6 py-2 grid gap-3">
                                                    <input
                                                        type="text"
                                                        placeholder="Type DELETE"
                                                        title="Type DELETE to confirm"
                                                        id='check'
                                                        onInput={e => setConfirmText(e.target.value)}
                                                        {...register("check", {
                                                            required: {
                                                                value: true,
                                                                message: "Verification Text cannot be empty",
                                                            },
                                                        })}
                                                        className="w-full text-sm bg-gray-100 text-black outline-none px-5 py-1 rounded-sm"
                                                    />
                                                    {errors?.check && (
                                                        <span className="text-xs text-red-500 font-helvetica">
                                                            {errors?.check?.message}
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
                                disabled={confirmText !== "DELETE"}
                                onClick={handleSubmit(handleDeleteFormSubmit)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default deleteExperience;

export async function getServerSideProps(context) {

    const { deleteSlug } = context.params;

    const res = await fetch(`${server}/api/experience?id=${deleteSlug}`, {
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

