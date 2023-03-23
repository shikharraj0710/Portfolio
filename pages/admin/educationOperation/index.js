import Head from 'next/head';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { server } from "../../../config";

function educationOperationIndex({ data, length }) {
    const dataState = useMemo(() => data, [data]);
    return (
        <>
            <Head><title>Education/Courses</title></Head>
            <div className="min-h-[70vh] my-16">
                <div className='grid grid-cols-2 items-center mb-8 w-4/5 mx-auto'>
                    <div className="text-md text-right uppercase font-heading font-bold">
                    Education/Courses
                    </div>
                        <Link href='/admin/educationOperation/addEducation'>
                        <a className=' ml-auto mx-auto text-right border-2 border-solid border-darkGolden rounded-md px-5 py-1 uppercase text-customBlack tracking-wider font-medium transition-all focus:outline-none  hover:text-white hover:font-medium hover:bg-[#eba352] '>Add</a>
                        </Link>
                        
                </div>

                <div className="container flex justify-center mx-auto w-4/5">
                    <div className="flex flex-col">
                        <div className="w-full">
                            <div className="border-b border-gray-200 shadow">
                                <table className="divide-y divide-gray-300 ">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Course/Degree
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                College/Institute
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Percentage
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Session
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Edit
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    {length > 0 && <tbody className="bg-white divide-y divide-gray-300">
                                        {dataState.map(e => (
                                            <tr className="whitespace-nowrap" key={e._id}>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {e.course}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {e.college}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {e.percentage}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {e.session}
                                                </td>

                                                <td className="px-6 py-4">
                                                    <Link href={`${server}/admin/educationOperation/edit/${e._id}`}>
                                                    <a  className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 hover:bg-indigo-800 hover:text-white 
                                                focus:bg-indigo-800 focus:text-white  rounded-full">Edit</a>
                                                </Link>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link href={`${server}/admin/educationOperation/delete/${e._id}`}>
                                                    <a className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full
                                             hover:bg-red-800 hover:text-white 
                                                focus:bg-red-800 focus:text-white  
                                                ">Delete</a>
                                                    </Link>
                                                    
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default educationOperationIndex;

export async function getServerSideProps() {

    const res = await fetch(`${server}/api/education`, {
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

