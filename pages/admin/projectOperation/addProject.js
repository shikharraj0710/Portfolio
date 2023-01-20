import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { server } from "../../../config/index"

export default function addProject({ data, length, data2 }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const [maxId, setMaxId] = useState(length > 0 ? parseInt(data2.sort((a, b) => b.index - a.index)[0].index) : 0)
    const handleFormSubmit = (d, e) => {
        d.index = document.getElementById("index").value
        fetch(`${server}/api/projects`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(d),
        })
            .then((res) => res.json())
            .then(function (data1) {
                console.log(data1);
                setMaxId(prev => prev + 1)
                router.push("/projects")
            });
    }
    return (
        <>
            <form id="projectForm">
                <div className="p-4 my-16 w-full md:w-4/5 mx-auto bg-slate-200 rounded-md drop-shadow-lg shadow-xl">
                    <div className="flex text-sm flex-col gap-3 justify-center items-center h-full border-2 border-amber-600 border-opacity-60 rounded-lg overflow-hidden">
                        <div className="overflow-x-auto w-full">
                            <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                                <tbody className="divide-y divide-gray-200 capitalize">
                                    <tr className="grid ">
                                        <div className="flex flex-col">
                                            <td className="px-6 py-2">
                                                <label htmlFor="id">ID</label>
                                            </td>
                                            <td className="px-6 py-2 grid gap-3">
                                                <input
                                                    type="number"
                                                    readOnly
                                                    id="index"
                                                    name="index"
                                                    value={maxId + 1}
                                                    {...register("index")}
                                                    className="w-full  bg-gray-100 text-black outline-none px-5 py-2 rounded-sm"
                                                />

                                            </td>
                                        </div>
                                        <div className="flex flex-col">
                                            <td className="px-6 py-2">
                                                <label htmlFor="title">Enter Title</label>
                                            </td>
                                            <td className="px-6 py-2 grid gap-3">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Project Title"
                                                    title="Enter Project Title"
                                                    id="title"
                                                    name="title"
                                                    {...register("title", {
                                                        required: {
                                                            value: true,
                                                            message: "Title cannot be empty",
                                                        },
                                                    })}
                                                    className="w-full  bg-gray-100 text-black outline-none px-5 py-2 rounded-sm"
                                                />
                                                {errors?.title && (
                                                    <span className="text-xs text-red-500 font-helvetica">
                                                        {errors?.title?.message}
                                                    </span>
                                                )}
                                            </td>
                                        </div>
                                        <div className="flex flex-col">
                                            <td className="px-6 py-2">
                                                <label htmlFor="duration">Duration </label>
                                            </td>
                                            <td className="px-6 py-2 grid gap-3">
                                                <input

                                                    type="date"
                                                    placeholder="Enter Project Duration"
                                                    title="Enter Project Duration"
                                                    id="duration"
                                                    name="duration"

                                                    {...register("duration", {
                                                        required: {
                                                            value: true,
                                                            message: "Duration must have a rating",
                                                        },
                                                    })}
                                                    className="w-full  bg-gray-100 text-black outline-none px-5 py-2 rounded-sm"
                                                />
                                                {errors?.duration && (
                                                    <span className="text-xs text-red-500 font-helvetica">
                                                        {errors?.duration?.message}
                                                    </span>
                                                )}
                                            </td>
                                        </div>
                                        <div className="flex flex-col">
                                            <td className="px-6 py-2">
                                                <label htmlFor="desc">Description </label>
                                            </td>
                                            <td className="px-6 py-2 grid gap-3">
                                                <textarea placeholder="Enter Project Description"
                                                    title="Enter Project Description"
                                                    id="desc"
                                                    rows="7"
                                                    name="desc"
                                                    {...register("desc", {
                                                        required: {
                                                            value: true,
                                                            message: "Description cannot be empty",
                                                        },
                                                    })}
                                                    className="w-full resize-none bg-gray-100 text-black outline-none px-5 py-2 rounded-sm">

                                                </textarea>

                                                {errors?.desc && (
                                                    <span className="text-xs text-red-500 font-helvetica">
                                                        {errors?.desc?.message}
                                                    </span>
                                                )}
                                            </td>
                                        </div>
                                        <div className="flex flex-col">
                                            <td className="px-6 py-2">
                                                <label htmlFor="tech">Technology used </label>
                                            </td>
                                            <td className="px-6 py-2 grid gap-3 cursor-pointer">
                                                {data.map((d, i) => (
                                                    <div className='flex gap-4 items-center'><input type="checkbox" id={d.skill} name={d.skill} key={i} value={d.skill} className="accent-[#eba352]" {...register("skill", { required: { value: true, message: "Mention atleast one tech used..." } })} />

                                                        <label htmlFor={d.skill}>{d.skill} </label>
                                                    </div>

                                                ))}
                                                {errors?.skill && (
                                                    <span className="text-xs text-red-500 font-helvetica">
                                                        {errors?.skill?.message}
                                                    </span>
                                                )}
                                            </td>
                                        </div>
                                        <div className="flex flex-col">
                                            <td className="px-6 py-2">
                                                <label htmlFor="github">Github </label>
                                            </td>
                                            <td className="px-6 py-2 grid gap-3">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Project Github Link"
                                                    title="Enter Project Github Link"
                                                    id="github"
                                                    name="github"

                                                    {...register("github")}
                                                    className="w-full  bg-gray-100 text-black outline-none px-5 py-2 rounded-sm"
                                                />
                                            </td>
                                        </div>

                                        <div className="flex flex-col">
                                            <td className="px-6 py-2">
                                                <label htmlFor="visit">Website Link </label>
                                            </td>
                                            <td className="px-6 py-2 grid gap-3">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Project Website Link"
                                                    title="Enter Project Website Link"
                                                    id="visit"
                                                    name="visit"
                                                    {...register("visit")}
                                                    className="w-full  bg-gray-100 text-black outline-none px-5 py-2 rounded-sm"
                                                />
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
    )
}
export async function getServerSideProps() {

    const res = await fetch(`${server}/api/skill`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const res2 = await fetch(`${server}/api/projects`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    const data2 = await res2.json();
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data: data?.data,
            length: data2?.data.length ?? 0,
            data2: data2?.data
        },
    };
}