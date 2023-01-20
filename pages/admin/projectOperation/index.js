import Head from 'next/head';
import React, { useMemo } from 'react';
import { server } from "../../../config";

function projectOperationIndex({ data, length }) {
  const dataState = useMemo(() => data, [data]);
  return (
    <>
      <Head><title>Projects</title></Head>
      <div className="min-h-[70vh] my-16">
        <div className='grid grid-cols-2 items-center mb-8 w-4/5 mx-auto'>
          <div className="text-md text-right uppercase font-heading font-bold">
            projects
          </div>
          <button className=''>
            <a className=' ml-auto text-right border-2 border-solid border-darkGolden rounded-md px-5 py-1 uppercase text-customBlack tracking-wider font-medium transition-all focus:outline-none  hover:text-white hover:font-medium hover:bg-[#eba352] ' href='/admin/experienceOperation/addProject'>Add</a>
          </button>
        </div>

        <div className="container flex justify-center mx-auto w-4/5">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="border-b border-gray-200 shadow">
                <table className="divide-y divide-gray-300 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Index
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Duration
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Organization
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Designation
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
                          {e.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {e.duration}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {e.institute}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {e.expertise}
                        </td>

                        <td className="px-6 py-4">
                          <a href={`${server}/admin/experienceOperation/edit/${e._id}`} className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 hover:bg-indigo-800 hover:text-white 
                                                focus:bg-indigo-800 focus:text-white  rounded-full">Edit</a>
                        </td>
                        <td className="px-6 py-4">
                          <a href={`${server}/admin/experienceOperation/delete/${e._id}`} className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full
                                             hover:bg-red-800 hover:text-white 
                                                focus:bg-red-800 focus:text-white  
                                                ">Delete</a>
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

export default projectOperationIndex;

export async function getServerSideProps() {

  const res = await fetch(`${server}/api/projects`, {
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

